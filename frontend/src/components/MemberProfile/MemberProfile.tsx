import React from 'react';
//import { AuthContext } from '../../context/AuthContext';
//import { useNavigate } from 'react-router-dom';
//import axios from 'axios';
//import { User } from '../../utils/types';
import {
  Avatar,
  Box,
  // Button,
  // Divider,
  Grid,
  Typography,
  createTheme,
  useMediaQuery,
} from '@mui/material';
// import { memberProfile } from './styles';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

// const styles = memberProfile();


interface MemberProfileProps {
  memberName: string;
  memberEmail: string;
  memberMajor: string;
  memberExpectedGraduationYear: number;
  memberPoints: number;
  memberProfilePicture: string;
}

const MemberProfile = ( userData: MemberProfileProps) => {
  const theme = createTheme();
  // const isSmScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isXsScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

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
              alt="profilepicture"
              src={userData.memberProfilePicture}
              sx={{ width: 180, height: 180, margin: '0 auto' }}
            />
          </Grid>
        ) : (
          <Grid item xs={12} sm={4.5} lg={2.7}>
            <Avatar
              alt="profilepicture"
              src={userData.memberProfilePicture}
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
            Welcome Back
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
          <Box sx={{ width: '110%' }}>
            <LinearProgressWithLabel
              value={25}
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
          </Box>

          <p style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1rem)' }}>
            Member Tier: <span style={{ fontWeight: 'bold' }}>JUNIOR</span>{' '}
            <span style={{ color: '#F3C969', fontWeight: 'bold' }}>|</span> Point Balance:{' '}
            <span style={{ fontWeight: 'bold' }}>{userData.memberPoints}</span>
          </p>
        </div>
      </Grid>
    </div>
  );
};

export default MemberProfile;
