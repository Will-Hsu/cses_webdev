import React from 'react';
import Button from '../Button/Button';
import { Container } from '@mui/material';
import background from '../../images/shape.svg';
import { homeStyles } from './styles';

const Home = () => {
  const styles = homeStyles();
  return (
    <div style={{ position: 'relative' }}>
      <img src={background} alt="bg" style={styles.bg} />
      <Container maxWidth="xl" style={{ position: 'absolute', top: '93px' }}>
        <div style={{ color: 'white' }}>TODO</div>
        <Button size="medium" text="See All Events ->" onClick={() => console.log('click')} />
      </Container>
    </div>
  );
};

export default Home;
