import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { Container, Box, Grid, createTheme, useMediaQuery } from '@mui/material';
import { aboutStyles } from './styles';
import about3 from '../../images/aboutpage/about_3.jpg';
import { ImageWithBoxShadow } from '../Opportunities/Opportunities';
import { motion } from "framer-motion";

const HowtoJoin = () => {
    const navigate = useNavigate();
    const styles = aboutStyles();
    const theme = createTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const [isInView1, setIsInView1] = useState(false);
    const ref1 = useRef(null);

    useEffect(() => {
        const currentRef = ref1.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView1(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref1]);

    return (
        <Container disableGutters sx={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.8)', marginTop: { xs: '15%', sm: '10%', md: '5%' }}}>
            <Grid 
                container 
                spacing={2} 
                sx={{
                    padding: { xs: '6% 4%', sm: '4% 6%', md: '5% 5%' },
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {/* Image Section - Now placed first */}
                <Grid item xs={12} sm={5}>
                    <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%',
                        maxWidth: { xs: '100%', sm: '400px' },
                        margin: '0 auto'
                    }}>
                        <Box sx={{
                            width: '100%',
                            height: 'auto',
                            position: 'relative',
                            '& > *': {
                                width: '100% !important',
                                height: 'auto !important',
                                maxWidth: '100%',
                                objectFit: 'contain'
                            }
                        }}>
                            <ImageWithBoxShadow src={about3} alt="img" />
                        </Box>
                    </Box>
                </Grid>

                {/* Text Section */}
                <Grid item xs={12} sm={7}>
                    <motion.div
                        ref={ref1}
                        initial={{ opacity: 0 }}
                        animate={isInView1 ? { opacity: 1 } : {}}
                        transition={{ duration: 1 }}
                    >
                        <Box
                            sx={{
                                ...styles.mainTitleTop,
                                textAlign: 'center',
                                fontSize: 'clamp(32px, 8vw, 65px)',
                                marginBottom: '3%'
                            }}
                        >
                            How do I join?
                        </Box>
                        <p style={{ 
                            color: 'white', 
                            fontSize: 'clamp(15px, 3vw, 20px)',
                            margin: '0 auto',
                            maxWidth: '800px'
                        }}>
                            To become a general member, simply sign up with your UCSD email!
                        </p>
                        <p style={{ 
                            color: 'white', 
                            fontSize: 'clamp(15px, 3vw, 20px)',
                            margin: '20px auto',
                            maxWidth: '800px'
                        }}>
                            Do you want to be a part of the internal team? Become a member and follow us on our socials to be notified of when board applications open on a rolling basis.
                        </p>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                            <Button 
                                text="Become a Member ->" 
                                onClick={() => navigate('/membership')}
                            />
                        </Box>
                    </motion.div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HowtoJoin;