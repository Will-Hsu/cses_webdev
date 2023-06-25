import React, { useEffect, useState } from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import csesLogo from '../../images/logo.svg';
import MuiButton from '../Button/Button';
import { navBarStyles } from './styles';

const NavBar = () => {
  const styles = navBarStyles();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      style={{ background: isScrolled ? 'black' : 'transparent', transition: 'background 0.3s' }}
    >
      <Toolbar>
        <Link to="/">
          <img src={csesLogo} alt="logo" style={{ margin: '20px', marginRight: '10px' }} />
        </Link>
        <div style={{ flexGrow: 1 }} />
        <Button component={Link} to="/about" sx={styles.button}>
          About
        </Button>
        <Button component={Link} to="/events" sx={styles.button}>
          Events
        </Button>
        <Button component={Link} to="/opportunities" sx={styles.button}>
          Opportunities
        </Button>
        <Button component={Link} to="/members" sx={styles.button}>
          Members
        </Button>
        <MuiButton text="Login" size="small" />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
