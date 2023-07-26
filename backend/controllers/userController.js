import User from '../models/user.js';
import { body } from 'express-validator';
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

// TODO: implement this
export const userRead = asyncHandler(async (req, res) => {
  res.send('TODO: read user');
});

// TODO: implement this
export const userUpdate = asyncHandler(async (req, res) => {
  res.send('TODO: update user');
});

// TODO: implement this
export const userDelete = asyncHandler(async (req, res) => {
  res.send('TODO: delete user');
});

export default {
  userCheck,
  userCreate,
  getUserInfo,
  userRead,
  userUpdate,
  userDelete,
};
