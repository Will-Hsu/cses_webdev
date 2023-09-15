import React, { useState } from 'react';
import { Avatar, Box, Grid, Typography, createTheme, useMediaQuery } from '@mui/material';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

interface MemberProfileProps {
  memberName: string;
  memberMajor: string;
  memberPoints: number;
  memberPicture: string;
  memberEventsCount: number;
}

const getProgress = (eventCount: number) => {
  if (eventCount >= 0 && eventCount < 1) {
    return 0;
  } else if (eventCount >= 1 && eventCount < 4) {
    return ((eventCount - 1) / 3) * 100;
  } else if (eventCount >= 4 && eventCount < 10) {
    return ((eventCount - 4) / 6) * 100;
  } else if (eventCount >= 10 && eventCount < 15) {
    return ((eventCount - 10) / 5) * 100;
  } else if (eventCount >= 15 && eventCount < 20) {
    return ((eventCount - 15) / 5) * 100;
  } else if (eventCount >= 20 && eventCount < 26) {
    return ((eventCount - 20) / 6) * 100;
  } else if (eventCount >= 26 && eventCount < 33) {
    return ((eventCount - 26) / 7) * 100;
  } else {
    return 100;
  }
};

const getTier = (eventCount: number) => {
  console.log('events count: ' + eventCount);
  if (eventCount === 0) {
    return 'Bronze I';
  } else if (eventCount < 3) {
    return 'Bronze II';
  } else if (eventCount < 6) {
    return 'Bronze III';
  } else if (eventCount < 10) {
    return 'Bronze IV';
  } else if (eventCount < 15) {
    return 'Silver I';
  } else if (eventCount < 20) {
    return 'Silver II';
  } else if (eventCount < 26) {
    return 'Silver III';
  } else if (eventCount < 33) {
    return 'Silver IV';
  } else if (eventCount >= 33) {
    return 'Gold';
  } else {
    return 'Unknown Tier';
  }
};

const MemberProfile = (userData: MemberProfileProps) => {
  const theme = createTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const [isHovered, setIsHovered] = useState(false);

  function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography
            variant="body2"
            color="white"
            fontSize="clamp(1rem, 1.5vw, 1rem)"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <div style={{ color: 'white', position: 'relative', top: '93px' }}>
      <h1
        style={{
          textAlign: 'center',
          fontFamily: 'Chakra Petch',
          fontSize: 'clamp(2rem, 4vw, 4rem)',
          marginTop: '8%',
        }}
      >
        MEMBER PROFILE
      </h1>
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        {isXsScreen ? (
          <Grid item xs={12}>
            <Avatar
              alt="Dog"
              src={userData.memberPicture}
              sx={{ width: 180, height: 180, margin: '0 auto' }}
            />
          </Grid>
        ) : (
          <Grid item xs={12} sm={4.5} lg={2.7}>
            <Avatar
              alt="Dog"
              //src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg"
              src={userData.memberPicture}
              sx={{ width: 250, height: 250 }}
            />
          </Grid>
        )}
        <div>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
              margin: '0',
              marginTop: '10%',
            }}
          >
            Welcome Back,
          </p>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
              margin: '0',
              marginBottom: '5%',
            }}
          >
            {userData.memberName}
          </p>
          <Box
            sx={{ width: '110%' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <LinearProgressWithLabel
              value={getProgress(userData.memberEventsCount)}
              sx={{
                backgroundColor: 'black',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#F3C969',
                },
                height: '25px',
                borderRadius: '10px',
                border: '1px solid #F3C969',
              }}
            />
            {isHovered && (
              <div
                className="info-box"
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  padding: '3px 20px',
                  maxWidth: '40%',
                  borderRadius: '15px',
                  fontSize: '12px',
                  position: 'absolute',
                }}
              >
                <p> This progress bar displays your progress towards the next membership tier. </p>
              </div>
            )}
          </Box>

          <p style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1rem)' }}>
            Member Tier:{' '}
            <span style={{ fontWeight: 'bold' }}>{getTier(userData.memberEventsCount)}</span>{' '}
            <span style={{ color: '#F3C969', fontWeight: 'bold' }}>|</span> Point Balance:{' '}
            <span style={{ fontWeight: 'bold' }}>{userData.memberPoints}</span>
          </p>
          <p style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1rem)' }}>
            Major: <span style={{ fontWeight: 'bold' }}>{userData.memberMajor}</span>{' '}
          </p>
        </div>
      </Grid>
    </div>
  );
};

export default MemberProfile;
