import Event from '../models/event.js';
import asyncHandler from 'express-async-handler';
import { body, param, validationResult } from 'express-validator';
import crypto from 'crypto';
import validator from 'validator';
import qr from 'qrcode';

// Display list of all Events.
export const eventList = asyncHandler(async (req, res) => {
  const { type, year, month } = req.query;
  try {
    const query = {};
    const currentDate = new Date();

    // specify to retrieve past or upcoming events
    if (type == 'past') {
      query.end_time = { $lt: currentDate };
    }

    if (type == 'upcoming') {
      query.end_time = { $gte: currentDate };
    }

    // specify to retrieve events between a given timeframe (year & month)
    if (month !== undefined && year !== undefined) {
      // If both month and year are provided, filter based on the specific month and year
      const startDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      const endDate = new Date(parseInt(year), parseInt(month), 1);
      query.start_time = { $gte: startDate, $lt: endDate };
    } else if (year !== undefined) {
      const startDate = new Date(parseInt(year), 0, 1);
      const endDate = new Date(parseInt(year) + 1, 0, 1);
      query.start_time = { $gte: startDate, $lt: endDate };
    } else if (month !== undefined) {
      // query events of this current year if only month is specified
      const startDate = new Date(currentDate.getFullYear(), parseInt(month) - 1, 1);
      const endDate = new Date(currentDate.getFullYear(), parseInt(month), 1);
      query.start_time = { $gte: startDate, $lt: endDate };
    }

    // Retrieve events from database (sorted by start time)
    const events = await Event.find(query).sort({ start_time: 1 });

    // Extract attributes from each event
    const eventAttributes = events.map((event) => {
      const {
        _id,
        title,
        start_time,
        end_time,
        location,
        major_event,
        description,
        calendar_link,
        instagram_link,
        code,
        qrCode,
      } = event;
      return {
        _id,
        title,
        start_time,
        end_time,
        location,
        major_event,
        description,
        calendar_link,
        instagram_link,
        code,
        qrCode,
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
  body('location').trim().isLength({ min: 1 }).withMessage('Location must be specified.'),
  body('major_event').isBoolean().withMessage('Major event must be a boolean.'),
  body('description').optional().trim(),
  body('calendar_link')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Calendar link must be specified.')
    .isURL({ require_protocol: true })
    .withMessage('Calendar link must be a valid URL.'),
  body('instagram_link')
    .trim()
    .custom((url) => {
      if (url === '' || validator.isURL(url, { require_protocol: true })) {
        return true;
      }

      throw new Error('Instagram link must be a valid URL.');
    }),

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
        .then((d) => {
          const sha256Hash = crypto.createHash('sha256').update(d._id.toString()).digest('hex');

          // Take the first 6 characters of the hash and convert them to a number
          const sixDigitCode = parseInt(sha256Hash.substring(0, 6), 16) % 1000000;

          // Ensure it's a 6-digit number by padding with zeros if needed
          const sixDigit = String(sixDigitCode).padStart(6, '0');

          // Create qr code using 6-digit code
          const url = `https://csesucsd.com/login/?eventCode=${sixDigit}`;

          qr.toDataURL(url, (err, qrCodeData) => {
            Event.updateOne({ _id: d._id }, { code: sixDigit, qrCode: qrCodeData })
              .then(() => res.json({ message: 'Successful', id: d._id, code: sixDigit, qrCode: qrCodeData }))
              .catch((error) => res.status(500).json({ message: 'Internal server error', error }));
          });
        }).catch((error) => res.status(500).json({ message: 'Internal server error', error }));
    }
  })
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
export const eventUpdate = [
  // Validate and sanitize fields.
  param('id')
    .trim()
    .notEmpty()
    .withMessage('ID must be specified.')
    .isMongoId()
    .withMessage('ID must be a valid ID.'),

  body().notEmpty().withMessage('Request body cannot be empty.'),

  body('title').optional().trim(),
  body('start_time')
    .optional()
    .trim()
    .isISO8601()
    .toDate()
    .withMessage('Start time must be a valid date.'),
  body('end_time')
    .optional()
    .trim()
    .isISO8601()
    .toDate()
    .withMessage('End time must be a valid date.'),
  body('location').optional().trim(),
  body('major_event').optional().isBoolean().withMessage('Major event must be a boolean.'),
  body('description').optional().trim(),
  body('calendar_link')
    .optional()
    .trim()
    .isURL({ require_protocol: true })
    .withMessage('Calendar link must be a valid URL.'),
  body('instagram_link')
    .optional({ checkFalsy: true })
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
      // Data from param and body is valid.
      // Query database for event with given ID
      const event = await Event.findById(req.params.id).exec();

      if (!event) {
        // Event not found.
        res.status(404).json({ message: 'Event not found' });
      } else {
        // Update the record.
        Event.updateOne({ _id: req.params.id }, req.body)
          .then(() => res.json({ message: 'Successful' }))
          .catch(() => res.status(500).json({ message: 'Internal server error' }));
      }
    }
  }),
];

// Export default controller methods
export default {
  eventList,
  eventDetail,
  eventCreate,
  eventDelete,
  eventUpdate,
};
