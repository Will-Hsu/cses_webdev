import React from 'react';
import Button from '../Button/Button';
import { Container } from '@mui/material';
import background from '../../images/home_bg.svg';
const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img src={background} alt="bg" style={{ width: '100%' }} />
      <Container maxWidth="xl" style={{ position: 'absolute', top: '83px' }}>
        <div style={{ color: 'white' }}>TODO</div>
        <Button size="medium" text="See All Events ->" onClick={() => console.log('click')} />
      </Container>
    </div>
  );
};

export default Home;
