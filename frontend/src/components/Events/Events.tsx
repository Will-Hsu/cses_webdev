import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './Events.css';

const upcomingEvents = [
  { title: '[Event 1]', body: 'Placeholder event description.' },
  { title: '[Event 2]', body: 'Placeholder event description.' },
  { title: '[Event 3]', body: 'Placeholder event description.' },
  { title: '[Event 4]', body: 'Placeholder event description.' },
];

const pastEvents = [
  { title: '[Past Event 1]', body: 'Placeholder event description.' },
  { title: '[Past Event 2]', body: 'Placeholder event description.' },
  { title: '[Past Event 3]', body: 'Placeholder event description.' },
];

const filters = ['All', 'This Week', 'This Month'];

const Events = () => {
  return (
    <Box className="events-page">
      <Typography className="events-heading">Events</Typography>

      <Box className="events-filter-row">
        {filters.map((filter, index) => (
          <Button
            key={filter}
            className={`events-filter-button${index === 0 ? ' active' : ''}`}
          >
            {filter}
          </Button>
        ))}
      </Box>

      <Box className="events-grid">
        {upcomingEvents.map((event) => (
          <Box key={event.title} className="events-card">
            <Typography className="events-card-title">{event.title}</Typography>
            <Typography className="events-card-body">{event.body}</Typography>
          </Box>
        ))}
      </Box>

      <Typography className="events-heading">Past Events</Typography>

      {pastEvents.length > 0 ? (
        <Box className="events-grid">
          {pastEvents.map((event) => (
            <Box key={event.title} className="events-card">
              <Typography className="events-card-title">{event.title}</Typography>
              <Typography className="events-card-body">{event.body}</Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography className="events-empty-state">No past events.</Typography>
      )}
    </Box>
  );
};

export default Events;
