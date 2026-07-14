import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import InstagramIcon from '../../images/instagram-icon.svg';
import LinkedInIcon from '../../images/linkedin-icon.svg';
import csesLogo from '../../images/footer-logo.png';

const socialLinks = [
  { logo: InstagramIcon, link: 'https://www.instagram.com/cses_ucsd/', alt: 'Instagram' },
  { logo: LinkedInIcon, link: 'https://www.linkedin.com/in/csesucsd/', alt: 'LinkedIn' },
];

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1a1e2e',
        padding: { xs: '2rem 1.5rem 1.5rem', md: '2.5rem 3rem 2rem' },
        color: 'white',
      }}
    >
      {/* Top row: logo left, social icons right */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 3,
        }}
      >
        {/* CSES Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src={csesLogo}
            alt="CSES Logo"
            sx={{
              height: { xs: '40px', md: '55px' },
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Social Icons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {socialLinks.map(({ logo, link, alt }) => (
            <Link
              key={alt}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& img': {
                  width: { xs: '28px', md: '32px' },
                  height: { xs: '28px', md: '32px' },
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                },
              }}
            >
              <img src={logo} alt={alt} />
            </Link>
          ))}
        </Box>
      </Box>

      {/* Copyright */}
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: { xs: '0.75rem', md: '0.875rem' },
          color: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        &copy; 2026 UC San Diego Computer Science and Engineering Society. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
