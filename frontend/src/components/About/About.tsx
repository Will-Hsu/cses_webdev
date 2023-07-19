import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const categories = [
  {
    id: 1,
    name: 'Category 1',
    members: [
      { name: 'Member 1.1', title: 'Title 1', photo: shape },
      { name: 'Member 1.2', title: 'Title 2', photo: shape },
      { name: 'Member 1.3', title: 'Title 3', photo: shape },
      { name: 'Member 1.4', title: 'Title 4', photo: shape },
      { name: 'Member 1.5', title: 'Title 5', photo: shape },
      { name: 'Member 1.6', title: 'Title 6', photo: shape },
    ],
  },
  {
    id: 2,
    name: 'Category 2',
    members: [
      { name: 'Member 2.1', title: 'Title 1', photo: shape },
      { name: 'Member 2.2', title: 'Title 2', photo: shape },
      { name: 'Member 2.3', title: 'Title 3', photo: shape },
      { name: 'Member 2.4', title: 'Title 4', photo: shape },
      { name: 'Member 2.5', title: 'Title 5', photo: shape },
      { name: 'Member 2.6', title: 'Title 6', photo: shape },
    ],
  },
  {
    id: 3,
    name: 'Category 3',
    members: [
      { name: 'Member 3.1', title: 'Title 1', photo: shape },
      { name: 'Member 3.2', title: 'Title 2', photo: shape },
      { name: 'Member 3.3', title: 'Title 3', photo: shape },
      { name: 'Member 3.4', title: 'Title 4', photo: shape },
      { name: 'Member 3.5', title: 'Title 5', photo: shape },
      { name: 'Member 3.6', title: 'Title 6', photo: shape },
    ],
  },
  {
    id: 4,
    name: 'Category 4',
    members: [
      { name: 'Member 4.1', title: 'Title 1', photo: shape },
      { name: 'Member 4.2', title: 'Title 2', photo: shape },
      { name: 'Member 4.3', title: 'Title 3', photo: shape },
      { name: 'Member 4.4', title: 'Title 4', photo: shape },
      { name: 'Member 4.5', title: 'Title 5', photo: shape },
      { name: 'Member 4.6', title: 'Title 6', photo: shape },
    ],
  },
  {
    id: 5,
    name: 'Category 5',
    members: [
      { name: 'Member 5.1', title: 'Title 1', photo: shape },
      { name: 'Member 5.2', title: 'Title 2', photo: shape },
      { name: 'Member 5.3', title: 'Title 3', photo: shape },
      { name: 'Member 5.4', title: 'Title 4', photo: shape },
      { name: 'Member 5.5', title: 'Title 5', photo: shape },
      { name: 'Member 5.6', title: 'Title 6', photo: shape },
    ],
  },
];

const About = () => {
  const styles = aboutStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handlePreviousChange = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? categories.length : prevPage - 1));
  };  

  const handleNextChange = () => {
    setCurrentPage((prevPage) => (prevPage === categories.length ? 1 : prevPage + 1));
  };  

  return (
    <div style={{position: 'relative'}}>
      <Box sx={styles.root}>
        <Box>
          <img src={bgTop} alt="bg1" style={styles.bg1} />
          <img src={bgBtm} alt="bg2" style={styles.bg2} />
        </Box>
      <Container maxWidth="xl" sx={styles.body}>
        <Grid container xs={10} sm={12} md={12} >
          <Grid item xs={6.5} sm={3.5} md={3} >
            <img 
              src={blankPhoto} 
              alt="img"
              style={{ width: '95%', marginLeft: '58%', marginTop: '45%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
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
              textAlign: 'center',
            }}>
            WHAT DO WE DO?
          </Box>
        </Grid>
        
        <Grid container >
          <Grid item xs={12} sm={7} md={6}>
            <img 
              src={books} 
              alt="img"
              style={{ width: '53%', marginLeft: '23%', marginTop: '20%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={5} md={3}>
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

          <Grid item xs={12} sm={7} md={7}>
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
          <Grid item xs={8} sm={4.5} md={3.2} >
            <img 
              src={lightBulb} 
              alt="img"
              style={{ width: '60%', marginLeft: '20%', marginTop: '45%', height: 'auto'}}
            />
          </Grid>

          <Grid item xs={11} sm={5} md={6}>
            <img 
              src={blankSquare} 
              alt="img"
              style={{ width: '60%', marginLeft: '23%', marginTop: '35%', height: 'auto' }}
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
              <Button size="large" text="See opportunities ->" onClick={() => navigate('/opportunities')} />
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
          <Grid item xs={11} sm={7} md={6}>
            <img 
              src={blankSquare} 
              alt="img"
              style={{ width: '55%', marginLeft: '18%', marginTop: '28%', height: 'auto' }}
            />
          </Grid>
          <Box sx={{ ...styles.button2}}>
              <Button size="large" text="Become a member ->" onClick={() => navigate('/membership')} />
          </Box>
        </Grid>


        <Grid item xs={12} sm={4.5} md={5}>
          <Box
            sx={{
              ...styles.mainTitleBottom,
              textAlign: 'center'
            }}>
            MEET THE TEAM!
          </Box>
        </Grid>

        <Grid container sx={{ marginTop: '5%', display: 'flex', justifyContent: 'center' }}>
          {categories.map((category) => (
            <Grid item md={1.5} key={category.id}>
              <Button size="large" text={category.name} onClick={() => setCurrentPage(category.id)} />
            </Grid>
          ))}
        </Grid>

      
        <Grid container sx={{ marginTop: '1%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid container item xs={12} justifyContent="center">
            {categories[currentPage - 1].members.slice(0, 3).map((member, index) => (
              <Grid item md={3} key={index}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={member.photo} alt="img" style={{ width: 200, height: 300 }} />
                </div>
                <h3 style={{ color: 'white', textAlign: 'center' }}>{member.name}</h3>
                <h5 style={{ color: 'white', textAlign: 'center' }}>{member.title}</h5>
              </Grid>
            ))}
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            {categories[currentPage - 1].members.slice(3, 6).map((member, index) => (
              <Grid item md={3} key={index}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={member.photo} alt="img" style={{ width: 200, height: 300 }} />
                </div>
                <h3 style={{ color: 'white', textAlign: 'center' }}>{member.name}</h3>
                <h5 style={{ color: 'white', textAlign: 'center' }}>{member.title}</h5>
              </Grid>
            ))}
          </Grid>
          <Grid container item xs={12} sm={11} md={12} justifyContent="center" sx={{ marginTop: { xs: '8%', sm: '-100%', md: '-50%' }}}>
            <Grid container item xs = {5} sm={20} md={10} justifyContent="space-between" sx={{ alignItems: 'center' }}>
              <Grid item>
                <button
                  style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                  onClick={handlePreviousChange}>
                  <img src={previous} alt="img" style={{ width: 30, height: 30 }} />
                </button>
              </Grid>
              <Grid item>
                <button
                  style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                  onClick={handleNextChange}>
                  <img src={next} alt="img" style={{ width: 30, height: 30 }} />
                </button>
              </Grid>
            </Grid>
          </Grid>

        </Grid>


      </Container>
      </Box>
    </div>
  );
};

export default About;
