import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navItems = [
    { text: 'Home', icon: <MenuIcon /> },
    { text: 'About', icon: <MenuIcon /> },
    { text: 'Contact', icon: <MenuIcon /> },
  ];

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        anchor="top"
        open={isMobile ? isDrawerOpen : true}
        onClose={handleDrawerToggle}
      >
        <List>
          {navItems.map(({ text, icon }) => (
            <ListItem button key={text}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* Content goes here */}
    </div>
  );
};

export default NavBar;
