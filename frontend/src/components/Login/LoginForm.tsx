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
    <div style={{ marginTop: '200px', marginBottom: '100px' }}>
      {showEmailError ? <Alert severity="error">Please use UCSD email</Alert> : null}
      <div style={styles.loginForm}>
        <Typography
          variant="h4"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10%',
            marginBottom: '5%',
            fontWeight: 'bold',
            fontFamily: 'Chakra Petch',
            color: 'white',
          }}
        >
          CSES Member Login
        </Typography>
        <Divider variant="middle" sx={{ bgcolor: 'white' }} />
        <Box
          sx={{
            marginTop: '10%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <GoogleButton
            style={{
              fontFamily: 'Chakra Petch',
              backgroundColor: 'black',
              borderColor: 'white',
              borderWidth: '0.5px',
              borderStyle: 'solid',
            }}
            onClick={login}
          />
        </Box>
      </div>
    </div>
  );
};

export default LoginForm;
