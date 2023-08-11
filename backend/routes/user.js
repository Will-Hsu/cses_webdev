import express from 'express';
const router = express.Router();

// Require controller modules.
import userController from '../controllers/userController.js';

/// User Routes ///

// POST request for creating new user.
router.post('/create', userController.userCreate);

// GET request for getting top performers.
router.get('/topMembers', userController.getTopMembers);

// GET request for getting a user's info.
router.get('/:email', userController.getUserInfo);

// GET request for checking if user exists.
router.post('/check', userController.userCheck);

// TODO: other CRUD methods

// PUT request for updating a user's info.
router.put('/:email', userController.userUpdate);

// POST request for creating new event entries for a user.
router.post('/:email/event/:id', userController.userEventsUpdate);

// DELETE request for deleting a user.
router.delete('/:email', userController.userDelete);

// Export router.
export default router;
