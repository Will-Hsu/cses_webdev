import React, { useState } from 'react';
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
import csesLogo from '../../images/cses-logo-white.png';

const navItems = [
  { text: 'Home', link: '#' },
  { text: 'Events', link: '#' },
  { text: 'Communities', link: '#' },
];

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ backgroundColor: 'rgba(26, 26, 36, 0.6)', backdropFilter: 'blur(8px)' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo + text */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={csesLogo}
              alt="CSES logo"
              style={{ height: '45px', margin: '12px 0' }}
            />
            <Typography
              sx={{
                color: 'white',
                fontFamily: '"Space Mono", monospace',
                fontSize: '1.1rem',
                ml: 1.5,
                display: { xs: 'none', sm: 'block' },
              }}
            >
              at UC San Diego
            </Typography>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navItems.map(({ text, link }) => (
              <Button
                key={text}
                href={link}
                sx={{
                  color: 'white',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                }}
              >
                {text}
              </Button>
            ))}
            <Button
              href="#"
              sx={{
                backgroundColor: '#8B5CF6',
                color: 'white',
                fontFamily: '"Space Mono", monospace',
                fontSize: '1rem',
                textTransform: 'none',
                borderRadius: '24px',
                px: 3,
                py: 0.75,
                ml: 1,
                '&:hover': {
                  backgroundColor: '#7c4fe0',
                },
              }}
            >
              Contact Us
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={() => setIsDrawerOpen(true)} color="inherit">
              <MenuIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="top" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <List sx={{ background: '#4a4a5c', minHeight: '100vh' }}>
          <ListItem
            button
            sx={{ justifyContent: 'flex-end' }}
            onClick={() => setIsDrawerOpen(false)}
          >
            <CloseIcon sx={{ color: 'white', fontSize: '2rem' }} />
          </ListItem>
          {navItems.map(({ text, link }) => (
            <ListItem button key={text} onClick={() => setIsDrawerOpen(false)}>
              <ListItemText
                primary={
                  <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', fontFamily: '"Space Mono", monospace' }}>
                    {text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
          <ListItem button onClick={() => setIsDrawerOpen(false)}>
            <ListItemText
              primary={
                <Typography sx={{ color: '#8B5CF6', textAlign: 'center', fontSize: '1.25rem', fontWeight: 600, fontFamily: '"Space Mono", monospace' }}>
                  Contact Us
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
