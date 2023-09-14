import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User } from '../../utils/types';
import EventsAttended from './EventsAttended';
import LeaderBoard from './LeaderBoard';
import MemberProfile from '../MemberProfile/MemberProfile';
import EventsDashboard from './EventsDashboard';
import RewardsMenu from './RewardsMenu';
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

const Membership = () => {
  const { user, isLoggedIn, isAdmin } = useContext(AuthContext);
  const [userData, setUserData] = useState<User | null>(null);
  const [eventsAttended, setEventsAttended] = useState<Array<Event>>([]);
  const [rankings, setRankings] = useState<Array<Ranking>>([]);
  const navigate = useNavigate();

  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeVisible, setIsCodeVisible] = useState(true);


  const handleVerifyCodeClick = () => {
    console.log('Verification Code:', verificationCode);
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
      position: 'relative',
      overflow: 'hidden',
      flexDirection: 'column', // Stack items vertically
    }}
      
    >
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
          margin: '10% 0',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: '20px',
            fontFamily: 'Chakra Petch',
            marginTop: '117px',
            fontWeight: '700',
          }}
        >
          <p>6-digit code!</p>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            style={{
              fontSize: '16px',      // Change the font size of the input
              width: '115px',        // Change the width of the input
              marginRight: '10px',   // Adjust the distance between the input and button
            }}
          />
          <button
            onClick={handleVerifyCodeClick}
            style={{
              fontFamily: 'Chakra Petch',
              fontSize: '14px',      // Change the font size of the button
            }}
          >
            Verify Code
          </button>
        </div>

        {isLoggedIn && userData && <RewardsMenu points={userData.points}/>}

        {/* Add Events Attended + Leaderboard UI for the membership page @Brian & Eddie & Yashil --
        consider creating a separate component for this as well */}
        {isLoggedIn && userData && <EventsAttended eventsAttended={eventsAttended} />}
        {isLoggedIn && rankings.length > 0 && <LeaderBoard rankings={rankings} />}
        {isAdmin && <EventsDashboard />}
      </div>
    </div>
  );
};

export default Membership;
