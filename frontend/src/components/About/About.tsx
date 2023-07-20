import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { Container, Box, Grid, createTheme, useMediaQuery } from '@mui/material';
import bgTop from '../../images/shape2.svg';
import bgBtm from '../../images/shape2.svg';
import shape from '../../images/shape.svg';
import previous from '../../images/previous.png';
import next from '../../images/next.png';
import { aboutStyles } from './styles';
import blankPhoto from '../../images/aboutpagephoto.png';
import books from '../../images/aboutbooks.png';
import lightBulb from '../../images/aboutlightbulb.png';



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
  const navigate = useNavigate();
  const theme = createTheme();
  const styles = aboutStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const topStartIndex = (currentPage - 1) * itemsPerPage;
  const topEndIndex = topStartIndex + itemsPerPage;
  const bottomStartIndex = topStartIndex + 3; //0 2 6 8
  const bottomEndIndex = topEndIndex + 3;
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));




  const handlePreviousChange = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? categories.length : prevPage - 1));
  };  

  const handleNextChange = () => {
    setCurrentPage((prevPage) => (prevPage === categories.length ? 1 : prevPage + 1));
  };  

  const peopleData = [
    {
      name: 'Goldie Chu',
      team: 'Design Team',
      image: shape,
    },
    {
      name: 'Goldie Chu 2',
      team: 'Design Team 2',
      image: shape,
    },
    {
      name: 'Goldie Chu 3',
      team: 'Design Team 3',
      image: shape,
    },
    {
      name: 'Goldie Chu 4',
      team: 'Design Team 4',
      image: shape,
    },
    {
      name: 'Goldie Chu 5',
      team: 'Design Team 5',
      image: shape,
    },
    {
      name: 'Goldie Chu 6',
      team: 'Design Team 6',
      image: shape,
    },
    {
      name: 'Goldie Chu 7',
      team: 'Design Team 7',
      image: shape,
    },
    {
      name: 'Goldie Chu 8',
      team: 'Design Team 8',
      image: shape,
    },
  ];

  const peopleCards = peopleData.map((person, index) => (
    <Grid item md={3}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'left',
        }}
      >
        <img src={person.image} alt="img" style={{ width: 200, height: 300 }} />
      </div>
      <h3 style={{ color: 'white', textAlign: 'center' }}>{person.name}</h3>
      <h5 style={{ color: 'white', textAlign: 'center' }}>{person.team}</h5>
    </Grid>
  ));

  return (
    <div style={{position: 'relative'}}>
      <Box sx={styles.root}>
        <Box>
          <img src={bgTop} alt="bg1" style={styles.bg1} />
          <img src={bgBtm} alt="bg2" style={styles.bg2} />
        </Box>
      <Container maxWidth="xl" sx={styles.body}>
        <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
          <Grid item sm={4.5} md={2.5}>
            <img src={blankPhoto} alt="img" />
          </Grid>
          <Grid item sm={6} md={4}>
            <Box
              sx={{
                color: 'white',
                textAlign: { md: 'left', sm: 'left', xs: 'center' },
                fontSize: '1em',
              }}
            >
              <h1>WHAT IS CSES?</h1>
            </Box>
            <p style={{ color: 'white' }}>
              CSES is the Computer Science and Engineering Society at UCSD that focuses on the
              professional development of CSE students and students interested in computing through
              various programs and career development events.
            </p>
          </Grid>
        </Grid>
        <h1 style={{ color: 'white', marginTop: '10%', textAlign: 'center' }}>WHAT DO WE DO?</h1>
        <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
          <Grid item sm={5} md={3}>
            <img src={books} alt="img" />
          </Grid>
          <Grid item sm={6} md={5}>
            <Box sx={{ color: 'white', textAlign: { md: 'left', sm: 'left', xs: 'center' } }}>
              <h1>Our History</h1>
            </Box>
            <p style={{ color: 'white' }}>
              CSES was the first CSE organization at UCSD starting nearly twenty years ago, and we
              have innovated over the years to stay relevant in serving the CSE community. We aim to
              continue innovating and improving, so we could continue to serve this community for
              another twenty years.
            </p>
          </Grid>
        </Grid>
        {!isSmallScreen && (
          <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
            <Grid item sm={6.5} md={5}>
              <Box sx={{ color: 'white', textAlign: { md: 'left', sm: 'left', xs: 'center' } }}>
                <h1>Our Future</h1>
              </Box>
              <p style={{ color: 'white' }}>
                Our mission statement is to help our members get professional opportunities while
                fostering a network of individuals. We do this through quarterly career fairs,
                programs for career development, and project opportunities to gain experience.
              </p>
            </Grid>
            <Grid item sm={4.5} md={3}>
              <img src={lightBulb} alt="img" style={{ marginLeft: '10%' }} />
            </Grid>
          </Grid>
        )}
        {isSmallScreen && (
          <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
            <Grid item sm={5} md={3}>
              <img src={lightBulb} alt="img" />
            </Grid>
            <Grid item sm={6} md={5}>
              <Box sx={{ color: 'white', textAlign: { md: 'left', sm: 'center', xs: 'center' } }}>
                <h1>Our Future</h1>
              </Box>
              <p style={{ color: 'white' }}>
                Our mission statement is to help our members get professional opportunities while
                fostering a network of individuals. We do this through quarterly career fairs,
                programs for career development, and project opportunities to gain experience.
              </p>
            </Grid>
          </Grid>
        )}
        <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
          <Grid item sm={5} md={3}>
            <img src={books} alt="img" />
          </Grid>
          <Grid item sm={6} md={5}>
            <Box
              sx={{
                color: 'white',
                textAlign: { md: 'left', sm: 'center', xs: 'center' },
                fontSize: { xs: '0.9em', sm: '1em', md: '1em' },
              }}
            >
              <h1>What's in store for me?</h1>
            </Box>
            <p style={{ color: 'white' }}>
              Check out amazing events we have planned as well as the opportunities we have for
              members.
            </p>
            <Box
              sx={{
                marginLeft: '-2%',
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'left', md: 'left' },
              }}
            >
              <Button
                size="large"
                text="See Opportunities ->"
                onClick={() => navigate('/opportunities')}
              />
            </Box>
          </Grid>
        </Grid>
        {!isSmallScreen && (
          <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
            <Grid item sm={6.5} md={5}>
              <Box sx={{ color: 'white', textAlign: { md: 'left', sm: 'center', xs: 'center' } }}>
                <h1>How do I join?</h1>
              </Box>
              <Box sx={{ color: 'white', textAlign: { md: 'left', sm: 'left', xs: 'center' } }}>
                <p style={{ color: 'white' }}>
                  Check out amazing events we have planned as well as the opportunities we have for
                  members.
                </p>
                <Box
                  sx={{
                    marginLeft: '-2%',
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'left', md: 'left' },
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
            <Grid item sm={4.5} md={3}>
              <img src={books} alt="img" style={{ marginLeft: '10%' }} />
            </Grid>
          </Grid>
        )}

        {isSmallScreen && (
          <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
            <Grid item sm={5} md={3}>
              <img src={lightBulb} alt="img" />
            </Grid>
            <Grid item sm={6} md={5}>
              <Box sx={{ color: 'white', textAlign: { md: 'left', sm: 'center', xs: 'center' } }}>
                <h1>How do I join?</h1>
              </Box>
              <p style={{ color: 'white' }}>
                Check out amazing events we have planned as well as the opportunities we have for
                members.
              </p>
              <Box
                sx={{
                  marginLeft: '-2%',
                  display: 'flex',
                  justifyContent: { xs: 'center', sm: 'left', md: 'left' },
                }}
              >
                <Button
                  size="large"
                  text="Become a Member ->"
                  onClick={() => navigate('/opportunities')}
                />
              </Box>
            </Grid>
          </Grid>
        )}

        <Grid
          container
          sx={{ marginTop: '0%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {peopleCards.slice(topStartIndex, topEndIndex)}
        </Grid>
        {!isSmallScreen && <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: {sm: '90%', md: '80%'},
            margin: '0 auto',
          }}
        >
    
          <div style={{ display: 'flex', justifyContent: 'start' }}>
            <button
              style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'white' }}
              onClick={handlePreviousChange}
            >
              <img src={previous} alt="img" style={{ width: 30, height: 30 }} />
            </button>
          </div>
          <div>
            <img
              src={next}
              alt="img"
              style={{ width: 30, height: 30, cursor: 'pointer' }}
              onClick={handleNextChange}
            />
          </div>
        </Box>}
        
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
          {peopleCards.slice(bottomStartIndex, bottomEndIndex)}
        </Grid>
        
        {isSmallScreen && <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '60%',
            margin: '0 auto',
          }}
        >
    
          <div style={{ display: 'flex', justifyContent: 'start' }}>
            <button
              style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'white' }}
              onClick={handlePreviousChange}
            >
              <img src={previous} alt="img" style={{ width: 30, height: 30 }} />
            </button>
          </div>
          <div>
            <img
              src={next}
              alt="img"
              style={{ width: 30, height: 30, cursor: 'pointer' }}
              onClick={handleNextChange}
            />
          </div>
        </Box>}
      </Container>
      </Box>
    </div>
  );
};

export default About;
