import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Grid, Button as MuiButton } from '@mui/material';
import { homeStyles } from './styles';
import DevLogo from '../../images/ourCommunitiesImages/DevLogo.png';
import InnovateLogo from '../../images/ourCommunitiesImages/InnovateLogo.png';
import OpenSourceLogo from '../../images/ourCommunitiesImages/OpenSourceLogo.png';
import HomeLogo from '../../images/HomeLogo.png';
import ASLogo from '../../images/sponsors/AS_Logo.png';
import CSEDeptLogo from '../../images/sponsors/CSEDept_Logo.png';
import BasementLogo from '../../images/sponsors/Basement_Logo.jpeg';
import EyePopAILogo from '../../images/sponsors/EyePopAI_Logo.png';
import GoogleLogo from '../../images/sponsors/Google_Logo.webp';
import BSLLogo from '../../images/sponsors/BSL.png'
import IGELogo from '../../images/sponsors/IGE_Logo.png';
import LinuxLogo from '../../images/sponsors/Linux_Logo.png';
import LovableLogo from '../../images/sponsors/Lovable_Logo.png';
import OSPOLogo from '../../images/sponsors/OSPO_Logo.png';
import PersonaLogo from '../../images/sponsors/Persona_Logo.png';
import RobloxLogo from '../../images/sponsors/Roblox_Logo.png';
import Sithu from '../../images/homepage/sithu.jpg';
import axios from 'axios';
import CountUp from 'react-countup';
import { motion } from "framer-motion";
import jesusgonzalez from '../../images/homepage/jesusgonzalez.png';
import shreevenkatesh from '../../images/homepage/shreevenkatesh.jpg';
import pranavsoma from '../../images/homepage/pranavsoma.jpg';
import nikithamaderamitla from '../../images/homepage/nikithaM.jpg';
import westonzong from '../../images/homepage/westonzong.jpg';
import vanditajain from '../../images/homepage/vanditajain.jpg';
import EventCard from '../NewEvents/EventCard';


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
      name: "Jesus Gonzalez",
      position: "Software Engineer Intern",
      company: "Intuit",
      photo: jesusgonzalez // placeholder for now
    },
    {
      name: "Shree Venkatesh",
      position: "Software Development Engineer Intern",
      company: "Amazon Web Services",
      photo: shreevenkatesh // placeholder for now
    },
    {
      name: "Pranav Soma",
      position: "Associate Software Engineer",
      company: "ServiceNow",
      photo: pranavsoma // placeholder for now
    },
    {
      name: "Nikitha Maderamitla",
      position: "Software Engineer",
      company: "Curanostics",
      photo: nikithamaderamitla // placeholder for now
    },
    {
      name: "Weston Zong",
      position: "Software Engineer",
      company: "Roblox",
      photo: westonzong // placeholder for now
    },
    {
      name: "Vandita Jain",
      position: "AL and ML Intern",
      company: "Global Impact Assessment",
      photo: vanditajain // placeholder for now
    },
    
    {
      name: "Sithu Soe",
      position: "Associate Software Engineer Intern",
      company: "ServiceNow",
      // classOf: "2026",
      photo: Sithu
    },
    /*{
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
    }*/
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
                  <Box sx={styles.statsLabel}>Annual Events</Box>
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
                    <Grid item xs={12} sm={6} md={4} key={event._id}>
                      <EventCard
                        title={event.title}
                        startDate={event.start_time}
                        endDate={event.end_time}
                        location={event.location}
                        calendar_link={event.calendar_link}
                        description={event.description}
                        instagram_link={event.instagram_link}
                        _id={event._id}
                      />
                    </Grid>
                  ))
                ) : (
                  // Fallback for when no events are available
                  Array.from({ length: eventsToShow }, (_, index) => index + 1).map((event, index) => (
                    <Grid item xs={12} sm={12} md={4} key={index}>
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
              <Grid item xs={12} sm={4} onClick={() => navigate('/opensourcecommunity')} style={{ cursor: 'pointer' }}>
                <img src={OpenSourceLogo} alt="Open Source" style={styles.communityLogo} />
              </Grid>
              <Grid item xs={12} sm={4} onClick={() => navigate('/innovatecommunity')} style={{ cursor: 'pointer' }}>
                <img src={InnovateLogo} alt="Innovate" style={styles.communityLogo} />
              </Grid>
              <Grid item xs={12} sm={4} onClick={() => navigate('/devcommunity')} style={{ cursor: 'pointer' }}>
                <img src={DevLogo} alt="Dev" style={styles.communityLogo} />
              </Grid>
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
                  {/* <Box sx={styles.carouselPosition}>{currentMember.classOf}</Box> */}
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
              <Grid item xs={6} sm={4} md={2}><img src={ASLogo} alt="Associated Student" style={styles.sponsorLogo} /></Grid>
              <Grid item xs={6} sm={4} md={2}><img src={CSEDeptLogo} alt="CSE Department" style={styles.sponsorLogo} /></Grid>
              <Grid item xs={6} sm={4} md={2}><img src={BSLLogo} alt="Big Strategy Lab" style={styles.sponsorLogo} /></Grid> 
              <Grid item xs={6} sm={4} md={2}><img src={RobloxLogo} alt="Roblox" style={styles.sponsorLogo} /></Grid>
              <Grid item xs={6} sm={4} md={2}><img src={PersonaLogo} alt="Persona" style={styles.sponsorLogo} /></Grid>
              <Grid item xs={6} sm={4} md={2}><img src={LovableLogo} alt="Lovable" style={styles.sponsorLogo} /></Grid>
              <Grid item xs={6} sm={4} md={2}><img src={EyePopAILogo} alt="EyePop AI" style={styles.sponsorLogo} /></Grid>
              <Grid item xs={6} sm={4} md={2}><img src={IGELogo} alt="IGE" style={styles.sponsorLogo} /></Grid>
              <Grid item xs={6} sm={4} md={2}><img src={LinuxLogo} alt="Linux Foundation" style={styles.sponsorLogo} /></Grid>
              <Grid item xs={6} sm={4} md={2}><img src={OSPOLogo} alt="OSPO" style={styles.sponsorLogo} /></Grid>
              <Grid item xs={6} sm={4} md={2}><img src={BasementLogo} alt="Basement" style={styles.sponsorLogo} /></Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
