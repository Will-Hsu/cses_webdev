import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Communities from './components/Communities/Communities';
import JoinUs from './components/JoinUs/JoinUs';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
