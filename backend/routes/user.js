import express from 'express';
const router = express.Router();

// Require controller modules.
import userController from '../controllers/userController.js';

/// User Routes ///

// POST request for creating new user.
router.post('/create', userController.userCreate);

// GET request for getting top performers.
router.get('/:email/userRank', userController.getUserRank);

// GET request for getting top performers.
router.get('/topMembers', userController.getTopMembers);

// GET request for getting users count.
router.get('/usersCount', userController.getUsersCount);

// GET request for getting a user's info.
router.get('/:email', userController.getUserInfo);

// GET request for checking if user exists.
router.post('/check', userController.userCheck);

// PUT request for updating a user's info.
router.put('/:email', userController.userUpdate);

// POST request for creating new event entries for a user.
router.post('/:email/event/:code', userController.userEventsUpdate);

// DELETE request for deleting a user.
router.delete('/:email', userController.userDelete);

// PUT request to redeem small prize.
router.put('/:email/redeemSmall', userController.redeemSmall);

// PUT request to redeem medium prize.
router.put('/:email/redeemMedium', userController.redeemMedium);

// PUT request to redeem large prize.
router.put('/:email/redeemLarge', userController.redeemLarge);

// Export router.
export default router;
