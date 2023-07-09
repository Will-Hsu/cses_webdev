import React from 'react';
import { Container } from '@mui/material';
import bg from '../../images/shape2.svg';
import { opportunitiesStyles } from './styles';

const Opportunities = () => {
  const styles = opportunitiesStyles();
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <img src={bg} alt="bg1" style={styles.bg} />
      <Container maxWidth="xl" sx={styles.body}></Container>
    </div>
  );
};

export default Opportunities;
