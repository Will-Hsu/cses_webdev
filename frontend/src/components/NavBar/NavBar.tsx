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
  Menu,
  MenuItem,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, ExpandMore } from '@mui/icons-material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import csesLogo from '../../images/logo.png';
import { navBarStyles } from './styles';
import { AuthContext } from '../../context/AuthContext';
import ProfileDropdown from './ProfileDropdown';
import { User } from '../../utils/types';
import axios from 'axios';

const COMMUNITY_ITEMS = [
  { text: 'Open-Source', link: '/opensourcecommunity' },
  { text: 'Innovate', link: '/innovatecommunity' },
  { text: 'Dev', link: '/devcommunity' },
];

const CONTACT_EMAIL = 'mailto:cses@ucsd.edu';

const NavBar = () => {
  const location = useLocation();
  const styles = navBarStyles();
  const navigate = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const [communitiesAnchor, setCommunitiesAnchor] = useState<null | HTMLElement>(null);

  const { user, isLoggedIn } = useContext(AuthContext);

  const navItems = [
    { text: 'Home', link: '/' },
    { text: 'Events', link: '/events' },
  ];

  const isCommunityRoute = COMMUNITY_ITEMS.some(({ link }) => location.pathname === link);

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
      <AppBar sx={styles.appBar} position="fixed" elevation={0}>
        <Toolbar>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src={csesLogo}
              alt="CSE Society"
              style={{ margin: 'clamp(20px, 4vw, 25px)', height: '44px' }}
            />
            <Typography sx={styles.logoText}>at UC San Diego</Typography>
          </Link>

          <div style={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map(({ text, link }) => (
              <Button
                key={text}
                component={Link}
                to={link}
                sx={{
                  ...styles.button,
                  ...(location.pathname === link ? styles.buttonActive : {}),
                }}
              >
                {text}
              </Button>
            ))}

            <Button
              endIcon={<ExpandMore />}
              onClick={(e) => setCommunitiesAnchor(e.currentTarget)}
              sx={{
                ...styles.button,
                ...(isCommunityRoute ? styles.buttonActive : {}),
              }}
            >
              Communities
            </Button>
            <Menu
              anchorEl={communitiesAnchor}
              open={Boolean(communitiesAnchor)}
              onClose={() => setCommunitiesAnchor(null)}
              sx={styles.menu}
            >
              {COMMUNITY_ITEMS.map(({ text, link }) => (
                <MenuItem
                  key={text}
                  sx={styles.menuItem}
                  onClick={() => {
                    setCommunitiesAnchor(null);
                    navigate(link);
                  }}
                >
                  {text}
                </MenuItem>
              ))}
            </Menu>

            <Button href={CONTACT_EMAIL} sx={styles.button}>
              Contact Us
            </Button>
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
      </AppBar>

      <Drawer anchor="top" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <List sx={styles.drawerList}>
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

          {COMMUNITY_ITEMS.map(({ text, link }) => (
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

          <ListItem
            button
            key="Contact Us"
            sx={styles.listitem}
            component="a"
            href={CONTACT_EMAIL}
            onClick={() => setIsDrawerOpen(false)}
          >
            <ListItemText
              primary={
                <Typography align="center" sx={styles.button}>
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
