import express from 'express';
const router = express.Router();

// Require controller modules.
import calendarController from '../controllers/calendarController.js';

/// CALENDAR ROUTES ///

// GET request for upcoming events synced from the CSES Google Calendar.
router.get('/events', calendarController.calendarEventList);

// Export router.
export default router;
