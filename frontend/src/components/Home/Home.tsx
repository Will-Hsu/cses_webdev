import React from 'react';
import Button from '../Button/Button';
import { Container, Box, Grid } from '@mui/material';
import background from '../../images/shape.svg';
import EventBox from '../Event/Event';
import desktop from '../../images/desktop.png';
import { homeStyles } from './styles';
import SlideShow from './SlideShow/SlideShow';

const Home = () => {
  const styles = homeStyles();
  return (
    <div style={{ position: 'relative' }}>
      <Box sx={styles.root}>
        <Box sx={styles.backgroundImage}>
          <img src={background} alt="bg" style={styles.bg} />
        </Box>
        <Container maxWidth="xl" sx={styles.container}>
          <Grid container>
            <Grid item xs={12} sm={5} md={5}>
              <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                <Box
                  sx={{
                    ...styles.title,
                    marginTop: { xs: '8%', sm: '20%', md: '25%' },
                    marginLeft: { xs: '0%', sm: '3%', md: '12%' },
                  }}
                >
                  Innovate.
                </Box>
                <Box sx={{ ...styles.title, marginLeft: { xs: '0%', sm: '3%', md: '12%' } }}>
                  Build.
                </Box>
                <Box sx={{ ...styles.title, marginLeft: { xs: '0%', sm: '3%', md: '12%' } }}>
                  Connect.
                </Box>
                <Box sx={{ ...styles.button, marginLeft: { xs: '0%', sm: '2%', md: '12%' } }}>
                  <Button size="large" text="Learn About Us" onClick={() => console.log('click')} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} md={6.5}>
              <SlideShow />
            </Grid>
          </Grid>
          <Grid container spacing={0} sx={{ marginTop: '17%' }}>
            <Grid item xs={12} sm={4.5} md={5}>
              <Box
                sx={{
                  ...styles.subtitle,
                  display: 'flex',
                  justifyContent: { xs: 'center', sm: 'right' },
                }}
              >
                Join CSES today.
              </Box>
              <Box
                sx={{
                  ...styles.button,
                  marginTop: { xs: '3%', sm: '0%' },
                  display: 'flex',
                  justifyContent: { xs: 'center', sm: 'right' },
                  marginLeft: '0%',
                }}
              >
                <Button
                  size="large"
                  text="Become a Member ->"
                  onClick={() => console.log('click')}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={11}
              sm={2.5}
              md={2}
              sx={{
                display: { xs: 'flex', sm: 'block' },
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box sx={{ ...styles.statisticContainer, width: { xs: '100%', sm: 'auto' } }}>
                <Box sx={styles.statisticWrapper}>
                  <Box sx={{ ...styles.statisticTitle }}>1000+</Box>
                  <Box sx={{ ...styles.statisticSubtitle }}>Members & counting.</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={11} sm={2.5} md={2}>
              <Box sx={styles.statisticContainer}>
                <Box sx={styles.statisticWrapper}>
                  <Box sx={{ ...styles.statisticTitle }}>n+</Box>
                  <Box sx={{ ...styles.statisticSubtitle }}>Another statistic!</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={11} sm={2.5} md={2}>
              <Box sx={styles.statisticContainer}>
                <Box sx={styles.statisticWrapper}>
                  <Box sx={{ ...styles.statisticTitle }}>1000+</Box>
                  <Box sx={{ ...styles.statisticSubtitle }}>Members & counting.</Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <div>
            <div
              style={{
                color: 'white',
                fontSize: '40px',
                fontFamily: 'Chakra Petch',
                marginLeft: '39px',
                marginTop: '117px',
                fontWeight: '700',
              }}
            >
              <h2>UPCOMING EVENTS.</h2>
            </div>

            <div
              style={{
                color: 'white',
                fontSize: '20px',
                fontFamily: 'Chakra Petch',
                fontWeight: '700',
                display: 'flex',
                flexDirection: 'row',
                marginLeft: '39px',
              }}
            >
              <EventBox
                title={'Student Summit'}
                targetDate={new Date('2023-08-31T00:00:00')}
                location={'Somewhere on campus'}
              />
              <p
                style={{
                  color: 'white',
                  fontSize: '20px',
                  fontFamily: 'Chakra Petch',
                  fontWeight: '500',
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <EventBox
                title={'Some othe event'}
                targetDate={new Date('2023-08-23T04:00:00')}
                location={'Somewhere on campus'}
              />
              <p
                style={{
                  color: 'white',
                  fontSize: '20px',
                  fontFamily: 'Chakra Petch',
                  fontWeight: '500',
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <EventBox
                title={'Another event'}
                targetDate={new Date('2023-07-31T00:00:00')}
                location={'Somewhere on campus'}
              />
            </div>
            <Button
              size="medium"
              text="See All Events ->"
              onClick={() => console.log('click')}
            ></Button>
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
