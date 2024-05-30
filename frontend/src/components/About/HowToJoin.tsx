import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { Container, Box, Grid, createTheme, useMediaQuery } from '@mui/material';
import { aboutStyles } from './styles';
import about3 from '../../images/aboutpage/about_3.jpg';
import { ImageWithBoxShadow } from '../Opportunities/Opportunities';
import { motion } from "framer-motion"

const HowtoJoin = () => {
    const navigate = useNavigate();
    const styles = aboutStyles();
    const theme = createTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const [isInView1, setIsInView1] = useState(false);
    const ref1 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsInView1(true);
              observer.disconnect(); // Disconnect after first trigger
            }
          },
          {
            threshold: 0.1, // Adjust this value as needed
          }
        );
    
        if (ref1.current) {
          observer.observe(ref1.current);
        }
    
        return () => {
          if (ref1.current) {
            observer.unobserve(ref1.current);
          }
        };
      }, []);

    return (
        <motion.div
      ref={ref1}
      initial={{ x: 100, opacity: 0 }}
      animate={isInView1 ? { x: 0, opacity: 1 } : {}}
      transition={{ type: 'spring', stiffness: 50, damping: 20, mass: 1, delay: 0.6 }}
    >
        <Container maxWidth="xl" sx={styles.body}>
            <Box sx={{ maxWidth: '90%', margin: '0 auto' }}>
              <Grid
                container
                justifyContent="center"
                mt={12}
                mb={12}
                direction={isSmallScreen ? 'column-reverse' : 'row'}
              >
                <Grid item sm={7} pl={{ lg: '8%' }}>
                  <Box sx={{ color: 'white', textAlign: { md: 'left', sm: 'left', xs: 'center' } }}>
                    <h1>How do I join?</h1>
                  </Box>
                  <Box sx={{ color: 'white', textAlign: { lg: 'left', sm: 'left', xs: 'center' } }}>
                    <p style={{ color: 'white', fontSize: 'clamp(15px, 3vw, 20px)' }}>
                      To become a general member, simply sign up with your UCSD email!
                    </p>
                    <p style={{ color: 'white', fontSize: 'clamp(15px, 3vw, 20px)' }}>
                      Do you want to be a part of the internal team? Become a member and follow us
                      on our socials to be notified of when board applications open on a rolling
                      basis.
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
                <Grid item sm={5} pl={{ lg: '2%' }} pr={{ lg: '8%' }}>
                  <ImageWithBoxShadow src={about3} alt="img" />
                </Grid>
              </Grid>
            </Box>
          </Container>
          </motion.div>
    );
};

export default HowtoJoin;