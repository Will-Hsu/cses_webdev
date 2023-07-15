import { Box, Divider, Typography } from '@mui/material';
import GoogleButton from 'react-google-button'

interface LoginFormProps {
    login: () => void;
}

const LoginForm = ({ login }: LoginFormProps) => {
  return (
    <Box
      sx={{
        width: 300,
        height: 250,
        padding: '2%',
        marginTop: '20%',
        marginBottom: '20%',
        backgroundColor: 'white',
        borderRadius: '10px',
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '5%' 
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
        <GoogleButton onClick={() => login()}/>
      </Box>
    </Box>
  );
};

export default LoginForm;
