import { useContext, useState, useEffect } from 'react';
import { useMediaQuery, Typography, TextField, useTheme, Button } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User } from '../../utils/types';
import EventsAttended from './EventsAttended';
import LeaderBoard from './LeaderBoard';
import MemberProfile from '../MemberProfile/MemberProfile';
import EventsDashboard from './EventsDashboard';
import RewardsMenu from './RewardsMenu';
import axios from 'axios';
import { userInfoAPI, topMembersAPI, addEvent } from '../../api';
import { membershipStyles } from './styles';

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

const Membership = () => {
  const { user, isLoggedIn, isAdmin } = useContext(AuthContext);
  const [userData, setUserData] = useState<User | null>(null);
  const [eventsAttended, setEventsAttended] = useState<Array<Event>>([]);
  const [rankings, setRankings] = useState<Array<Ranking>>([]);
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isiPad = useMediaQuery('(max-width: 890px)');
  const styles = membershipStyles();
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeVisible, setIsCodeVisible] = useState(true);
  const theme = useTheme();

  const handleVerifyCodeClick = () => {
    addEvent(userData?.email, verificationCode)
      .then(() => {
        console.log('good code');
      })
      .catch((error) => {
        console.log('bad code: ', error);
      });
    console.log('Verification Code:', verificationCode, isCodeVisible);
    setIsCodeVisible(false);
    setVerificationCode('');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (isLoggedIn) {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/api/v1/users/${user.email}`,
          );
          setUserData(response.data);
          await topMembersAPI().then((data) => setRankings(data));
        } else if (!localStorage.getItem('token')) {
          navigate('/login');
        }
      } catch (error) {
        console.log('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, [isLoggedIn, user.email, navigate]);

  useEffect(() => {
    const updateEvents = async () => {
      if (isLoggedIn && user.email !== undefined) {
        await userInfoAPI(user.email).then((data) => setEventsAttended(data.eventsAttended));
      }
    };

    updateEvents();
  }, [isLoggedIn, user.email]);

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(to bottom, black 0%, #2F56BC 35%, #162756 50%, #2F56BC 70%, black 100%)',
      }}
    >
      {userData && (
        <MemberProfile
          memberName={userData.name}
          memberMajor={userData.major}
          memberPoints={userData.points}
          memberPicture={userData.profilePicture}
          memberEventsCount={userData.eventsAttended.length}
        />
      )}

      <div
        style={{
          color: 'white',
          position: 'relative',
          top: '93px',
          overflow: 'hidden',
          margin: '10% 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: isiPad ? 'column' : 'row',
          }}
        >
          <div style={{ flex: 1 }}>
            <div>
              <Typography
                sx={{
                  ...(isMobile ? styles.eventsAttendedTitleMobile : styles.eventsAttendedTitle),
                  marginLeft: isMobile ? '18%' : '23%',
                }}
              >
                EVENT CHECK-IN
              </Typography>
              <TextField
                sx={{
                  ...styles.textfield,
                  width: '35%',
                  marginLeft: isMobile ? '18%' : '23%',
                  marginBottom: '100px',
                  [theme.breakpoints.down('sm')]: {
                    width: '40%',
                  },
                }}
                size="small"
                placeholder={'6 Digit Code'}
                value={verificationCode}
                inputProps={{ maxLength: 6 }}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <Button
                sx={{
                  ...styles.button,
                  width: '20%',
                  marginBottom: '100px',
                  [theme.breakpoints.down('sm')]: {
                    width: '20%',
                  },
                }}
                onClick={handleVerifyCodeClick}
              >
                Verify
              </Button>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            {isLoggedIn && userData && <RewardsMenu points={userData.points} />}
          </div>
        </div>

        {/* Add Events Attended + Leaderboard UI for the membership page @Brian & Eddie & Yashil --
        consider creating a separate component for this as well */}
        {isLoggedIn && userData && <EventsAttended eventsAttended={eventsAttended} />}
        {isLoggedIn && rankings.length > 0 && userData && (
          <LeaderBoard rankings={rankings} myPoint={userData.points} />
        )}
        {isAdmin && <EventsDashboard />}
      </div>
    </div>
  );
};

export default Membership;
