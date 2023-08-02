import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User } from '../../utils/types';
import { Avatar, Box, Button, Divider, Grid, Typography } from '@mui/material';
import { memberProfile } from './styles';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

const styles = memberProfile();

const MemberProfile = () => {
  function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="white" fontSize="clamp(0.5rem, 1.5vw, 1rem)">{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <div style={{ color: 'white', position: 'relative', top: '93px' }}>
      <h1 style={{ textAlign: 'center', fontFamily: 'Inter', fontSize: 'clamp(2rem, 3.5vw, 4rem)', marginTop: '8%' }}>
        MEMBER PROFILE
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3%'}}>
        <Avatar
          alt="Dog"
          src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg"
          sx={{ width: 250, height: 250}}
        />
        <div>
          <p style={{ fontWeight: 'bold', fontSize: 'clamp(1rem, 2.5vw, 2rem)', margin: '0' }}>Welcome Back</p>
          <p style={{ fontWeight: 'bold', fontSize: 'clamp(1rem, 2.5vw, 2rem)', margin: '0', marginBottom: '5%' }}>
            Last Name, First Name
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

          <p style={{ fontSize: 'clamp(0.5rem, 2.5vw, 1rem)' }}>
            Member Tier: <span style={{ fontWeight: 'bold' }}>JUNIOR</span>{' '}
            <span style={{ color: '#F3C969', fontWeight: 'bold' }}>|</span> Point Balance:{' '}
            <span style={{ fontWeight: 'bold' }}>45</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
