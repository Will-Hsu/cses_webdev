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
import { Link } from 'react-router-dom';
import csesLogo from '../../images/logo.png';
import MuiButton from '../Button/Button';
import { navBarStyles } from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isLoggedIn } = useContext(AuthContext);
  const navItems = [
    { text: 'About', link: '/about' },
    { text: 'Events', link: '/events' },
    { text: 'Opportunities', link: '/opportunities' },
    
  ];
  //{ text: 'Membership', link: '/membership' },

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  const clickItem = (link: string) => {
    setIsDrawerOpen(false);
    navigate(link);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <AppBar
        style={{ background: isScrolled ? 'black' : 'transparent', transition: 'background 0.3s' }}
      >
        <Toolbar>
          <Link to="/">
            <img
              src={csesLogo}
              alt="logo"
              style={{ margin: 'clamp(20px, 4vw, 25px)', height: '45px' }}
            />
          </Link>
          <div style={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map(({ text, link }) => (
              <Button key={text} component={Link} to={link} sx={styles.button}>
                {text}
              </Button>
            ))}
            {!isLoggedIn && location.pathname !== '/login' && (
              <MuiButton
                onClick={() => navigate('/login')}
                text="Login"
                size="large"
                isLogin={true}
              />
            )}
          </Box>
          {isLoggedIn && userData && (
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
              <Link to="/membership">
                <Avatar
                  alt="Remy Sharp"
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
      </AppBar>
      <Drawer anchor="top" open={isDrawerOpen}>
        <List sx={{ background: 'black' }}>
          <ListItem
            button
            sx={{ justifyContent: 'flex-end' }}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
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
          {!isLoggedIn && location.pathname !== '/login' && (
            <ListItem button key="Login" sx={styles.listitem} onClick={() => clickItem('/login')}>
              <ListItemText
                primary={
                  <Typography align="center" sx={styles.button}>
                    Login
                  </Typography>
                }
              />
            </ListItem>
          )}
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
