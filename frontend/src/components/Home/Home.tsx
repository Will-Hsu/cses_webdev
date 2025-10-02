import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Grid, Button as MuiButton } from '@mui/material';
import { homeStyles } from './styles';
import DevLogo from '../../images/DevLogo.png';
import InnovateLogo from '../../images/InnovateLogo.png';
import OpenSourceLogo from '../../images/OpenSourceLogo.png';
import HomeLogo from '../../images/HomeLogo.png';
import ASLogo from '../../images/AS.png';
import CSEDeptLogo from '../../images/csedeplogo.png';
import Sithu from '../../images/aboutpage/sithu.jpg';
import axios from 'axios';
import CountUp from 'react-countup';
import { motion } from "framer-motion";

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

  const [totalEvents, setTotalEvents] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const [displayedFutureEvents, setDisplayedFutureEvents] = useState<EventData[]>([]);
  const [allFutureEvents, setAllFutureEvents] = useState<EventData[]>([]);
  const [eventsToShow, setEventsToShow] = useState(4);
  const [currentEventPage, setCurrentEventPage] = useState(0);

  const teamMembers = [
    {
      name: "Sithu Soe",
      position: "Software Engineer Intern",
      company: "ServiceNow",
      classOf: "2026",
      photo: Sithu
    },
    {
      name: "Michael Chen",
      position: "Full Stack Developer",
      company: "Microsoft",
      classOf: "2019",
      photo: null
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "Apple",
      classOf: "2021",
      photo: null
    },
    {
      name: "David Kim",
      position: "DevOps Engineer",
      company: "Amazon",
      classOf: "2018",
      photo: null
    },
    {
      name: "Lisa Wang",
      position: "Frontend Developer",
      company: "Meta",
      classOf: "2022",
      photo: null
    }
  ];

  const currentMember = teamMembers[currentPersonIndex];

  const handlePrevPerson = () => {
    setCurrentPersonIndex((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  const handleNextPerson = () => {
    setCurrentPersonIndex((prev) =>
      prev === teamMembers.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevEvent = () => {
    setCurrentEventPage((prev) => {
      const maxPage = Math.max(0, Math.ceil(allFutureEvents.length / eventsToShow) - 1);
      return prev > 0 ? prev - 1 : maxPage;
    });
  };

  const handleNextEvent = () => {
    setCurrentEventPage((prev) => {
      const maxPage = Math.max(0, Math.ceil(allFutureEvents.length / eventsToShow) - 1);
      return prev < maxPage ? prev + 1 : 0;
    });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/events`)
      .then((response) => {
        setTotalEvents(response.data.length);
      })
      .catch((error) => {
        console.error('Error fetching total events:', error);
      });

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/users/usersCount`)
      .then((response) => {
        setTotalUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching total users:', error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 600;
      setEventsToShow(isMobile ? 1 : 4);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchRecentEvents = async () => {
      try {
        console.log('Fetching events from:', `${process.env.REACT_APP_BACKEND_URL}/api/v1/events?type=upcoming`);
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/events?type=upcoming`
        );
        let mostRecentEvents = await response.json();
        console.log('Events received:', mostRecentEvents);
        setAllFutureEvents(mostRecentEvents);
      } catch (error) {
        console.error('Error fetching upcoming events:', error);
      }
    };

    fetchRecentEvents();
  }, []);

  // Update displayed events when page or eventsToShow changes
  useEffect(() => {
    const startIndex = currentEventPage * eventsToShow;
    const endIndex = startIndex + eventsToShow;
    setDisplayedFutureEvents(allFutureEvents.slice(startIndex, endIndex));
  }, [allFutureEvents, currentEventPage, eventsToShow]);

  return (
    <div style={styles.pageWrapper}>
      <Box sx={styles.root}>
        <Container maxWidth="xl" sx={styles.container}>
          {/* Hero Section */}
          <Grid container spacing={4} alignItems="center" sx={styles.heroGrid}>
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Box sx={styles.heroTextContainer}>
                <motion.div initial={styles.motionInitialLeft} animate={styles.motionAnimate} transition={styles.motionTransition(0.2)}>
                  <Box sx={styles.heroTitleWhite}>Create.</Box>
                </motion.div>

                <motion.div initial={styles.motionInitialLeft} animate={styles.motionAnimate} transition={styles.motionTransition(0.5)}>
                  <Box sx={styles.heroTitleWhite}>Solve.</Box>
                </motion.div>

                <motion.div initial={styles.motionInitialLeft} animate={styles.motionAnimate} transition={styles.motionTransition(0.8)}>
                  <Box sx={styles.heroTitleGold}>Evolve.</Box>
                </motion.div>

                <Box sx={styles.heroSubtitle}>
                  We're CSES, the <span style={{ color: '#FFD700' }}>largest</span> student-led tech community at UCSD.
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Box sx={styles.logoContainer}>
                <img src={HomeLogo} alt="CSE Society Logo" style={styles.logoImage} />
              </Box>
            </Grid>
          </Grid>

          {/* Scroll Down Arrow */}
          <Box sx={styles.scrollArrowWrapper}>
            <Box sx={styles.scrollArrow}>⌄</Box>
          </Box>

          {/* Join Section */}
          <Box sx={styles.sectionWrapper}>
            <Box sx={styles.sectionTitle}>Join UCSD's largest computing organisation!</Box>

            <Grid container spacing={2} justifyContent="center" sx={styles.statsGrid}>
              <Grid item xs={12} sm={4} md={3}>
                <Box sx={styles.statsCard}>
                  <Box sx={styles.statsNumber}>
                    <CountUp end={totalUsers} duration={2} />+
                  </Box>
                  <Box sx={styles.statsLabel}>Members</Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4} md={3}>
                <Box sx={styles.statsCard}>
                  <Box sx={styles.statsNumber}>
                    <CountUp end={totalEvents} duration={2} />+
                  </Box>
                  <Box sx={styles.statsLabel}>Events</Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4} md={3}>
                <Box sx={styles.statsCard}>
                  <Box sx={styles.statsNumber}>12+</Box>
                  <Box sx={styles.statsLabel}>Annual Projects</Box>
                </Box>
              </Grid>
            </Grid>

            {/* <MuiButton
              variant="outlined"
              onClick={() => navigate('/membership')}
              sx={styles.ctaButton}
            >
              Become a member now!
            </MuiButton> */}
          </Box>

          {/* Events Section  REDO THE WHOLE THING*/}
          <Box sx={styles.sectionWrapper}>
            <Box sx={styles.sectionTitle}>{"{Events}"}</Box>
            <Box sx={styles.eventsWrapper}>
              <Box sx={styles.arrowLeft} onClick={handlePrevEvent}>‹</Box>

              <Grid container spacing={3} justifyContent="center" sx={styles.eventsGrid}>
                {displayedFutureEvents.length > 0 ? (
                  displayedFutureEvents.map((event, index) => (
                    <Grid item xs={12} sm={12} md={3} key={event._id}>
                      <Box sx={styles.eventCard}>
                        <Box sx={styles.eventCardContent}></Box>
                        <Box sx={styles.eventLabel}>{event.title}</Box>
                      </Box>
                    </Grid>
                  ))
                ) : (
                  // Fallback for when no events are available
                  Array.from({ length: eventsToShow }, (_, index) => index + 1).map((event, index) => (
                    <Grid item xs={12} sm={12} md={3} key={index}>
                      <Box sx={styles.eventCard}>
                        <Box sx={styles.eventCardContent}></Box>
                        <Box sx={styles.eventLabel}>[Event {event}]</Box>
                      </Box>
                    </Grid>
                  ))
                )}
              </Grid>

              <Box sx={styles.arrowRight} onClick={handleNextEvent}>›</Box>
            </Box>

            <Box sx={{ marginTop: '3rem' }}>
              <MuiButton
                variant="outlined"
                onClick={() => navigate('/events')}
                sx={styles.ctaButton}
              >
                See Events Page
              </MuiButton>
            </Box>
          </Box>

          {/* Communities Section */}
          <Box sx={styles.sectionWrapper}>
            <Box sx={styles.sectionTitle}>{"{Communities}"}</Box>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={4}><img src={OpenSourceLogo} alt="Open Source" style={styles.communityLogo} /></Grid>
              <Grid item xs={12} sm={4}><img src={InnovateLogo} alt="Innovate" style={styles.communityLogo} /></Grid>
              <Grid item xs={12} sm={4}><img src={DevLogo} alt="Dev" style={styles.communityLogo} /></Grid>
            </Grid>

            <Box sx={{ marginTop: '3rem' }}>
              <MuiButton
                variant="outlined"
                onClick={() => navigate('/about')}
                sx={styles.ctaButton}
              >
                About us
              </MuiButton>
            </Box>
          </Box>

          {/* Where We Are Section */}
          <Box sx={styles.sectionWrapper}>
            <Box sx={styles.sectionTitle}>{"{Where We Are}"}</Box>
            <Box sx={styles.carouselWrapper}>
              <Box sx={styles.arrowLeft} onClick={handlePrevPerson}>‹</Box>

              <Box sx={styles.carouselContent}>
                <Box sx={styles.photoContainer}>
                  <Box sx={styles.photoInner}>
                    {currentMember.photo ? (
                      <img 
                        src={currentMember.photo} 
                        alt={currentMember.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                      />
                    ) : (
                      ''
                    )}
                  </Box>
                </Box>
                <Box sx={styles.carouselText}>
                  <Box sx={styles.carouselPosition}>{currentMember.position} | {currentMember.company}</Box>
                  <Box sx={styles.carouselClass}>Class of {currentMember.classOf}</Box>
                  <Box sx={styles.carouselName}>{currentMember.name}</Box>
                </Box>
              </Box>

              <Box sx={styles.arrowRight} onClick={handleNextPerson}>›</Box>
            </Box>

            <Box sx={styles.dotsWrapper}>
              {teamMembers.map((_, index) => (
                <Box key={index} sx={index === currentPersonIndex ? styles.dotActive : styles.dot} onClick={() => setCurrentPersonIndex(index)} />
              ))}
            </Box>

            <MuiButton
              variant="outlined"
              onClick={() => navigate('/about')}
              sx={styles.ctaButton}
            >
              Meet the Team
            </MuiButton>
          </Box>

          {/* Current Sponsors */}
          <Box sx={styles.sectionWrapper}>
            <Box sx={styles.sectionTitle}>{"{Current Sponsors}"}</Box>
            <Box sx={styles.sponsorSubtitle}>
              Interested in how CSES can help you? Contact csed@ucsd.edu or view our sponsorship package here.
            </Box>

            <Grid container spacing={3} justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={4} md={3}><img src={ASLogo} alt="Associated Student" style={styles.sponsorLogoTall} /></Grid>
              <Grid item xs={12} sm={4} md={3}><img src={CSEDeptLogo} alt="CSE Department" style={styles.sponsorLogo} /></Grid>
              <Grid item xs={12} sm={4} md={3}><Box sx={styles.emptySponsorCard}></Box></Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
