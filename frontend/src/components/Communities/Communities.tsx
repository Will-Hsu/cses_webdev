import React from 'react';
import { Box, Typography } from '@mui/material';
import './Communities.css';

const communities = [
  { title: 'Dev', body: 'Placeholder description for the Dev community.' },
  { title: 'Open Source', body: 'Placeholder description for the Open Source community.' },
  { title: 'Innovate', body: 'Placeholder description for the Innovate community.' },
];

const Communities = () => {
  return (
    <Box className="communities-page">
      <Typography className="communities-heading">Communities</Typography>
      <Typography className="communities-subtext">
        CSES is made up of several communities, each focused on a different way to build,
        learn, and grow together. Placeholder copy — real content coming soon.
      </Typography>

      <Box className="communities-grid">
        {communities.map((community) => (
          <Box key={community.title} className="communities-card">
            <Typography className="communities-card-title">{community.title}</Typography>
            <Typography className="communities-card-body">{community.body}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Communities;
