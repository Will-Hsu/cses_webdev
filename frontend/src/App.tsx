import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import ScrollToTop from './utils/scrollToTop';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Events from './components/Events/Events';
import Opportunities from './components/Opportunities/Opportunities';
import Membership from './components/Membership/Membership';
import Login from './components/Login/Login';
import EditForm from './components/Login/EditProfile';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editprofile" element={<EditForm />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
