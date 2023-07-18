import { Box, Divider, Typography } from '@mui/material';
import GoogleButton from 'react-google-button';
import { loginStyles } from './styles';

interface LoginFormProps {
  login: () => void;
}

const LoginForm = ({ login }: LoginFormProps) => {
  const styles = loginStyles();

  return (
    <Box sx={styles.loginForm}>
      <Typography
        variant="h4"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10%',
          marginBottom: '5%',
        }}
      >
        Login
      </Typography>
      <Divider variant="middle" />
      <Box
        sx={{
          marginTop: '15%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <GoogleButton onClick={login} />
      </Box>
    </Box>
  );
};

export default LoginForm;
