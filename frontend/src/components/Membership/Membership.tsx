import { useContext, useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import {
  useMediaQuery,
  TextField,
  useTheme,
  Button,
  Collapse,
  IconButton,
  Alert,
  Container,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User } from '../../utils/types';
import EventsAttended from './EventsAttended';
import LeaderBoard from './LeaderBoard';
import MemberProfile from '../MemberProfile/MemberProfile';
import EventsDashboard from './EventsDashboard';
import RewardsMenu from './RewardsMenu';
import axios from 'axios';
import { userInfoAPI, topMembersAPI, addEvent, userRank } from '../../api';
import { membershipStyles } from './styles';
import { textAlign } from '@mui/system';

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
  const [showConfetti, setShowConfetti] = useState(false);
  const { user, isLoggedIn, isAdmin } = useContext(AuthContext);
  const [userData, setUserData] = useState<User | null>(null);
  const [currentUserRank, setCurrentUserRank] = useState<number | 0>(0);
  const [eventsAttended, setEventsAttended] = useState<Array<Event>>([]);
  const [rankings, setRankings] = useState<Array<Ranking>>([]);
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isiPad = useMediaQuery('(max-width: 890px)');
  const styles = membershipStyles(isMobile);
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeVisible, setIsCodeVisible] = useState(true);
  const theme = useTheme();

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const alertCloseBtn = (func: any) => {
    return (
      <IconButton aria-label="close" size="small" onClick={() => func(false)}>
        <CloseIcon fontSize="inherit" />
      </IconButton>
    );
  };

  const handleVerifyCodeClick = () => {
    addEvent(userData?.email, verificationCode)
      .then(() => {
        setIsCodeVisible(false);
        setVerificationCode('');
        setShowSuccess(true);
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // You can use 'auto' for an instant scroll
        });

        setShowConfetti(true);

        setTimeout(function () {
          setShowSuccess(false);
          setShowConfetti(false);
          window.location.reload();
        }, 5000);

        console.log('good code');
      })
      .catch((error) => {
        setIsCodeVisible(false);
        setVerificationCode('');
        setShowError(true);
        console.log('bad code: ', error);
      });
    console.log('Verification Code:', verificationCode, isCodeVisible);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (isLoggedIn) {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/api/v1/users/${user.email}`,
          );
          setUserData(response.data);
          await userRank(user.email).then((data) => setCurrentUserRank(data));
          await topMembersAPI().then((data) => setRankings(data));
        } else if (!localStorage.getItem('token')) {
          navigate('/login');
        }
      } catch (error) {
        console.log('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, [isLoggedIn, user.email, navigate, showConfetti]);

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
      {showConfetti && <Confetti />}
      {userData && (
        <MemberProfile
          memberName={userData.name}
          memberMajor={userData.major}
          memberMinor={userData.minor}
          memberPoints={userData.points}
          memberPicture={userData.profilePicture}
          memberEventsCount={userData.eventsAttended.length}
        />
      )}

      {isAdmin && <EventsDashboard />}

      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          position: 'relative',
          top: '93px',
          overflow: 'hidden',
          margin: '10% 0',
        }}
      >
        {userData && (
          <Container
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: isiPad ? 'column' : 'row',
            }}
          >
            <div>
              <div>
                <h1 style={{ ...styles.eventsAttendedTitle, textAlign: 'center' }}>
                  EVENT CHECK-IN
                </h1>
                <Collapse in={showSuccess} sx={styles.textfield}>
                  <Alert severity="success" action={alertCloseBtn(setShowSuccess)}>
                    Successfully checked in!
                  </Alert>
                </Collapse>

                <Collapse in={showError} sx={styles.textfield}>
                  <Alert severity="error" action={alertCloseBtn(setShowError)}>
                    Invalid event code — <strong>please re-enter a code!</strong>
                  </Alert>
                </Collapse>
                <TextField
                  sx={{
                    ...styles.textfield,
                    width: '65%',
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
                  }}
                  onClick={handleVerifyCodeClick}
                >
                  Verify
                </Button>
              </div>
            </div>

            <div>
              {isLoggedIn && userData && !isMobile && (
                <RewardsMenu email={userData.email} points={userData.points} />
              )}
            </div>
          </Container>
        )}

        {/* Add Events Attended + Leaderboard UI for the membership page @Brian & Eddie & Yashil --
        consider creating a separate component for this as well */}
        {isLoggedIn && userData && <EventsAttended eventsAttended={eventsAttended} />}
        {isLoggedIn && userData && rankings.length >= 3 && userData && (
          <LeaderBoard
            rankings={rankings}
            myPoint={userData.points}
            myName={userData.name}
            myProfilePicture={userData.profilePicture}
            currentUserRank = {currentUserRank}
          />
        )}
      </div>
    </div>
  );
};

export default Membership;
