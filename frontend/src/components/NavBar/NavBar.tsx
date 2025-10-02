import React, { useContext, useEffect, useState } from 'react';
import {
  AppBar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Button,
  Toolbar,
  Avatar,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import csesLogo from '../../images/CSES-logo.png';
import MuiButton from '../Button/Button';
import { navBarStyles } from './styles';
import { AuthContext } from '../../context/AuthContext';
import ProfileDropdown from './ProfileDropdown';
import { User } from '../../utils/types';
import axios from 'axios';

const NavBar = () => {
  const location = useLocation();
  const styles = navBarStyles();
  const navigate = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);

  const { user, isLoggedIn } = useContext(AuthContext);

  const navItems = [
    { text: 'About', link: '/about' },
    { text: 'Events', link: '/events' },
    { text: 'Sponsors', link: '/sponsorships' },
    { text: 'Initiatives', link: '/initiatives' },
  ];

  const clickItem = (link: string) => {
    setIsDrawerOpen(false);
    navigate(link);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (isLoggedIn) {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/api/v1/users/${user.email}`,
          );
          setUserData(response.data);
        }
      } catch (error) {
        console.log('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, [isLoggedIn, user.email, navigate]);

  return (
    <div>
      <AppBar sx={{ backgroundColor: '#030E5D' }} position="fixed" elevation={0}>
        <Toolbar>
          <Link to="/">
            <img
              src={csesLogo}
              alt="logo"
              style={{ margin: 'clamp(20px, 4vw, 25px)', height: '55px' }}
            />
          </Link>

          <div style={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map(({ text, link }) => (
              <Button key={text} component={Link} to={link} sx={styles.button}>
                {text}
              </Button>
            ))}

            {/* Gradient Join Us Button */}
            {/* {!isLoggedIn && location.pathname !== '/login' && (
              <Box
                onClick={() => navigate('/login')}
                sx={{
                  cursor: 'pointer',
                  background: 'linear-gradient(to left, #725DEF, #63CDDB, #EBB211)',
                  padding: '2px',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  marginLeft: '12px',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#030E5D',
                    borderRadius: '999px',
                    padding: '6px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '18px',
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                  >
                    Join Us
                  </Typography>
                </Box>
              </Box>
            )} */}
          </Box>

          {isLoggedIn && userData && (
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
              <Link to="/membership">
                <Avatar
                  alt="User"
                  src={userData.profilePicture}
                  sx={{ width: 60, height: 60, marginLeft: '1%' }}
                />
              </Link>
              <ProfileDropdown />
            </div>
          )}

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)} color="inherit">
              {!isDrawerOpen && <MenuIcon sx={styles.menuicon} />}
            </IconButton>
          </Box>
        </Toolbar>
        <Box
          sx={{
            height: '4px',
            background: 'linear-gradient(to right, #725DEF, #63CDDB, #EBB211)',
          }}
        />
      </AppBar>


      <Drawer anchor="top" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <List sx={{ background: '#030E5D' }}>
          <ListItem
            button
            sx={{ justifyContent: 'flex-end' }}
            onClick={() => setIsDrawerOpen(false)}
          >
            <CloseIcon sx={styles.closeicon} />
          </ListItem>

          {navItems.map(({ text, link }) => (
            <ListItem button key={text} sx={styles.listitem} onClick={() => clickItem(link)}>
              <ListItemText
                primary={
                  <Typography align="center" sx={styles.button}>
                    {text}
                  </Typography>
                }
              />
            </ListItem>
          ))}

          {/* {!isLoggedIn && location.pathname !== '/login' && (
            <ListItem button key="Login" sx={styles.listitem} onClick={() => clickItem('/login')}>
              <ListItemText
                primary={
                  <Typography align="center" sx={styles.button}>
                    Join Us
                  </Typography>
                }
              />
            </ListItem>
          )} */}
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
