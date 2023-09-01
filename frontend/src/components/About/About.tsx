import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { Container, Box, Grid, createTheme, useMediaQuery } from '@mui/material';
import bgTop from '../../images/shape2.svg';
import bgBtm from '../../images/shape2.svg';
import { aboutStyles } from './styles';
import blankPhoto from '../../images/aboutpagephoto.png';
import books from '../../images/aboutbooks.png';
import lightBulb from '../../images/aboutlightbulb.png';
import MeetTheTeam from './MeetTheTeam';
import about1 from '../../images/aboutpage/about_1.jpg';
import about2 from '../../images/aboutpage/about_2.jpg';
import about3 from '../../images/aboutpage/about_3.jpg';

const About = () => {
  const navigate = useNavigate();
  const styles = aboutStyles();
  const theme = createTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box sx={styles.root}>
        <Box sx={styles.backgroundImage}>
          <img src={bgTop} alt="bg1" style={{ ...styles.bg1, position: 'absolute' }} />
          <img src={bgBtm} alt="bg2" style={{ ...styles.bg2, position: 'absolute' }} />
        </Box>
        <Container maxWidth="xl" sx={styles.body}>
          <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              sx={{
                paddingRight: {
                  xs: '0%',
                  sm: '5%',
                },
                textAlign: 'right',
                marginBottom: '5%',
                marginRight: '2%',
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                marginTop: '1%',
              }}
            >
              <img src={about1} alt="img" style={{ maxWidth: '130%', height: 'auto' }} />
            </Grid>
            <Grid item sm={6} md={5} lg={5}>
              <Box
                sx={{
                  color: 'white',
                  textAlign: { lg: 'left', sm: 'left', xs: 'center' },
                  fontSize: '1em',
                }}
              >
                <h1
                  style={{
                    fontFamily: 'Chakra Petch',
                    fontSize: 'clamp(50px, 8vw, 60px)',
                    fontWeight: '700',
                    marginTop: '0',
                  }}
                >
                  WHAT IS CSES?
                </h1>

                <p style={{ color: 'white', fontSize: '20px', width: '90%' }}>
                  CSES is the Computer Science and Engineering Society at UCSD that focuses on the
                  professional development of CSE students and students interested in computing
                  through various programs and career development events.
                </p>
              </Box>
            </Grid>
          </Grid>
          <h1
            style={{
              color: 'white',
              marginTop: '10%',
              textAlign: 'center',
              fontFamily: 'Chakra Petch',
              fontSize: 'clamp(50px, 8vw, 60px)',
              fontWeight: '700',
            }}
          >
            WHAT DO WE DO?
          </h1>
          <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
            <Grid
              item
              sm={4}
              lg={3}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img src={books} alt="img" style={{ width: '80%' }} />
            </Grid>
            <Grid item sm={5} lg={5}>
              <Box
                sx={{
                  color: 'white',
                  textAlign: { lg: 'left', sm: 'left', xs: 'center' },
                }}
              >
                <h1>Our History</h1>
                <p style={{ color: 'white', fontSize: '20px' }}>
                  CSES was the first CSE organization at UCSD starting nearly twenty years ago, and
                  we have innovated over the years to stay relevant in serving the CSE community. We
                  aim to continue innovating and improving, so we could continue to serve this
                  community for another twenty years.
                </p>
              </Box>
            </Grid>
          </Grid>
          {!isSmallScreen && (
            <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
              <Grid item sm={5.5} lg={5.5}>
                <Box sx={{ color: 'white', marginBottom: 'auto' }}>
                  <h1>Our Future</h1>
                </Box>
                <p style={{ color: 'white', fontSize: '20px' }}>
                  Our mission statement is to help our members get professional opportunities while
                  fostering a network of individuals. We do this through quarterly career fairs,
                  programs for career development, and project opportunities to gain experience.
                </p>
              </Grid>

              <Grid
                item
                sm={3.5}
                lg={2.5}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
              >
                <img src={lightBulb} alt="img" style={{ marginRight: '10%', height: '75%' }} />
              </Grid>
            </Grid>
          )}
          {isSmallScreen && (
            <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
              <Grid item sm={5} lg={3}>
                <img src={lightBulb} alt="img" />
              </Grid>
              <Grid item sm={6} lg={5}>
                <Box sx={{ color: 'white', textAlign: { lg: 'left', sm: 'center', xs: 'center' } }}>
                  <h1>Our Future</h1>
                </Box>
                <p style={{ color: 'white', fontSize: '20px', textAlign: 'center' }}>
                  Our mission statement is to help our members get professional opportunities while
                  fostering a network of individuals. We do this through quarterly career fairs,
                  programs for career development, and project opportunities to gain experience.
                </p>
              </Grid>
            </Grid>
          )}

          <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
            <Grid item sm={4} lg={3} sx={{ display: 'flex', alignItems: 'center', marginRight: '3%' }}>
              <img src={about2} alt="img" style={{ maxWidth: '100%', height: 'auto' }} />
            </Grid>
            <Grid item sm={5} lg={5}>
              <Box
                sx={{
                  color: 'white',
                  textAlign: { md: 'left', sm: 'left', xs: 'center' },
                  fontSize: { xs: '0.9em', sm: '1em', lg: '1em' },
                }}
              >
                <h1>What's in store for me?</h1>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  textAlign: { xs: 'center', sm: 'left' }, // Center on small screens, start from top on larger screens
                }}
              >
                <p style={{ color: 'white', fontSize: '20px' }}>
                  Check out amazing events we have planned as well as the opportunities we have for
                  members.
                </p>
              </Box>
              <Box
                sx={{
                  marginLeft: '-2%',
                  display: 'flex',
                  justifyContent: { xs: 'center', sm: 'left', lg: 'left' },
                }}
              >
                <div style={{ fontFamily: 'Chakra Petch' }}>
                  <Button
                    size="large"
                    text="See Opportunities ->"
                    onClick={() => navigate('/opportunities')}
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
          {!isSmallScreen && (
            <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
              <Grid item sm={5} lg={5}>
                <Box sx={{ color: 'white', textAlign: { md: 'left', sm: 'left', xs: 'center' } }}>
                  <h1>How do I join?</h1>
                </Box>
                <Box sx={{ color: 'white', textAlign: { lg: 'left', sm: 'left', xs: 'center' } }}>
                  <p style={{ color: 'white', fontSize: '20px' }}>
                    Check out amazing events we have planned as well as the opportunities we have
                    for members.
                  </p>
                  <Box
                    sx={{
                      marginLeft: '-2%',
                      display: 'flex',
                      justifyContent: { xs: 'center', sm: 'left' },
                    }}
                  >
                    <Button
                      size="large"
                      text="Become a Member ->"
                      onClick={() => navigate('/membership')}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                sm={4}
                lg={3}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
              >
                <img src={about3} alt="img" style={{ maxWidth: '100%', height: 'auto' }} />
              </Grid>
            </Grid>
          )}

          {isSmallScreen && (
            <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
              <Grid item sm={5} lg={3}>
                <img src={about3} alt="img" style={{ maxWidth: '100%', height: 'auto' }} />
              </Grid>
              <Grid item sm={6} lg={5}>
                <Box sx={{ color: 'white', textAlign: { lg: 'left', sm: 'center', xs: 'center' } }}>
                  <h1>How do I join?</h1>
                </Box>
                <p style={{ color: 'white', textAlign: 'center' }}>
                  Check out amazing events we have planned as well as the opportunities we have for
                  members.
                </p>
                <Box
                  sx={{
                    marginLeft: '-2%',
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'left', lg: 'left' },
                  }}
                >
                  <Button
                    size="large"
                    text="Become a Member ->"
                    onClick={() => navigate('/opportunities')}
                  />
                </Box>
              </Grid>
            </Grid>
          )}

          <MeetTheTeam />
        </Container>
      </Box>
    </Box>
  );
};

export default About;
