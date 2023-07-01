import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import EventBox from './components/Events/Event';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <EventBox />
      </Container>
    </BrowserRouter>
  );
}

export default App;
