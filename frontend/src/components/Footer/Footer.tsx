import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import InstagramIcon from '../../images/instagram-icon.svg';
import FacebookIcon from '../../images/facebook-icon.svg';
import LinkedInIcon from '../../images/linkedin-icon.svg';
import DiscordIcon from '../../images/discord-icon.svg';
import csesLogo from '../../images/footer-logo.png';

const links = [
  { logo: InstagramIcon, link: 'https://www.instagram.com/cses_ucsd/' },
  { logo: DiscordIcon, link: 'https://discord.gg/UkdACyy2h8' },
  { logo: FacebookIcon, link: 'https://www.facebook.com/csesucsd' },
  { logo: LinkedInIcon, link: 'https://www.linkedin.com/in/csesucsd/' },
];

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1F3A7E',
        padding: { xs: '0.5rem 2.5rem 1.25rem', md: '1.25rem 2.5rem 1.25rem' },
        color: 'white',
      }}
    >
      {/* Desktop Layout */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src={csesLogo}
            alt="logo"
            sx={{
              height: '3.75rem', // 60px equivalent
              maxWidth: '100%',
              mr: 1.25, // 10px
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Center Contact Info */}
        <Typography sx={{ fontSize: '1.125rem', fontStyle: 'italic' }}>
          For all inquiries, contact{' '}
          <Link href="mailto:cses@ucsd.edu" color="inherit">
            cses@ucsd.edu
          </Link>
          .
        </Typography>

        {/* Social Icons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {links.map(({ logo, link }, idx) => (
            <Link
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-block',
                '& img': {
                  width: '2rem', // 32px
                  height: '2rem',
                  objectFit: 'contain',
                },
              }}
            >
              <img src={logo} alt="social" />
            </Link>
          ))}
        </Box>
      </Box>

      {/* Mobile Layout */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          pt: 2,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src={csesLogo}
            alt="logo"
            sx={{
              height: '3.125rem', // 50px equivalent
              maxWidth: '100%',
              mr: 1.25, // 10px
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Social Icons */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {links.map(({ logo, link }, idx) => (
            <Link
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-block',
                '& img': {
                  width: '1.75rem', // 28px
                  height: '1.75rem',
                  objectFit: 'contain',
                },
              }}
            >
              <img src={logo} alt="social" />
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
