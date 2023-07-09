import express from 'express';
const router = express.Router();

// Require controller modules.
import eventController from '../controllers/eventController.js';

/// EVENT ROUTES ///

// GET request for list of all Event items.
router.get('/events', eventController.eventList);

// GET request for one Event.
router.get('/event/:id', eventController.eventDetail);

// POST request for creating Event.
router.post('/event/create', eventController.eventCreate);

// DELETE request to delete Event.
router.delete('/event/:id/delete', eventController.eventDelete);

// PUT request to update Event.
router.put('/event/:id/update', eventController.eventUpdate);

// Export router.
export default router;
