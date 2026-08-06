import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import './Home.css';

const upcomingEventsPreview = [
  { title: '[Event 1]', body: 'Placeholder event description.' },
  { title: '[Event 2]', body: 'Placeholder event description.' },
  { title: '[Event 3]', body: 'Placeholder event description.' },
];

const communitiesPreview = [
  { title: 'Dev', body: 'Placeholder community description.' },
  { title: 'Open Source', body: 'Placeholder community description.' },
  { title: 'Innovate', body: 'Placeholder community description.' },
];

const Home = () => {
  return (
    <Box className="home-page">
      <Typography className="home-hero-heading">Create. Solve. Evolve.</Typography>
      <Typography className="home-hero-subtitle">
        We're CSES, UC San Diego's largest student-led computing organization.
        Placeholder copy — real content coming soon.
      </Typography>

      <Box className="home-cta-wrapper">
        <Button component={RouterLink} to="/join-us" className="home-cta-button">
          Join Us
        </Button>
      </Box>

      <Box className="home-section">
        <Typography className="home-section-title">Upcoming Events</Typography>
        <Box className="home-card-grid">
          {upcomingEventsPreview.map((event) => (
            <Box key={event.title} className="home-card">
              <Typography className="home-card-title">{event.title}</Typography>
              <Typography className="home-card-body">{event.body}</Typography>
            </Box>
          ))}
        </Box>
        <Box className="home-secondary-button-wrapper">
          <Button component={RouterLink} to="/events" className="home-secondary-button">
            See Events Page
          </Button>
        </Box>
      </Box>

      <Box className="home-section">
        <Typography className="home-section-title">Communities</Typography>
        <Box className="home-card-grid">
          {communitiesPreview.map((community) => (
            <Box key={community.title} className="home-card">
              <Typography className="home-card-title">{community.title}</Typography>
              <Typography className="home-card-body">{community.body}</Typography>
            </Box>
          ))}
        </Box>
        <Box className="home-secondary-button-wrapper">
          <Button component={RouterLink} to="/communities" className="home-secondary-button">
            See Communities Page
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
