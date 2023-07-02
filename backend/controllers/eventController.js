import Event from '../models/event.js';
import asyncHandler from 'express-async-handler';

// Display list of all Events.
export const eventList = asyncHandler(async (req, res) => {
  try {
    // Retrieve events from database
    const events = await Event.find();

    // Extract attributes from each event 
    const eventAttributes = events.map((event) => {
      const { title, status, start_time, end_time, location, description, calendar_link, instagram_link } = event;
      return { title, status, start_time, end_time, location, description, calendar_link, instagram_link };
    });

    // Return array of all events and their attributes
    res.json(eventAttributes);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error'});
  }
});

// Display detail for a specific Event.
export const eventDetail = asyncHandler(async (req, res) => {
  res.send(`NOT IMPLEMENTED: Event detail: ${req.params.id}`);
});

// Handle Event create on POST.
export const eventCreate = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Event create POST');
});

// Handle Event delete on POST.
export const eventDelete = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Event delete POST');
});

// Handle Event update on POST.
export const eventUpdate = asyncHandler(async (req, res) => {
  res.send('NOT IMPLEMENTED: Event update POST');
});

// Export default controller methods
export default {
  eventList,
  eventDetail,
  eventCreate,
  eventDelete,
  eventUpdate,
};
