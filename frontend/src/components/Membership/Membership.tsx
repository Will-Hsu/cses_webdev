import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User } from '../../utils/types';
import { Box, Button, Divider, Typography } from '@mui/material';
import { membershipStyles } from './styles';
import MemberProfile from './MemberProfile'

const styles = membershipStyles();

const Membership = () => {
  const { user, isLoggedIn, logout } = useContext(AuthContext);
  const [userData, setUserData] = useState<User | null>(null);
  const navigate = useNavigate();

  // Note from Will -- I commented this out, so we can focus on coding up the UI for this milestone
  /*useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (isLoggedIn === true) {
          const response = await axios.get(`http://127.0.0.1:5000/api/v1/users/${user.email}/info`);
          setUserData(response.data);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.log('Error fetching user data: ', error);
        navigate('/login');
      }
    };

    fetchUserData();
  }, [isLoggedIn, user.email, navigate]);*/

  return (
    <>
      <div style={{ color: 'white', position: 'relative', top: '93px' }}>
        {/*userData && <MemberProfile memberName='{userData.name}' />*/}
        {<MemberProfile memberName='Joyce Lu' />}
      </div>
      <div style={{ color: 'white', position: 'relative', top: '700px' }}>
        Add Events Attended + Leaderboard UI for the membership page @Brian & Eddie & Yashil --
        consider creating a separate component for this as well
      </div>
      <div
        style={{
          height: '1000px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              Welcome, {userData.name}!
            </Typography>
            <Divider variant="middle" sx={{ marginBottom: '7%' }} />
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
            <Button variant="outlined" onClick={logout}>
              Logout
            </Button>
          </Box>
        )}
      </div>
    </>
  );
};

export default Membership;
