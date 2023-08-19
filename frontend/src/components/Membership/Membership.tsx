import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User } from '../../utils/types';
import { Box, Button, Divider, Typography } from '@mui/material';
import { membershipStyles } from './styles';
import EventsAttended from './EventsAttended';
import LeaderBoard from './LeaderBoard';
import MemberProfile from '../MemberProfile/MemberProfile';
import axios from 'axios';

const styles = membershipStyles();

const Membership = () => {
  const { user, isLoggedIn, logout } = useContext(AuthContext);
  const [userData, setUserData] = useState<User | null>(null);
  const navigate = useNavigate();

  // For demo purposes, we are hardcoding the events attended and leaderboard data
  const eventsAttended = [
    {
      title: 'Google ML SWE Alumnus Q&A',
      targetDate: new Date('2023-09-02T21:00:00.000Z'),
      location: 'Virtual',
      calendar_link: 'https://example.com/calendar',
      description: 'Event Description',
      end_time: '2023-09-02T23:00:00.000Z',
      instagram_link: 'https://www.instagram.com/event',
      start_time: '2023-09-02T21:00:00.000Z',
      _id: '64b81a1228022bc1461c5ea4',
    },
    {
      title: 'Google ML SWE Alumnus Q&A',
      targetDate: new Date('2023-09-02T21:00:00.000Z'),
      location: 'Virtual',
      calendar_link: 'https://example.com/calendar',
      description: 'Event Description',
      end_time: '2023-09-02T23:00:00.000Z',
      instagram_link: 'https://www.instagram.com/event',
      start_time: '2023-09-02T21:00:00.000Z',
      _id: '64b81a1228022bc1461c5ea4',
    },
    {
      title: 'Google ML SWE Alumnus Q&A',
      targetDate: new Date('2023-09-02T21:00:00.000Z'),
      location: 'Virtual',
      calendar_link: 'https://example.com/calendar',
      description: 'Event Description',
      end_time: '2023-09-02T23:00:00.000Z',
      instagram_link: 'https://www.instagram.com/event',
      start_time: '2023-09-02T21:00:00.000Z',
      _id: '64b81a1228022bc1461c5ea4',
    },
  ];

  const leaderBoardData = [
    {
      rank: 1,
      name: 'Sarah M.',
      points: 70,
    },
    {
      rank: 2,
      name: 'Jake S.',
      points: 55,
    },
    {
      rank: 3,
      name: 'Ivan C.',
      points: 50,
    },
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (isLoggedIn === true) {
          const response = await axios.get(`http://127.0.0.1:5000/api/v1/users/${user.email}`);
          console.log(response.data);
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
  }, [isLoggedIn, user.email, navigate]);


  return (
    <div>
      {userData && <MemberProfile memberName={userData.name} memberEmail={userData.email} memberMajor={userData.major} memberExpectedGraduationYear={userData.expectedGraduationYear} memberPoints = {userData.points} />}
      <div
        style={{
          color: 'white',
          position: 'relative',
          top: '93px',
          overflow: 'hidden',
        }}
      >
        {/* Add Events Attended + Leaderboard UI for the membership page @Brian & Eddie & Yashil --
        consider creating a separate component for this as well */}

        <EventsAttended eventsAttended={eventsAttended} />

        <LeaderBoard rankings={leaderBoardData} />
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
    </div>
  );
};

export default Membership;
