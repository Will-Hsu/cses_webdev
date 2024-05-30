import { useEffect, useRef, useState } from 'react';
import { Container, Box, Link, Grid, useMediaQuery } from '@mui/material';
import { aboutStyles } from './styles';
import innovate from '../../images/ourCommunitiesImages/cses_innovate.png';
import opensource from '../../images/ourCommunitiesImages/cses_opensource.png';
import webdev from '../../images/ourCommunitiesImages/cses_webdev.png';
import dev from '../../images/ourCommunitiesImages/cses_dev.png';
import { motion } from "framer-motion";
import { styled } from '@mui/system';


const MotionGrid = styled(motion.div)`
  display: flex;
  width: 100%; // Inherit full width of the parent
  height: auto; // Inherit height of the content
`;

const Communities = () => {
  const styles = aboutStyles();
  const verySmallScreen = useMediaQuery('(max-width:350px')

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
    <Container disableGutters sx={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.8)', marginTop: { xs: '15%', sm: '10%', md: '5%' }}}>
      <Grid item xs={12} sm={7} md={6} lg={5} sx={{padding: { xs: '6% 4%', sm: '4% 6%', md: '5% 5%' }}}>
          <motion.div
          ref={ref}
          initial={{ opacity: 0 }} // Set initial opacity to 0 (invisible)
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }} // Define transition duration
        >
        <Box
          sx={{
          ...styles.mainTitleTop,
          textAlign: 'center',
          fontSize: 'clamp(32px, 8vw, 65px)',
          marginBottom: '3%'
          }}
        >
          OUR COMMUNITIES
        </Box>
        <p style={{ color: 'white', fontSize: 'clamp(15px, 3vw, 20px)' }}>
          At CSES, we have various communities that cover different areas of tech and offer hands-on projects that allow you to collaborate with others, gain experience, and build your resume. 
        </p>
        <p style={{ color: 'white', fontSize: 'clamp(15px, 3vw, 20px)', marginBottom: '6%' }}>
          Websites are coming soon, but for now, check out our <Link href="https://linktr.ee/csesucsd" rel="noopener noreferrer" color="inherit" target="_blank">Linktree</Link> and come to our quarterly kick-off events for the latest updates on each community's recruitment and projects!
        </p>
        </motion.div>
        <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center'}}>
        <Grid item xs={12} sm={6}>
        <MotionGrid whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}>
          <Grid item 
            sx={{
              ...styles.communityCard,
              width: verySmallScreen ? '250px' : { xs: '350px', sm: '500px', md: '500px' },
              height: verySmallScreen ? '84px' : { xs: '100px', sm: '160px', md: '160px' },
              margin: verySmallScreen ? '10% 0% 0% 0%' : { xs: '10% 2% 2% 2%', sm: '5% 3%', md: '3% 2%' }
            }}>
            <img
              src={innovate}
              alt="Innovate"
              style={{ ...styles.communityCardImg, backgroundColor: 'black'}}
            />
              
            <Box sx={{ height: 'auto', padding: verySmallScreen ? '2%' : '4%', alignSelf: 'center' }}>
              <Box sx={{ ...styles.subheadingTop }} >
                CSES Innovate
              </Box>
              <p style={{ color: 'black', fontSize: 'clamp(8px, 2vw, 16px)', marginTop: verySmallScreen ? '2px' :'6px'}}>
                Learn about tech entrepreneurship! Form teams and build your own start-ups from ideation to pitch.
              </p>
            </Box>
            
          </Grid>
          </MotionGrid>
          </Grid>
          <Grid item xs={12} sm={6}>
          <MotionGrid whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}>
          <Grid item 
            sx={{
              ...styles.communityCard,
              width: verySmallScreen ? '250px' : { xs: '350px', sm: '500px', md: '500px' },
              height: verySmallScreen ? '84px' : { xs: '100px', sm: '160px', md: '160px' },
              margin: verySmallScreen ? '10% 0% 0% 0%' : { xs: '10% 2% 2% 2%', sm: '5% 3%', md: '3% 2%' }
            }}>
            <img
              src={dev}
              alt="Dev"
              style={{ ...styles.communityCardImg, backgroundColor: 'black'}}
            />
            <Box sx={{ height: 'auto', padding: verySmallScreen ? '2%' : '4%', alignSelf: 'center' }}>
              <Box sx={{ ...styles.subheadingTop }} >
                CSES Dev
              </Box>
              <p style={{ color: 'black', fontSize: 'clamp(8px, 2vw, 16px)', marginTop: verySmallScreen ? '2px' : '6px'}}>
                Join our internal web team of developers and UX designers to build and manage websites across all of our communities!
              </p>
            </Box>
          </Grid>
          </MotionGrid>
          </Grid>
          <Grid item xs={12} sm={6}>
          <MotionGrid
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
          <Grid item 
            sx={{
              ...styles.communityCard,
              width: verySmallScreen ? '250px' : { xs: '350px', sm: '500px', md: '500px' },
              height: verySmallScreen ? '84px' : { xs: '100px', sm: '160px', md: '160px' },
              margin: verySmallScreen ? '10% 0% 0% 0%' : { xs: '10% 2% 2% 2%', sm: '5% 3%', md: '3% 2%' }
            }}>
            <img
              src={opensource}
              alt="Open-Source"
              style={{ ...styles.communityCardImg, backgroundColor: 'black'}}
            />
            <Box sx={{ height: 'auto', padding: verySmallScreen ? '2%' : '4%', alignSelf: 'center' }}>
              <Box sx={{ ...styles.subheadingTop }} >
                CSES Open-Source
              </Box>
              <p style={{ color: 'black', fontSize: 'clamp(8px, 2vw, 16px)', marginTop: verySmallScreen ? '2px' : '6px'}}>
                No projects? No problem! Build your skills and collaborate with other students on real projects, no application required!
              </p>
            </Box>
          </Grid>
          </MotionGrid>
          </Grid>
          <Grid item xs={12} sm={6}>
          <MotionGrid
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
          <Grid item 
            sx={{
              ...styles.communityCard,
              width: verySmallScreen ? '250px' : { xs: '350px', sm: '500px', md: '500px' },
              height: verySmallScreen ? '84px' : { xs: '100px', sm: '160px', md: '160px' },
              margin: verySmallScreen ? '10% 0% 0% 0%' : { xs: '10% 2% 2% 2%', sm: '5% 3%', md: '3% 2%' }
            }}>
            <img
              src={webdev}
              alt="WebDev"
              style={{ ...styles.communityCardImg}}
            />
            <Box sx={{ height: 'auto', padding: verySmallScreen ? '2%' : '4%', alignSelf: 'center' }}>
              <Box sx={{ ...styles.subheadingTop }} >
                CSES WebDev
              </Box>
              <p style={{ color: 'black', fontSize: 'clamp(8px, 2vw, 16px)', marginTop: verySmallScreen ? '2px' : '6px'}}>
                Gain hands-on experience in web design and development for real clients, from UCSD clubs to non-profits!
              </p>
            </Box>
          </Grid>
         </MotionGrid>
         </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Communities;