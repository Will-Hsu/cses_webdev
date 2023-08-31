import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User } from '../../utils/types';
import { Box, Button, Divider, Typography } from '@mui/material';
import { membershipStyles } from './styles';
import EventsAttended from './EventsAttended';
import LeaderBoard from './LeaderBoard';
import MemberProfile from '../MemberProfile/MemberProfile';
import EventsDashboard from './EventsDashboard';
import axios from 'axios';
import { userInfoAPI, topMembersAPI } from '../../api';

interface Event {
  _id: string;
  title: string;
  location: string;
  description: string;
  start_time: string;
  end_time: string;
  calendar_link: string;
  instagram_link: string;
  targetDate?: Date;
}

interface Ranking {
  rank: number;
  name: string;
  points: number;
  profilePicture?: string;
}

const styles = membershipStyles();

const Membership = () => {
  const { user, isLoggedIn, isAdmin, logout } = useContext(AuthContext);
  const [userData, setUserData] = useState<User | null>(null);
  const [eventsAttended, setEventsAttended] = useState<Array<Event>>([]);
  const [rankings, setRankings] = useState<Array<Ranking>>([]);
  const navigate = useNavigate();

  // For dashboard dev, commenting out the useEffect for now
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (isLoggedIn === true) {
          const response = await axios.get(`http://127.0.0.1:5000/api/v1/users/${user.email}`);
          setUserData(response.data);
          await topMembersAPI().then((data) => setRankings(data));
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

  useEffect(() => {
    const updateEvents = async () => {
      if (user.email !== undefined) {
        await userInfoAPI(user.email).then((data) => setEventsAttended(data.eventsAttended));
      }
    };

    updateEvents();
  }, [user.email]);

  return (
    <div>
      {userData && (
        <MemberProfile
          memberName={userData.name}
          memberMajor={userData.major}
          memberPoints={userData.points}
          memberPicture={userData.profilePicture}
        />
      )}
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

        {isLoggedIn && <EventsAttended eventsAttended={eventsAttended} />}

        {isLoggedIn && rankings.length > 0 && <LeaderBoard rankings={rankings} />}
      </div>
      {
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
      }

      {/* Events Dashboard */}
      {isAdmin && <EventsDashboard />}
    </div>
  );
};

export default Membership;
