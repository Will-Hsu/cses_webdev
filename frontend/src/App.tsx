import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
