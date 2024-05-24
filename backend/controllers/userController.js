import mongoose from 'mongoose';
import User from '../models/user.js';
import RedeemLog from '../models/redeemLog.js';
import Event from '../models/event.js';
import { body, param, validationResult } from 'express-validator';
import asyncHandler from 'express-async-handler';
import sendEmail from '../gmail_api/gmail_api.js';

export const getUsersCount = asyncHandler(async (_, res) => {
  try {
    const count = await User.countDocuments();

    res.status(200).json(count);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export const userCheck = [
  body('email').notEmpty().isEmail(),
  asyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      res.json({ exists: true, user: user });
    } else {
      res.json({ exists: false });
    }
  }),
];

export const userCreate = asyncHandler(async (req, res) => {
  const { name, email, major, expectedGraduateYear, profilePicture, minor } = req.body;
  const parsedGraduationYear = parseInt(expectedGraduateYear);
  const newUser = new User({
    name,
    email,
    major,
    minor,
    expectedGraduationYear: parsedGraduationYear,
    profilePicture,
  });

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

export const getUserInfo = asyncHandler(async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email }).populate('eventsAttended');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user info: ', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Handle User update on PUT.
export const userUpdate = [
  param('email')
    .notEmpty()
    .withMessage('Email must be specificed.')
    .isEmail()
    .withMessage('Invalid email.'),
  body('name').optional(),
  body('major').optional(),
  body('minor').optional(),
  body('expectedGraduationYear').optional().isNumeric(),
  body('points').optional().isNumeric(),
  body('eventsAttended')
    .optional()
    .isArray()
    .custom(isValidEventId)
    .withMessage('Contains invalid event ID.'),
  body('profilePicture').optional(),

  asyncHandler(async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      // There are errors.
      return res.status(400).json({ message: 'Failed', errors: error.array() });
    }
    // Data from param and body is valid.
    const { email } = req.params;

    // Query database for user with given ID
    const user = await User.findOne({ email }).exec();

    if (!user) {
      // User not found.
      res.status(404).json({ message: 'User not found' });
    } else {
      // Update the record.
      User.updateOne({ email: req.params.email }, req.body)
        .then(() => res.json({ message: 'Successful' }))
        .catch(() => res.status(500).json({ message: 'Internal server error' }));
    }
  }),
];

// Handle User delete on DELETE.
export const userDelete = [
  // Validate and sanitize fields.
  param('email', 'Email must not be empty.').notEmpty().isEmail().withMessage('Invalid email.'),

  asyncHandler(async (req, res) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are errors.
      res.status(400).json({ message: 'Failed', errors: errors.array() });
    }
    // Data from param is valid.
    const { email } = req.params;

    // Query database for user with given email
    const user = await User.findOne({ email }).exec();

    if (!user) {
      // User not found.
      res.status(404).json({ message: 'User not found' });
    } else {
      // User found, delete it.
      user
        .deleteOne()
        .then(() => res.json({ message: 'Successful' }))
        .catch(() => res.status(500).json({ message: 'Internal server error' }));
    }
  }),
];

// GET request for getting top performers.
export const getTopMembers = asyncHandler(async (_, res) => {
  try {
    const topUsers = await User.find()
      .sort({ points: -1 })
      .limit(3)
      .select('name email profilePicture points')
      .exec();

    // console.log(topUsers);
    res.status(200).json(topUsers);
  } catch (error) {
    console.error('Error fetching user info: ', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export const getUserRank = asyncHandler(async (req, res) => {
  const { email } = req.params;
  try {
    // Find all users sorted by points
    const allUsers = await User.find()
      .sort({ points: -1 })
      .select('name email profilePicture points')
      .exec();

    // Get the index of the current user in the sorted list
    const currentUserIndex = allUsers.findIndex((user) => user.email === email);

    res.status(200).json(currentUserIndex);
  } catch (error) {
    console.error('Error fetching user ranks: ', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST request for creating new event entries for a user.
export const userEventsUpdate = asyncHandler(async (req, res) => {
  const { email, code } = req.params;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const event = await Event.findOne({ code: code }).exec();

    if (!event) {
      return res.status(400).json({ message: 'Invalid Code.' });
    }

    // Get the current time
    const currentTime = new Date();

    // Check if the event has already started
    // hack for GBM
    if (code !== '996913' && currentTime < event.start_time) {
      return res.status(400).json({
        message: `Try again later! Event checkin will start in ${Math.ceil(
          hoursUntilEventStart,
        )} hours!`,
      });
    }

    // Calculate the time difference between the event start time and the current time in milliseconds
    const timeDifference = currentTime - event.start_time;

    console.log(currentTime, event.start_time);

    // Calculate the number of hours until the event starts (in hours)
    const hoursUntilEventStart = timeDifference / (1000 * 60 * 60);

    // if 24 hours after the event already started
    if (hoursUntilEventStart > 24) {
      return res.status(400).json({ message: 'Expired Code.' });
    }

    // Check if the event ID is already in the eventsAttended array
    if (user.eventsAttended.includes(event._id)) {
      return res.status(400).json({ message: 'Event already attended.' });
    }

    // Determine points based on whether the event is major or minor
    const pointsToAdd = event.major_event ? 300 : 100;

    // Update user's points
    user.points += pointsToAdd;

    // Add the event ID to the eventsAttended array
    user.eventsAttended.push(event._id);

    // Save the updated user
    await user.save();

    try {
      sendEmail(
        user.email,
        'Check-in sucessful!',
        `You successfuly checked into the "${event.title}" event!\nThis is your confirmation email in case something happens.\n\n❤️Thank you for coming!❤️`,
      );
    } catch (e) {
      console.error(`Failed to send email to ${user.email}. ${e}`);
    }

    return res.status(200).json({ message: 'Successfuly checked into the event!' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      message: 'Internal server error... please contact CSES staff if this keeps happening!',
    });
  }
});

export const redeemSmall = asyncHandler(async (req, res) => {
  const { email } = req.params;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (user.points >= 500) {
    const pointsBefore = user.points;
    user.points -= 500;
    const pointsAfter = user.points;

    // Perform additional prize actions here
    await user.save();
    await logRedeem(user._id, user.email, 'small', pointsBefore, pointsAfter);
    return res.status(200).json({ message: 'Small prize redeemed successfully ' });
  } else {
    return res.status(400).json({ message: 'Insufficient points for redemption' });
  }
});

export const redeemMedium = asyncHandler(async (req, res) => {
  const { email } = req.params;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (user.points >= 1250) {
    const pointsBefore = user.points;
    user.points -= 1250;
    const pointsAfter = user.points;

    // Perform additional prize actions here
    await user.save();
    await logRedeem(user._id, user.email, 'medium', pointsBefore, pointsAfter);
    return res.status(200).json({ message: 'Medium prize redeemed successfully ' });
  } else {
    return res.status(400).json({ message: 'Insufficient points for redemption' });
  }
});

export const redeemLarge = asyncHandler(async (req, res) => {
  const { email } = req.params;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (user.points >= 2500) {
    const pointsBefore = user.points;
    user.points -= 2500;
    const pointsAfter = user.points;

    // Perform additional prize actions here
    await user.save();
    await logRedeem(user._id, user.email, 'large', pointsBefore, pointsAfter);
    return res.status(200).json({ message: 'Large prize redeemed successfully ' });
  } else {
    return res.status(400).json({ message: 'Insufficient points for redemption' });
  }
});

export default {
  userCheck,
  userCreate,
  getUserInfo,
  userUpdate,
  userDelete,
  userEventsUpdate,
  getTopMembers,
  getUserRank,
  redeemSmall,
  redeemMedium,
  redeemLarge,
  getUsersCount,
};

function isValidEventId(eventIds) {
  return (
    Array.isArray(eventIds) && eventIds.every((eventId) => mongoose.Types.ObjectId.isValid(eventId))
  );
}

async function logRedeem(userId, userEmail, redeemType, pointsBefore, pointsAfter) {
  const redeemLog = new RedeemLog({
    userId,
    userEmail,
    redeemType,
    timestamp: Date.now(),
    pointsBefore,
    pointsAfter,
  });

  await redeemLog.save();
}
