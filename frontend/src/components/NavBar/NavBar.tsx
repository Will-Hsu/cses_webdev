import React, { useEffect, useState } from 'react';
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
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import csesLogo from '../../images/logo.svg';
import MuiButton from '../Button/Button';
import { navBarStyles } from './styles';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const styles = navBarStyles();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar
        style={{ background: isScrolled ? 'black' : 'transparent', transition: 'background 0.3s' }}
      >
        <Toolbar>
          <Link to="/">
            <img src={csesLogo} alt="logo" style={{ margin: '20px' }} />
          </Link>
          <div style={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map(({ text, link }) => (
              <Button component={Link} to={link} sx={styles.button}>
                {text}
              </Button>
            ))}
            <MuiButton text="Login" size="small" isLogin={true} />
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)} color="inherit">
              {!isDrawerOpen && <MenuIcon sx={{ fontSize: '35px', margin: '10px' }} />}
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
            <CloseIcon sx={{ color: 'white', fontSize: '35px', margin: '10px 26px' }} />
          </ListItem>
          {navItems.map(({ text, link }) => (
            <ListItem
              button
              key={text}
              sx={{
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                },
              }}
              onClick={() => clickItem(link)}
            >
              <ListItemText
                primary={
                  <Typography align="center" sx={styles.button}>
                    {text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
          <ListItem
            key="Login"
            sx={{
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)',
              },
            }}
            component={Link}
            to={'/'}
          >
            <ListItemText
              primary={
                <Typography align="center" sx={styles.button}>
                  Login
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default NavBar;
