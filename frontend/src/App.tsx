import React, { useContext, useEffect, useState } from 'react';
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
import { User } from './utils/types';
import axios from 'axios';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user, isLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState<User | null>(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (isLoggedIn === true) {
          const response = await axios.get(`http://127.0.0.1:5000/api/v1/users/${user.email}`);
          setUserData(response.data);
        }
      } catch (error) {
        console.log('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, [isLoggedIn, user.email]);
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
          {
            <Route
              path="/editprofile"
              element={
                userData && (
                  <EditForm
                    name={userData.name}
                    email={userData.email}
                    major={userData.major}
                    expectedGraduateYear={userData.expectedGraduationYear}
                  />
                )
              }
            />
          }
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
