import Event from '../models/event.js';
import asyncHandler from 'express-async-handler';
import { body, param, validationResult } from 'express-validator';

// Display list of all Events.
export const eventList = asyncHandler(async (req, res) => {
  try {
    // Retrieve events from database
    const events = await Event.find();

    // Extract attributes from each event
    const eventAttributes = events.map((event) => {
      const {
        title,
        status,
        start_time,
        end_time,
        location,
        description,
        calendar_link,
        instagram_link,
      } = event;
      return {
        title,
        status,
        start_time,
        end_time,
        location,
        description,
        calendar_link,
        instagram_link,
      };
    });

    // Return array of all events and their attributes
    res.json(eventAttributes);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Display detail for a specific Event.
export const eventDetail = asyncHandler(async (req, res) => {
  const eventId = req.params.id;

  // Query database for event with given ID
  try {
    const event = await Event.findById(eventId);
    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Handle Event create on POST.
export const eventCreate = [
  // Validate and sanitize fields.
  body('title', 'Title must not be empty.')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Title must be specified.'),
  body('status', 'Status must not be empty.')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Status must be specified.')
    .isIn(['upcoming', 'past'])
    .withMessage('Status must be either upcoming or past.'),
  body('start_time', 'Start time must not be empty.')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Start time must be specified.')
    .isISO8601()
    .withMessage('Start time must be a valid date.')
    .toDate(),
  body('end_time', 'End time must not be empty.')
    .trim()
    .isLength({ min: 1 })
    .withMessage('End time must be specified.')
    .isISO8601()
    .withMessage('End time must be a valid date.')
    .toDate(),
  body('location').trim(),
  body('description').trim(),
  body('calendar_link')
    .trim()
    .isURL({ require_protocol: true })
    .withMessage('Calendar link must be a valid URL.'),
  body('instagram_link')
    .trim()
    .isURL({ require_protocol: true })
    .withMessage('Instagram link must be a valid URL.'),

  asyncHandler(async (req, res) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are errors.
      res.status(400).json({ message: 'Failed', errors: errors.array() });
    } else {
      // Data from body is valid.

      // Create an Event object with trimmed data.
      const event = new Event({ ...req.body });

      // Save event.
      event
        .save()
        .then((d) => res.json({ message: 'Successful', id: d._id }))
        .catch(() => res.status(500).json({ message: 'Internal server error' }));
    }
  }),
];

// Handle Event delete on DELETE.
export const eventDelete = [
  // Validate and sanitize fields.
  param('id', 'ID must not be empty.')
    .trim()
    .isLength({ min: 1 })
    .withMessage('ID must be specified.')
    .isMongoId()
    .withMessage('ID must be a valid ID.'),

  asyncHandler(async (req, res) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are errors.
      res.status(400).json({ message: 'Failed', errors: errors.array() });
    } else {
      // Data from param is valid.

      // Query database for event with given ID
      const event = await Event.findById(req.params.id).exec();

      if (!event) {
        // Event not found.
        res.status(404).json({ message: 'Event not found' });
      } else {
        // Event found, delete it.
        event
          .deleteOne()
          .then(() => res.json({ message: 'Successful' }))
          .catch(() => res.status(500).json({ message: 'Internal server error' }));
      }
    }
  }),
];

// Handle Event update on PUT.
export const eventUpdate = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Event update PUT');
});

// Export default controller methods
export default {
  eventList,
  eventDetail,
  eventCreate,
  eventDelete,
  eventUpdate,
};
