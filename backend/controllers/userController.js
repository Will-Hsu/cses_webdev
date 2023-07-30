import User from '../models/user.js';
import { body, param, validationResult } from 'express-validator';
import asyncHandler from 'express-async-handler';

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
  const { name, email, major, expectedGraduateYear } = req.body;
  const parsedGraduationYear = parseInt(expectedGraduateYear);
  const newUser = new User({
    name,
    email,
    major,
    expectedGraduationYear: parsedGraduationYear,
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
    const user = await User.findOne({ email });

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
  body('expectedGraduationYear').optional().isNumeric(),

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

export default {
  userCheck,
  userCreate,
  getUserInfo,
  userUpdate,
  userDelete,
};
