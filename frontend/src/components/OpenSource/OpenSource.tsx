import React from 'react';
import { Container, Box, Grid } from '@mui/material';
import { tempStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import about from '../../images/opensourceteam/about_2.jpg';
import meetteam from '../../images/opensourceteam/about_1.png'
import { ImageWithBoxShadow } from '../Opportunities/Opportunities';
import Projects from './Projects';
import MeetTheTeam from './MeetTheTeam';
import Button from '../Button/Button'

const OpenSource = () => {
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
                CSES Open Source, a proud initiative of the Computer Science and Engineering 
                Society (CSES) at UC San Diego, is dedicated to promoting an open-source culture 
                within the university community. Our mission is to foster a vibrant ecosystem of 
                collaborative software development, providing students with valuable opportunities 
                to learn, contribute, and make a meaningful impact in the world of open source.
                </p>
              </Box>
            </Grid>
            {/* Right Column: Image */}
            <Grid item sm={5} pl={{ lg: '2%' }} pr={{ lg: '2%' }}>
              <ImageWithBoxShadow src={about} alt="img" />
            </Grid>
          </Grid>
          {/*Box for the Opportunities Page*/}
          <Box sx={styles.opportBox}>
            <Grid container pt={4} pb={8} justifyContent="center" alignItems="center" >
              {/* Left Column: Image */}
              <Grid item sm={5} pl={{ lg: '2%' }} pr={{ lg: '2%' }}>
                <ImageWithBoxShadow src={meetteam} alt="img" />
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
                  <Box sx={{ color: 'white', fontSize: 'clamp(15px, 3vw, 20px)' }}>
                    <p>There are several ways to get involved:</p>
                    <Box component="ul" sx={{ paddingLeft: '20px', marginTop: '5px' }}>
                      <li>Apply to be active contributors/maintainers for our open-source projects (developer)</li>
                      <li>Apply for leadership positions in the board (Engineering Managers, Designers)</li>
                      <li>Come to OpenSource events and workshops</li>
                      <li>Attend general CSES events and get involved!</li>
                      <li>Just go to the repo, fork it, pick an issue, get started, and submit a PR</li>
                    </Box>
                  </Box>

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
export default OpenSource;
