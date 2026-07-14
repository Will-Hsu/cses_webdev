import React from 'react';
import { Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import JoinUs from './components/JoinUs/JoinUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
      <NavBar />
      <JoinUs />
      <Footer />
    </Container>
  );
}

export default App;
