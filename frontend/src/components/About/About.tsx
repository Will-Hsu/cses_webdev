import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { Container, Box, Grid, createTheme, useMediaQuery } from '@mui/material';
import bgTop from '../../images/shape2.svg';
import bgBtm from '../../images/shape2.svg';
import { aboutStyles } from './styles';
import books from '../../images/aboutbooks.png';
import lightBulb from '../../images/aboutlightbulb.png';
import MeetTheTeam from './MeetTheTeam';
import Communities from './OurCommunities';
import HowtoJoin from './HowToJoin';
import about1 from '../../images/aboutpage/about_1.jpg';
import about3 from '../../images/aboutpage/about_3.jpg';
import { ImageWithBoxShadow } from '../Opportunities/Opportunities';
import Typewriter from './TypeWriter';
import { motion } from "framer-motion"

const About = () => {
  const styles = aboutStyles();
  const theme = createTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Disconnect after first trigger
        }
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box sx={styles.root}>
        <Box sx={styles.backgroundImage}>
          <img src={bgTop} alt="bg1" style={{ ...styles.bg1, position: 'absolute' }} />
          <img src={bgBtm} alt="bg2" style={{ ...styles.bg2, position: 'absolute' }} />
        </Box>
        <Container maxWidth="xl" sx={styles.body}>
          <Box sx={{ backgroundColor: 'rgba(0,0,0,0.5)', maxWidth: '90%', margin: '0 auto' }}>
            <Grid container pt={4} pb={2} justifyContent="center" alignItems="center">
              <Grid item sm={5} pl={{ lg: '8%' }} pr={{ lg: '2%' }}>
                <ImageWithBoxShadow src={about1} alt="img" />
              </Grid>
              <Grid item sm={7} pr={{ lg: '8%' }}>
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
                      fontSize: 'clamp(32px, 8vw, 65px)',
                      fontWeight: '700',
                    }}
                  >
                    <Typewriter text="WHHAT IS CSES?" speed={200} />
                  </h1>

                  <p style={{ color: 'white', fontSize: 'clamp(15px, 3vw, 20px)' }}>
                    CSE Society was the first CSE organization at UCSD starting over twenty years
                    ago, and we have innovated over the years to stay relevant in serving the CSE
                    community. We are open to all majors and indivduals who are interested in
                    computing!
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <h1
            style={{
              color: 'white',
              marginTop: '10%',
              textAlign: 'center',
              fontFamily: 'Chakra Petch',
              fontSize: 'clamp(32px, 8vw, 65px)',
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
              <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ type: 'spring', stiffness: 50, damping: 20, mass: 1, delay: 0.2 }}
    >
              <img src={books} alt="img" style={{ width: '80%' }} />
              </motion.div>
            </Grid>
            <Grid item sm={5} lg={5}>
            <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ type: 'spring', stiffness: 50, damping: 20, mass: 1, delay: 0.2 }}
    >
              <Box
                sx={{
                  color: 'white',
                  textAlign: { lg: 'left', sm: 'left', xs: 'center' },
                }}
              >
                <h1>Our History</h1>
            
                <p style={{ color: 'white', fontSize: 'clamp(15px, 3vw, 20px)' }}>
                  CSES was the first CSE organization at UCSD starting over twenty years ago, and we have innovated over the years to stay relevant in serving the CSE community. We are open to all majors and indivduals who are interested in computing!
                </p>
                
              </Box>
            </motion.div>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            columnSpacing={12}
            mt={12}
            spacing={4}
            direction={isSmallScreen ? 'column-reverse' : 'row'}
          >
            <Grid item sm={5}>
            <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ type: 'spring', stiffness: 50, damping: 20, mass: 1, delay: 0.6 }}
    >
              <Box sx={{ color: 'white', textAlign: { lg: 'left', sm: 'left', xs: 'center' } }}>
                <h1>Our Future</h1>
              </Box>
              <p
                style={{
                  color: 'white',
                  fontSize: 'clamp(15px, 3vw, 20px)',
                  textAlign: isSmallScreen ? 'center' : 'left',
                }}
              >
                Our mission statement is to help our members get professional opportunities while fostering a network of individuals. We do this through quarterly career fairs, mentorship programs for career development, and project opportunities to gain experience.
              </p>
            </motion.div>
            </Grid>

            <Grid item sm={4} md={3} lg={3} maxHeight={'100%'}>
            <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ type: 'spring', stiffness: 50, damping: 20, mass: 1, delay: 0.6 }}
    >
              <img src={lightBulb} alt="img" />
              </motion.div>
            </Grid>
          </Grid>
          <HowtoJoin />
          <Communities />
          <MeetTheTeam />
        </Container>
      </Box>
    </Box>
  );
};

export default About;
