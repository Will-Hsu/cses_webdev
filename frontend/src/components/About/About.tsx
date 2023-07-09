import React from 'react';
import { Container } from '@mui/material';
import bgTop from '../../images/shape2.svg';
import bgBtm from '../../images/shape2.svg';
import { aboutStyles } from './styles';

const About = () => {
  const styles = aboutStyles();
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <img src={bgTop} alt="bg1" style={styles.bg1} />
      <img src={bgBtm} alt="bg2" style={styles.bg2} />
      <Container maxWidth="xl" sx={styles.body}></Container>
    </div>
  );
};

export default About;
