import { useState } from 'react';
import { Container } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

interface User {
  name: string;
  email: string;
}

interface RenderContentProps {
  name: string;
  email: string;
  login: () => void;
}

const Login = () => {
  const [user, setUser] = useState({} as User);
  const [isUcsdEmail, setIsUcsdEmail] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  const login = useGoogleLogin({
    flow: 'implicit',
    onSuccess: async (res) => {
      const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${res.access_token}` },
      });

      if (userInfo.data.email.endsWith('@ucsd.edu')) {
        console.log('Login Success');
        setUser(userInfo.data);
        setIsUcsdEmail(true);
        setIsNewUser(true); // TODO: Handle new vs. old users
      } else {
        console.log('Login Failed');
        setIsUcsdEmail(false);
      }
    },
    onError: () => console.log('Login Failed'),
  });

  const renderContent = ({ name, email, login }: RenderContentProps) => {
    if (isUcsdEmail && isNewUser) {
      return <SignupForm name={name} email={email} />;
    } else {
      return <LoginForm login={login} />;
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
