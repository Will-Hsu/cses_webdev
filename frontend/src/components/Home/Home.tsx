import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { Container, Box, Grid } from '@mui/material';
import background from '../../images/shape.svg';
import infinity from '../../images/infinity.svg';
import EventBox from '../Event/Event';
import { homeStyles } from './styles';
import SlideShow from './SlideShow/SlideShow';

interface EventData {
  calendar_link: string;
  description: string;
  end_time: string;
  instagram_link: string;
  location: string;
  start_time: string;
  title: string;
  _id: string;
}

const Home = () => {
  const navigate = useNavigate();
  const styles = homeStyles();

  const [displayedFutureEvents, setDisplayedFutureEvents] = useState<EventData[]>([]);

  useEffect(() => {
    const fetchRecentEvents = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/v1/events?type=upcoming');
        let mostRecentEvents = await response.json();
        // Sort events based on the end_time in descending order to get the most recent events first
        /*const sortedEvents = data.sort((a: EventData, b: EventData) => new Date(b.end_time).getTime() - new Date(a.end_time).getTime(),);*/
        // Take the first three events (most recent)
        setDisplayedFutureEvents(mostRecentEvents.slice(0, 3));
      } catch (error) {
        console.error('Error fetching upcoming events:', error);
      }
    };

    fetchRecentEvents();
  }, []);

  return (
    <div style={{ position: 'relative', paddingBottom: '80px', overflow: 'hidden' }}>
      <Box sx={styles.root}>
        <Box sx={styles.backgroundImage}>
          <img src={background} alt="bg" style={{ ...styles.bg, position: 'absolute' }} />
        </Box>
        <Container maxWidth="xl" sx={styles.container}>
          <Grid container>
            <Grid item xs={12} sm={5} md={5.5}>
              <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                <Box
                  sx={{
                    ...styles.title,
                    marginTop: { xs: '5%', sm: '8%', md: '12%' },
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
                  <Button size="large" text="Learn About Us!" onClick={() => navigate('/about')} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} md={6.5}>
              <SlideShow />
            </Grid>
          </Grid>
          <Grid container spacing={0} sx={{ marginTop: '17%' }}>
            <Grid item xs={0} sm={0} md={0.5} lg={1} />
            <Grid item xs={12} sm={4.5} md={5.3} lg={4.3}>
              <Box
                sx={{
                  ...styles.subtitle,
                  display: 'flex',
                  justifyContent: { xs: 'center', sm: 'right' },
                  minHeight: '50%',
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
                  onClick={() => navigate('/membership')}
                />
              </Box>
            </Grid>
            <Grid item xs={11} sm={2.5} md={1.8} lg={1.8}>
              <Box sx={{ ...styles.statisticContainer }}>
                <Box sx={styles.statisticWrapper}>
                  <Box sx={styles.statisticTitle}>1000+</Box>
                  <Box sx={styles.statisticSubtitle}>Members & counting.</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={11} sm={2.5} md={1.8} lg={1.8}>
              <Box sx={styles.statisticContainer}>
                <Box sx={styles.statisticWrapper}>
                  <Box sx={styles.statisticTitle}>50+</Box>
                  <Box sx={styles.statisticSubtitle}>Events & counting.</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={11} sm={2.5} md={1.8} lg={1.8}>
              <Box sx={styles.statisticContainer}>
                <Box sx={styles.statisticWrapper}>
                  <Box
                    sx={{
                      ...styles.statisticTitle,
                      height: {
                        xs: 'clamp(40px, 3vw, 100px)',
                        sm: 'clamp(25px, 3vw, 35px)',
                      },
                      marginBottom: '10px',
                    }}
                  >
                    <img
                      src={infinity}
                      alt="infiniteSign"
                      style={{
                        width: 'auto', // Make sure the image takes up its container's width
                        height: '100%', // Make sure the image takes up its container's height
                      }}
                    />
                  </Box>
                  <Box sx={styles.statisticSubtitle}>Opportunities.</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={0} sm={0} md={0.5} lg={1} />
          </Grid>

          <div style={{ margin: '0 39px' }}>
            <div
              style={{
                color: 'white',
                fontSize: '40px',
                fontFamily: 'Chakra Petch',
                marginTop: '117px',
                fontWeight: '700',
              }}
            >
              <p style={{ marginBottom: '20px', fontSize: 'clamp(32px, 8vw, 65px)' }}>
                UPCOMING EVENTS.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                marginBottom: '25px',
                overflowX: 'auto', // Enable horizontal scrolling
                maxWidth: '100%', // Ensure the container doesn't exceed its parent's width
              }}
            >
              {displayedFutureEvents.map((eventData, id) => (
                <div key={id} style={{ marginRight: '30px', marginTop: '30px' }}>
                  <EventBox
                    title={eventData.title}
                    targetDate={new Date(eventData.end_time)}
                    location={eventData.location}
                    calendar_link={eventData.calendar_link}
                    description={eventData.description}
                    end_time={eventData.end_time}
                    instagram_link={eventData.instagram_link}
                    start_time={eventData.start_time}
                    _id={eventData._id}
                  />
                </div>
              ))}
            </div>
            <Button
              size="large"
              text="See All Events ->"
              onClick={() => navigate('/events')}
            ></Button>
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
