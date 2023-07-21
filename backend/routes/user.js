import express from 'express';
const router = express.Router();

// Require controller modules.
import userController from '../controllers/userController.js';

/// User Routes ///

// POST request for creating new user.
router.post('/create', userController.userCreate);

// GET request for getting a user's info.
router.get('/:email/info', userController.getUserInfo);

// GET request for checking if user exists.
router.post('/check', userController.userCheck);

// TODO: other CRUD methods

// Export router.
export default router;
