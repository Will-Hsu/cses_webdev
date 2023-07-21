import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { AuthContext } from '../../context/AuthContext';
import { Container } from '@mui/material';
import { checkUserAPI } from '../../api';

interface RenderContentProps {
  name: string;
  email: string;
  login: () => void;
}

const Login = () => {
  const navigate = useNavigate();
  const {
    login,
    isNewUser,
    setIsNewUser,
    isUcsdEmail,
    setIsUcsdEmail,
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
  } = useContext(AuthContext);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const res = await axios.get('https://www.googleapis.com/oauth2/v3/tokeninfo', {
            params: { access_token: token },
          });

          if (res.status === 200 && res.data.aud === process.env.REACT_APP_GOOGLE_CLIENT_ID) {
            const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });

            setUser(userInfo.data);
            setIsLoggedIn(true);
            setIsUcsdEmail(true);
            if (!isNewUser) {
              navigate('/membership');
            }
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    verifyToken();
  }, [isLoggedIn]);

  const renderContent = ({ name, email, login }: RenderContentProps) => {
    checkUserAPI({ email }).then((data) => {
      if (data && data.exists === true) {
        setIsNewUser(false);
      } else {
        setIsNewUser(true);
      }
    });

    if (isLoggedIn && isUcsdEmail && isNewUser) {
      return <SignupForm name={name} email={email} />;
    } else {
      return <LoginForm showEmailError={!isUcsdEmail} login={login} />;
    }
  };

  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {renderContent({ name: user.name, email: user.email, login })}
      </Container>
    </div>
  );
};

export default Login;
