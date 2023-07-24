import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User } from '../../utils/types';
import { Box, Divider, Typography } from '@mui/material';
import { membershipStyles } from './styles';

const styles = membershipStyles();

const Membership = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (isLoggedIn === true) {
          const response = await axios.get(`http://localhost:5000/api/v1/users/${user.email}/info`);
          setUserData(response.data);
        } else {
          navigate('/login')
        }
      } catch (error) {
        console.log('Error fetching user data: ', error);
        navigate('/login')
      }
    };

    fetchUserData();
  }, [isLoggedIn, user.email, navigate]);

  return (
    <div 
      style={{ 
        height: '1000px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}
    >
      {isLoggedIn && userData && (
          <Box sx={styles.name}>
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '10%',
              marginBottom: '5%',
            }}
          >
            Welcome, {userData.name}!
          </Typography>
          <Divider variant="middle" sx={{ marginBottom: '7%' }}/>
          <Box sx={styles.attribute}>
            <Typography 
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Your email: {userData.email}
            </Typography>
          </Box>
          <Box sx={styles.attribute}>
            <Typography 
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Your major: {userData.major}
            </Typography>
          </Box>
          <Box sx={styles.attribute}>
            <Typography 
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Your expected graduation year: {userData.expectedGraduationYear}
            </Typography>
          </Box>
          </Box>
        )
      }
    </div>
  );
};

export default Membership;
