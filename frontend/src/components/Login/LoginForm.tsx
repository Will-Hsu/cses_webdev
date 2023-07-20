import { Alert, Box, Divider, Typography } from '@mui/material';
import GoogleButton from 'react-google-button';
import { loginStyles } from './styles';

interface LoginFormProps {
  showEmailError: boolean;
  login: () => void;
}

const LoginForm = ({ showEmailError, login }: LoginFormProps) => {
  const styles = loginStyles();

  return (
    <div>
    <Alert severity="error">Please use UCSD email</Alert>
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
    </div>
  );
};

export default LoginForm;
