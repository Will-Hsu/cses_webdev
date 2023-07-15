import { Box, Button, Divider, Typography } from '@mui/material';

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
      <Typography variant="h4" sx={{ marginLeft: '5%', marginTop: '10%', marginBottom: '5%' }}>
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
        <Button variant="contained" size="large" onClick={() => login()}>
          Sign in with Google
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
