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
import csesLogo from '../../images/logo.svg';
import MuiButton from '../Button/Button';
import { navBarStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import ProfileDropdown from './ProfileDropdown';

const NavBar = () => {
  const styles = navBarStyles();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  const navItems = [
    { text: 'About', link: '/about' },
    { text: 'Events', link: '/events' },
    { text: 'Opportunities', link: '/opportunities' },
    { text: 'Membership', link: '/membership' },
  ];

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
  return (
    <div>
      <AppBar
        style={{ background: isScrolled ? 'black' : 'transparent', transition: 'background 0.3s' }}
      >
        <Toolbar>
          <Link to="/">
            <img src={csesLogo} alt="logo" style={{ margin: '25px' }} />
          </Link>
          <div style={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map(({ text, link }) => (
              <Button key={text} component={Link} to={link} sx={styles.button}>
                {text}
              </Button>
            ))}
            {!isLoggedIn && (
              <MuiButton
                onClick={() => navigate('/login')}
                text="Login"
                size="large"
                isLogin={true}
              />
            )}
          </Box>
          {isLoggedIn && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  alt="profilepicture"
                  src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg"
                  sx={{ width: 60, height: 60, marginLeft: '1%' }}
                />
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
          {!isLoggedIn && (
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
