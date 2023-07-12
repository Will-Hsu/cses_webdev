import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import Button from '../Button/Button';
import bgTop from '../../images/shape2.svg';
import bgBtm from '../../images/shape2.svg';
import desktop from '../../images/desktop.png';
import shape from '../../images/shape.svg';
import previous from '../../images/previous.png';
import next from '../../images/next.png';
import { aboutStyles } from './styles';

const About = () => {
  const styles = aboutStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  //const endIndex = startIndex + itemsPerPage;

  const handlePreviousChange = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextChange = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      <img src={bgTop} alt="bg1" style={styles.bg1} />
      <img src={bgBtm} alt="bg2" style={styles.bg2} />
      <Container maxWidth="xl" sx={styles.body}>
        <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
          <Grid item md={4}>
            <img src={desktop} alt="img" style={{ width: 400, height: 400 }} />
          </Grid>
          <Grid item md={4}>
            <h1 style={{ color: 'white' }}>What is CSES?</h1>
            <p style={{ color: 'white' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </Grid>
        </Grid>
        <h1 style={{ color: 'white', marginTop: '10%', textAlign: 'center' }}>WHAT DO WE DO?</h1>
        <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
          <Grid item md={4}>
            <img src={desktop} alt="img" style={{ width: 400, height: 400 }} />
          </Grid>
          <Grid item md={4}>
            <h1 style={{ color: 'white' }}>What is CSES?</h1>
            <p style={{ color: 'white' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
          <Grid item md={4}>
            <h1 style={{ color: 'white' }}>What is CSES?</h1>
            <p style={{ color: 'white' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </Grid>
          <Grid item md={4}>
            <img src={desktop} alt="img" style={{ width: 400, height: 400, marginLeft: '10%' }} />
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
          <Grid item md={4}>
            <img src={desktop} alt="img" style={{ width: 400, height: 400 }} />
          </Grid>
          <Grid item md={4}>
            <h1 style={{ color: 'white' }}>What is CSES?</h1>
            <p style={{ color: 'white' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
          <Grid item md={4}>
            <h1 style={{ color: 'white' }}>What is CSES?</h1>
            <p style={{ color: 'white' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </Grid>
          <Grid item md={4}>
            <img src={desktop} alt="img" style={{ width: 400, height: 400, marginLeft: '10%' }} />
          </Grid>
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
    </div>
  );
};

export default About;
