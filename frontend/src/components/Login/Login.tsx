import { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { addEvent } from '../../api';
// import axios from 'axios';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { AuthContext } from '../../context/AuthContext';
import { Container } from '@mui/material';

interface RenderContentProps {
  name: string;
  email: string;
  login: () => void;
}

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isNewUser, isUcsdEmail, isLoggedIn, user } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      console.log('logged in -- move from login to membership');
      navigate('/membership');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const eventCode = params.get('eventCode');

    if (eventCode) {
      addEvent(user.email, eventCode).then((response) => {
        console.log('Event added successfully:', response);
      })
      .catch((error) => {
        console.error('Error adding event', error);
      });
    }
  }, [location.search, user.email]);

  const renderContent = ({ name, email, login }: RenderContentProps) => {
    if (!isLoggedIn && !isNewUser) {
      return <LoginForm showEmailError={!isUcsdEmail} login={login} />;
    } else if (isUcsdEmail && isNewUser) {
      return <SignupForm name={name} email={email} />;
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        background: 'linear-gradient(to bottom, black 0%, #2F56BC 50%, black 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {renderContent({ name: user.name, email: user.email, login })}
    </Container>
  );
};

export default Login;
