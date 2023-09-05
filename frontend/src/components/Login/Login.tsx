import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const { login, isNewUser, isUcsdEmail, isLoggedIn, user } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn && !isNewUser) {
      navigate('/membership');
    }
  }, [isLoggedIn, isNewUser, navigate]);

  const renderContent = ({ name, email, login }: RenderContentProps) => {
    if (isLoggedIn && isUcsdEmail && isNewUser) {
      return <SignupForm name={name} email={email} />;
    } else if (!isLoggedIn) {
      return <LoginForm showEmailError={!isUcsdEmail} login={login} />;
    }
  };

  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          background: 'linear-gradient(to bottom, black 0%, #2F56BC 50%, black 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {renderContent({ name: user.name, email: user.email, login })}
      </Container>
    </div>
  );
};

export default Login;
