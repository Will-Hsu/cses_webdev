import { useNavigate } from 'react-router-dom';
import { Container, Box, Grid, Typography, Button as MuiButton, useMediaQuery } from '@mui/material';
import about3 from '../../images/aboutpage/about_3.jpg';
import { aboutStyles } from './styles';

const HowtoJoin = () => {
  const navigate = useNavigate();
  const styles = aboutStyles();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Container
      disableGutters
      sx={{
        width: '100%',
        backgroundColor: 'transparent',
        marginTop: '10%'
      }}
    >
      <Typography
        variant="h3"
        sx={{
          ...styles.mainTitleTop,
          fontSize: 'clamp(40px, 9vw, 80px)',
          color: 'white',
          marginBottom: '3%',
        }}
      >
        How Do I Join?
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        direction={isMobile ? 'column' : 'row'}
      >
        {/* Image */}
        <Grid item xs={12} sm={6} md={4}>
            <Box
                sx={{
                display: "inline-block",
                borderRadius: "12px", 
                p: "3px", 
                background: "linear-gradient(45deg, #FFCE00, #00F0FF)",
                width: "100%",
                maxWidth: "460px",
                }}
            >
                <Box
                component="img"
                src={about3}
                alt="How to Join"
                sx={{
                    width: "100%",
                    display: "block",
                    borderRadius: "10px", 
                }}
                />
            </Box>
        </Grid>


        {/* Text */}
        <Grid item xs={12} sm={6} md={8}>
          <Typography
            variant="body1"
            sx={{
              color: 'white',
              fontSize: 'clamp(18px, 2.4vw, 22px)',
            }}
          >
            To become a general member, simply sign up with your UCSD email!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'white',
              fontSize: 'clamp(18px, 2.4vw, 22px)',
              marginTop: '20px',
            }}
          >
            Do you want to be a part of the internal team? Become a member and follow us on our
            socials to be notified of when board applications open on a rolling basis.
          </Typography>
          <Box sx={{ marginTop: '40px'}}>
        {/* <MuiButton
          variant="outlined"
          onClick={() => navigate('/membership')}
          sx={{
          borderRadius: '40px',
          border: '2px solid transparent',
          backgroundImage:
            'linear-gradient(#0b0b0b, #0b0b0b), linear-gradient(to right, #FFCE00, #00F0FF)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
          paddingX: '20px',
          paddingY: '11px',
          color: 'white',
          fontSize: '20px',
          textTransform: 'none',
          '&:hover': {
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.05)), linear-gradient(to right,  #FFCE00, #00F0FF)',
            color: 'black'
          },
        }}
        >
          Become a member now!
        </MuiButton> */}
      </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HowtoJoin;
