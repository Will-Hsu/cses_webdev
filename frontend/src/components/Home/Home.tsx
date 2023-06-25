import React from 'react';
import Button from '../Button/Button';
import { Container, Grow } from '@mui/material';
import background from '../../images/home_bg.svg';
const Home = () => {
  return (
    <Grow in>
      <Container maxWidth="xl">
        <img src={background} alt="bg" style={{}} />
        <Button size="medium" text="See All Events ->" onClick={() => console.log('click')} />
      </Container>
    </Grow>
  );
};

export default Home;
