import React, { useEffect, useRef, useState } from 'react';
import { Container, Box, Grid, createTheme, useMediaQuery } from '@mui/material';
import {
  aboutStyles,
  gradientImgWrapper,
  gradientImg,
  fullBleedGradientSection,
  aboutImageSize,
} from './styles';
import MeetTheTeam from './MeetTheTeam';
import Communities from './OurCommunities';
import HowtoJoin from './HowToJoin';
import MeetTheAlumni from './MeetTheAlumni';
import Typewriter from './TypeWriter';
import { motion } from 'framer-motion';
import OurHistory from '../../images/aboutpage/ourhistory.png'
import OurFuture from '../../images/aboutpage/ourfuture.png'

const PLACEHOLDER_GENERAL = 'https://placehold.co/200x200?text=Placeholder';

const COMMUNITY_COLORS = {
  forefront: '#eab010',
  dev: '#52d4b7',
  openSource: '#64c3e3',
  innovate: '#725df0',
};

const Colored: React.FC<{ color: string; children: React.ReactNode }> = ({ color, children }) => (
  <span style={{ color, fontWeight: 700 }}>{children}</span>
);

const About = () => {
  const styles = aboutStyles();
  const theme = createTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box sx={styles.root}>
        <Box sx={styles.backgroundImage} />

        <Container sx={styles.body}>
          {/* WHAT IS CSES — full-bleed band with centered copy + gradient border */}
          <Box sx={fullBleedGradientSection}>
            <Box className="section-surface">
              {/* background wash */}
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  background: '#47518a',
                }}
              />
              {/* content */}
              <Container
                maxWidth={false}
                sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 }, textAlign: 'center'}}
              >
                <h1
                  style={{
                    fontFamily: 'Chakra Petch',
                    fontSize: 'clamp(32px, 8vw, 65px)',
                    fontWeight: 700,
                    margin: 0,
                    color: 'white',
                  }}
                >
                  <Typewriter text="WHAT IS CSES?" speed={200} />
                </h1>

                <p
                  style={{
                    color: 'white',
                    fontSize: 'clamp(15px, 3vw, 20px)',
                    lineHeight: 1.7,
                    maxWidth: 1000,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  For over 21 years, CSES has been at the
                  <Colored color={COMMUNITY_COLORS.forefront}> forefront</Colored> of undergraduate
                  computing, growing the largest student-led tech community on campus. Through our{' '}
                  <Colored color={COMMUNITY_COLORS.dev}>Dev</Colored>,{' '}
                  <Colored color={COMMUNITY_COLORS.openSource}>OpenSource</Colored>, and{' '}
                  <Colored color={COMMUNITY_COLORS.innovate}>Innovate</Colored> divisions, we give
                  students the chance to build real-world software, contribute to open-source
                  projects, and explore cutting-edge research. We celebrate curiosity, foster
                  innovation, and empower the next generation of tech leaders.
                </p>
              </Container>
            </Box>
          </Box>

          <h1
            style={{
              color: 'white',
              marginTop: '10%',
              textAlign: 'center',
              fontFamily: 'Chakra Petch',
              fontSize: 'clamp(40px, 9vw, 80px)',
              fontWeight: 700,
            }}
          >
            WHAT DO WE DO?
          </h1>
          <Grid
            container
            sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'center' } }}
          >
            <Grid
              item
              sm={6}
              md={4}
              lg={4}
              sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
            >
              <motion.div
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ type: 'spring', stiffness: 50, damping: 20, mass: 1, delay: 0.2 }}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  sx={{
                    display: "inline-block",
                    borderRadius: "12px", 
                    p: "3px", 
                    background: "linear-gradient(45deg, #FFCE00, #00F0FF)",
                  }}
                >
                  <Box
                    component="img"
                    src={OurHistory}
                    alt="placeholder"
                    sx={{
                      display: "block",
                      width: { xs: 260, sm: 340, md: 300 },
                      height: { xs: 260, sm: 340, md: 300 },
                      objectFit: "cover",
                      borderRadius: "10px", 
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>

            <Grid item sm={6} md={8} lg={8}>
              <motion.div
                ref={ref}
                initial={{ x: 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ type: 'spring', stiffness: 50, damping: 20, mass: 1, delay: 0.2 }}
              >
                <Box sx={{ color: 'white', textAlign: { lg: 'left', sm: 'left', xs: 'center' } }}>
                  <h1>Our History</h1>
                  <p style={{ color: 'white', fontSize: 'clamp(18px, 2.4vw, 22px)' }}>
                    CSES was the first CSE organization at UCSD starting over twenty years ago, and
                    we have innovated over the years to stay relevant in serving the CSE community.
                    We are open to all majors and individuals who are interested in computing!
                  </p>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ mt: '5%', display: 'flex', justifyContent: { xs: 'center', sm: 'center' } }}
          >
          <Grid item sm={6} md={8} lg={8} sx={{order: { xs: 2, md: 1 }}}>
              <motion.div
                ref={ref}
                initial={{ x: 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ type: 'spring', stiffness: 50, damping: 20, mass: 1, delay: 0.2 }}
              >
                <Box sx={{ color: 'white', textAlign: { lg: 'left', sm: 'left', xs: 'center' },}}>
                  <h1>Our Future</h1>
                  <p style={{ color: 'white', fontSize: 'clamp(18px, 2.4vw, 22px)' }}>
                    Our mission statement is to help our members get professional opportunities while fostering a network of individuals.
                    We do this through quarterly career fairs, mentorship programs for career development, and project opportunities to gain experience.
                  </p>
                </Box>
              </motion.div>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={4}
              sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', order: { xs: 1, md: 2 }}}
            >
              <motion.div
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ type: 'spring', stiffness: 50, damping: 20, mass: 1, delay: 0.2 }}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
        
                <Box
                  sx={{
                    display: "inline-block",
                    borderRadius: "12px", 
                    p: "3px", 
                    background: "linear-gradient(45deg, #FFCE00, #00F0FF)",
                  }}
                >
                  <Box
                    component="img"
                    src={OurFuture}
                    alt="placeholder"
                    sx={{
                      display: "block",
                      width: { xs: 260, sm: 340, md: 300 },
                      height: { xs: 260, sm: 340, md: 300 },
                      objectFit: "cover",
                      borderRadius: "10px", 
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
          <HowtoJoin />
          <Communities />
          <MeetTheTeam />
          <MeetTheAlumni />
        </Container>
      </Box>
    </Box>
  );
};

export default About;
