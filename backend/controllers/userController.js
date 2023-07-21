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

export default {
  userCheck,
  userCreate,
};
