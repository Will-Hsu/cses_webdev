import { Theme } from '@mui/material';
export const footerStyles = (theme: Theme) => ({
  footer: {
    margin: 0,
    backgroundColor: '#1F3A7E',
    bottom: 0,
    padding: '40px 80px',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 40px',
    },
  },
  text: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 'clamp(10px, 4vw, 20px)',
    textDecoration: 'none',
    color: 'white',
  },
  divider: {
    backgroundColor: 'white',
    margin: '16px 0px',
  },
  footerNote: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 'clamp(10px, 4vw, 18px)',
    color: 'white',
  },
  button: {
    width: '35%',
    backgroundColor: '#1F1F1F',
    margin: '6px 8px',
    borderColor: 'black',
    color: 'white',
    borderRadius: '100px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    '&[disabled]': {
      color: 'gray',
    },
  },
  textfield: {
    '& input::placeholder, & textarea::placeholder': {
      opacity: 0.6,
      color: 'black',
    },
    backgroundColor: 'white',
    borderRadius: '10px',
    margin: '5px',
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Chakra Petch, sans-serif',
    color: 'white',
    fontSize: 'clamp(20px, 5vw, 25px)',
    marginTop: 'clamp(5px, 1vw, 15px)',
  },
});
