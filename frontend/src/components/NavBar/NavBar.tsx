import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(26, 26, 36, 0.6)',
          backdropFilter: 'blur(8px)',
          borderBottom: '2px solid rgba(139, 92, 246, 0.2)',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            height: { xs: 70, md: 105 },
            minHeight: { xs: 70, md: 105 },
            maxWidth: 1109,
            mx: 'auto',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: { xs: 2, md: '28px' },
          }}
        >
          {/* Logo + text */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={csesLogo}
              alt="CSES logo"
              style={{ height: '45px' }}
            />
            <Typography
              sx={{
                color: 'white',
                fontFamily: '"Space Mono", monospace',
                fontSize: '1.1rem',
                ml: '27px',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              at UC San Diego
            </Typography>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {/* Home/Events/Communities are placeholders for now (owned by
                another dev) — visible but intentionally not linked. */}
            <Button
              disableRipple
              sx={{
                color: 'white',
                fontFamily: '"Space Mono", monospace',
                fontSize: '1rem',
                textTransform: 'none',
                mr: '37px',
                cursor: 'default',
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              Home
            </Button>
            <Button
              disableRipple
              sx={{
                color: 'white',
                fontFamily: '"Space Mono", monospace',
                fontSize: '1rem',
                textTransform: 'none',
                mr: '30px',
                cursor: 'default',
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              Events
            </Button>
            <Button
              disableRipple
              sx={{
                color: 'white',
                fontFamily: '"Space Mono", monospace',
                fontSize: '1rem',
                textTransform: 'none',
                mr: '19px',
                cursor: 'default',
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              Communities
            </Button>
            <Button
              component={RouterLink}
              to="/join-us"
              sx={{
                backgroundColor: '#8B5CF6',
                color: 'white',
                fontFamily: '"Space Mono", monospace',
                fontSize: '1rem',
                textTransform: 'none',
                borderRadius: '10px',
                width: '136px',
                height: '40px',
                '&:hover': {
                  backgroundColor: '#7c4fe0',
                },
              }}
            >
              Join Us
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
          {/* Home/Events/Communities are placeholders for now (owned by
              another dev) — visible but intentionally not linked. */}
          {['Home', 'Events', 'Communities'].map((text) => (
            <ListItem key={text}>
              <ListItemText
                primary={
                  <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', fontFamily: '"Space Mono", monospace' }}>
                    {text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
          <ListItem
            button
            component={RouterLink}
            to="/join-us"
            onClick={() => setIsDrawerOpen(false)}
          >
            <ListItemText
              primary={
                <Typography sx={{ color: '#8B5CF6', textAlign: 'center', fontSize: '1.25rem', fontWeight: 600, fontFamily: '"Space Mono", monospace' }}>
                  Join Us
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
