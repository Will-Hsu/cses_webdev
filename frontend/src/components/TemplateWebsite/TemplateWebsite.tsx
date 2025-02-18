import React from 'react';
import { Container, Box, Grid } from '@mui/material';
import { tempStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import template1 from '../../images/templatepage/template1.png';
import { ImageWithBoxShadow } from '../Opportunities/Opportunities';
import Projects from './Projects';
import MeetTheTeam from './MeetTheTeam';
import Button from '../Button/Button'

const TemplateWebsite = () => {
  const styles = tempStyles();
  const navigate = useNavigate();
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box sx={styles.root}>
        <Container maxWidth="xl" disableGutters sx={styles.body}>
          {/*Box for the 'What is XX' along with picture*/}
          <Grid container pl={'10%'} pr={'10%'} pt={4} pb={2} mb={6} justifyContent="center" alignItems="center">
            {/* Left Column: Text */}
            <Grid item sm={7} pl={{ lg: '8%' }}>
              <Box
                sx={{
                  color: 'white',
                  textAlign: { lg: 'left', xs: 'center' },
                  padding: '4px',
                }}
              >
                <h1 style={styles.subtitle}
                >
                  What is CSES Open Source?
                </h1>
                <p style={{ color: 'white', fontSize: 'clamp(15px, 3vw, 20px)' }}>
                  CSE Society was the first CSE organization at UCSD starting over twenty years ago, and
                  we have innovated over the years to stay relevant in serving the CSE community. We are
                  open to all majors and individuals who are interested in computing!
                </p>
              </Box>
            </Grid>
            {/* Right Column: Image */}
            <Grid item sm={5} pl={{ lg: '2%' }} pr={{ lg: '8%' }}>
              <ImageWithBoxShadow src={template1} alt="img" />
            </Grid>
          </Grid>
          {/*Box for the Opportunities Page*/}
          <Box sx={styles.opportBox}>
            <Grid container pt={4} pb={8} justifyContent="center" alignItems="center" >
              {/* Left Column: Image */}
              <Grid item sm={5} pl={{ lg: '2%' }} pr={{ lg: '2%' }}>
                <ImageWithBoxShadow src={template1} alt="img" />
              </Grid>
              {/* Right Column: Text*/}
              <Grid item sm={7} pl={{ lg: '2%' }} pr={{ lg: '4%' }}>
                <Box
                  sx={{
                    color: 'white',
                    textAlign: { lg: 'left', xs: 'center' },
                  }}
                >
                  <h1
                    style={styles.subtitle}
                  >
                    Opportunities
                  </h1>
                  <p style={{ color: 'white', fontSize: 'clamp(15px, 3vw, 20px)' }}>
                    CSE Society was the first CSE organization at UCSD starting over twenty years ago, and
                    we have innovated over the years to stay relevant in serving the CSE community. We are
                    open to all majors and individuals who are interested in computing!
                  </p>
                  <Button
                        size="large"
                        text="Become a Member ->"
                        onClick={() => navigate('/membership')}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Projects />
          <MeetTheTeam />
        </Container>
      </Box>
    </Box>
  );
};
export default TemplateWebsite;
