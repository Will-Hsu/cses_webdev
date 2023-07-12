import React, { useState } from 'react';
import Button from '../Button/Button';
import { Container, Box, Grid } from '@mui/material';
import bgTop from '../../images/shape2.svg';
import bgBtm from '../../images/shape2.svg';
import blankPhoto from '../../images/aboutpagephoto.png'
import books from '../../images/aboutbooks.png'
import lightBulb from '../../images/aboutlightbulb.png'
import blankSquare from '../../images/aboutsquare.png'
import shape from '../../images/shape.svg';
import previous from '../../images/previous.png';
import next from '../../images/next.png';
import { aboutStyles } from './styles';

const About = () => {
  const styles = aboutStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePreviousChange = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextChange = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div style={{position: 'relative'}}>
      <Box sx={styles.root}>
        <Box>
          <img src={bgTop} alt="bg1" style={styles.bg1} />
          <img src={bgBtm} alt="bg2" style={styles.bg2} />
        </Box>
      <Container maxWidth="xl" sx={styles.body}>
        <Grid container>
          <Grid item >
            <img 
              src={blankPhoto} 
              alt="img"
              style={{ width: '50%', marginLeft: '310px', marginTop: '222px', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
            <Box
              sx={{
                ...styles.titleTop,
                display: 'flex',
              }}>
              What is CSES?
            </Box>
            <Box
              sx={{
                ...styles.subtitleTop,
                display: 'flex',
              }}>
              CSES is the Computer Science and Engineering Society at UCSD that focuses on the professional development of CSE students and students interested in computing through various programs and career development events. 
            </Box>
          </Grid>
        </Grid>
        
        <Grid item xs={12} sm={4.5} md={5}>
          <Box
            sx={{
              ...styles.mainTitleMiddle,
              display: 'flex',
            }}>
            WHAT DO WE DO?
          </Box>
        </Grid>
        
        <Grid container >
          <Grid item >
            <img 
              src={books} 
              alt="img"
              style={{ width: '60%', marginLeft: '280px', marginTop: '100px', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
            <Box
              sx={{
                ...styles.titleBottom1,
                display: 'flex',
              }}>
              Our History.
            </Box>
            <Box
              sx={{
                ...styles.subtitleBottom1,
                display: 'flex',
              }}>
              CSES was the first CSE organization at UCSD starting nearly twenty years ago, and we have innovated over the years to stay relevant in serving the CSE community. We aim to continue innovating and improving, so we could continue to serve this community for another twenty years. 
              </Box>
          </Grid>

          <Grid item>
          <Box
              sx={{
                ...styles.titleBottom2,
                display: 'flex',
              }}>
              Our Future.
            </Box>
            <Box
              sx={{
                ...styles.subtitleBottom2,
                display: 'flex',
              }}>
              Our mission statement is to help our members get professional opportunities while fostering a network of individuals. We do this through quarterly career fairs, programs for career development, and project opportunities to gain experience. 
              </Box>
          </Grid>
          <Grid item >
            <img 
              src={lightBulb} 
              alt="img"
              style={{ width: '50%', marginLeft: '350px', marginTop: '70px', height: 'auto' }}
            />
          </Grid>

          <Grid item >
            <img 
              src={blankSquare} 
              alt="img"
              style={{ width: '55%', marginLeft: '280px', marginTop: '100px', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={5} md={6}>
            <Box
              sx={{
                ...styles.titleBottom3,
                display: 'flex',
              }}>
              What's in store for me?
            </Box>
            <Box
              sx={{
                ...styles.subtitleBottom3,
                display: 'flex',
              }}>
              Check out amazing events we have planned as well as the opportunities we have for members. 
            </Box>
            <Box sx={{ ...styles.button1}}>
              <Button size="large" text="See opportunities ->" onClick={() => console.log('click')} />
            </Box>
          </Grid>

          <Grid item xs={12} sm={5} md={6}>
          <Box
              sx={{
                ...styles.titleBottom4,
                display: 'flex',
              }}>
              How do I join?
            </Box>
            <Box
              sx={{
                ...styles.subtitleBottom4,
                display: 'flex',
              }}>
              Check out amazing events we have planned as well as the opportunities we have for members. 
              </Box>
          </Grid>
          <Grid item >
            <img 
              src={blankSquare} 
              alt="img"
              style={{ width: '70%', marginLeft: '180px', marginTop: '100px', height: 'auto' }}
            />
          </Grid>
          <Box sx={{ ...styles.button2}}>
              <Button size="large" text="Become a member ->" onClick={() => console.log('click')} />
          </Box>
        </Grid>

        

        <h1 style={{ color: 'white', textAlign: 'center', marginTop: '8%' }}>MEET THE TEAM!</h1>
        <Grid container sx={{ marginTop: '8%', display: 'flex', justifyContent: 'center' }}>
          <Grid item md={1.5}>
            <Button size="large" text="Category 1" onClick={() => console.log('click')} />
          </Grid>
          <Grid item md={1.5}>
            <Button size="large" text="Category 2" onClick={() => console.log('click')} />
          </Grid>
          <Grid item md={1.5}>
            <Button size="large" text="Category 3" onClick={() => console.log('click')} />
          </Grid>
          <Grid item md={1.5}>
            <Button size="large" text="Category 4" onClick={() => console.log('click')} />
          </Grid>
          <Grid item md={1.5}>
            <Button size="large" text="Category 5" onClick={() => console.log('click')} />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ marginTop: '8%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Grid item md={3}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={shape} alt="img" style={{ width: 200, height: 300 }} />
            </div>
            <h3 style={{ color: 'white', textAlign: 'center' }}>Goldie Chu</h3>
            <h5 style={{ color: 'white', textAlign: 'center' }}>Design Team, 2023</h5>
          </Grid>
          <Grid item md={3}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={shape} alt="img" style={{ width: 200, height: 300 }} />
            </div>
            <h3 style={{ color: 'white', textAlign: 'center' }}>Goldie Chu</h3>
            <h5 style={{ color: 'white', textAlign: 'center' }}>Design Team, 2023</h5>
          </Grid>
          <Grid item md={3}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={shape} alt="img" style={{ width: 200, height: 300 }} />
            </div>
            <h3 style={{ color: 'white', textAlign: 'center' }}>Goldie Chu</h3>
            <h5 style={{ color: 'white', textAlign: 'center' }}>Design Team, 2023</h5>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ marginTop: '-1%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Grid item md={4.5}>
            <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
              <button
                style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                onClick={handlePreviousChange}
              >
                <img
                  src={previous}
                  alt="img"
                  style={{ width: 30, height: 30 }}
                />
              </button>
            </div>
          </Grid>
          <Grid item md={4.5}>
            <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
                <img
                  src={next}
                  alt="img"
                  style={{ width: 30, height: 30, cursor: 'pointer' }}
                  onClick={handleNextChange}
                />
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            marginTop: '-5%',
            marginBottom: '5%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item md={3}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={shape} alt="img" style={{ width: 200, height: 300 }} />
            </div>
            <h3 style={{ color: 'white', textAlign: 'center' }}>Goldie Chu</h3>
            <h5 style={{ color: 'white', textAlign: 'center' }}>Design Team, 2023</h5>
          </Grid>
          <Grid item md={3}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={shape} alt="img" style={{ width: 200, height: 300 }} />
            </div>
            <h3 style={{ color: 'white', textAlign: 'center' }}>Goldie Chu</h3>
            <h5 style={{ color: 'white', textAlign: 'center' }}>Design Team, 2023</h5>
          </Grid>
          <Grid item md={3}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={shape} alt="img" style={{ width: 200, height: 300 }} />
            </div>
            <h3 style={{ color: 'white', textAlign: 'center' }}>Goldie Chu</h3>
            <h5 style={{ color: 'white', textAlign: 'center' }}>Design Team, 2023</h5>
          </Grid>
        </Grid>

      </Container>
      </Box>
    </div>
  );
};

export default About;
