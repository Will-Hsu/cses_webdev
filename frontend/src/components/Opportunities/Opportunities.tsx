import React from 'react';
import { Container, Typography, Grid, Link, Box, useTheme, useMediaQuery } from '@mui/material';
import MuiButton from '@mui/material/Button';
import bg from '../../images/shape2.svg';
import sponsor from '../../images/cseLogo.gif';
import sponsor2 from '../../images/AS.png';
import { opportunitiesStyles } from './styles';
import members from '../../images/opportunitiespage/members.jpg';
import sponsors from '../../images/opportunitiespage/sponsors.png';
import { useNavigate } from 'react-router-dom';

interface ImageWithBoxShadowProps {
  src: string;
  alt: string;
  boxColor?: string;
  borderColor?: string;
  /* Optional clickable link */
  href?: string;
}

export const ImageWithBoxShadow = ({
  src,
  alt,
  boxColor = 'white',
  borderColor,
  href,
}: ImageWithBoxShadowProps) => {
  const theme = useTheme();
  const styles = opportunitiesStyles(theme);

  return (
    <a href={href} style={styles.link}>
      <img
        src={src}
        alt={alt}
        style={{
          width: '85%',
          height: 'auto',
          boxShadow: `12px 12px ${boxColor}`,
          border: borderColor ? `2px solid ${borderColor}` : ``,
        }}
      />
    </a>
  );
};

const Opportunities = () => {
  const theme = useTheme();
  const styles = opportunitiesStyles(theme);
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <Box>
        <img src={bg} alt="bg" style={{ ...styles.bg, position: 'absolute' }} />
        <img src={bg} alt="bg" style={{ ...styles.bg2, position: 'absolute' }} />
      </Box>
      <Container maxWidth="xl" sx={styles.body}>
        <Typography sx={styles.title}>OPPORTUNITIES</Typography>
        <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Grid item xs={12} sm={12} md={6}>
            <ImageWithBoxShadow src={members} alt="members" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography sx={styles.subtitle}>
              For <span style={{ fontStyle: 'italic' }}>members</span>.
            </Typography>
            <Typography sx={styles.test}>
              <br />
              Our{' '}
              <Link href="https://www.linkedin.com/in/csesucsd/" color="inherit">
                LinkedIn
              </Link>{' '}
              network has opportunities for members from companies, alumni, and professors in our
              network. Join our{' '}
              <Link href="https://discord.gg/vd9aFu4V" color="inherit">
                Discord
              </Link>{' '}
              for to learn about opportunities to get involved in the CSE Society and to stay
              updated on the events we will have! <br />
              <br />
              In the past, we have hosted successful career fairs with start-ups at UCSD, panels
              with alumni from Google and OpenAI, and hands-on workshops. We also have various
              leadership and project opportunities in all areas of tech, from web development
              entrepreneurship. <br />
              <br />
              Kickstart your career with CSES today!
              <br />
            </Typography>
            <Box
              sx={{
                marginTop: '3rem',
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'left' },
                padding: '8px, 16px, 8px, 16px',
              }}
            >
              <MuiButton
                size="large"
                variant="outlined"
                sx={{
                  marginBottom: '2rem',
                  fontSize: '21px',
                  fontFamily: 'Chakra Petch, sans-serif',
                  fontWeight: '400',
                  textTransform: 'none',
                  borderColor: 'white',
                  color: 'white',
                  padding: 'auto',
                  borderRadius: '10px',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
                onClick={() => navigate('/')}
              >
                Become a Member
              </MuiButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <ImageWithBoxShadow src={sponsors} alt="sponsors" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography sx={styles.subtitle}>
              For <span style={{ fontStyle: 'italic' }}>sponsors</span>.
            </Typography>
            <Typography sx={{ ...styles.test, marginBottom: '15px' }}>
              <br />
              We have various sponsor packages that include participating in our CSE Society career
              fair, individual recruiting events, and promotion of your company. To inquire about
              sponsoring the CSE Society, please contact{' '}
              <Link href="mailto:cses@ucsd.edu" color="inherit">
                cses@ucsd.edu
              </Link>
              .
              <br />
            </Typography>
            <Box
              sx={{
                marginTop: '3rem',
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'left' },
                padding: '8px, 16px, 8px, 16px',
              }}
            >
              <MuiButton
                size="large"
                variant="outlined"
                sx={{
                  fontSize: '21px',
                  fontFamily: 'Chakra Petch, sans-serif',
                  fontWeight: '400',
                  textTransform: 'none',
                  borderColor: 'white',
                  color: 'white',
                  padding: 'auto',
                  borderRadius: '10px',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
                onClick={() => navigate('/membership')}
              >
                See Opportunities -&gt;
              </MuiButton>
            </Box>
          </Grid>
        </Grid>
        <Typography align="center" sx={{ ...styles.subtitle, margin: '60px 0% 50px 0%' }}>
          Thank you to our current sponsors!
        </Typography>

        <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Grid item xs={12} sm={10} md={5.5}>
            <ImageWithBoxShadow
              src={sponsor}
              alt="sponsor"
              boxColor="white"
              href="https://cse.ucsd.edu/"
              borderColor="black"
            />
          </Grid>
          <Grid item xs={7} sm={5} md={3.5}>
            <ImageWithBoxShadow
              src={sponsor2}
              alt="sponsor2"
              boxColor="white"
              href="https://as.ucsd.edu/"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Opportunities;
