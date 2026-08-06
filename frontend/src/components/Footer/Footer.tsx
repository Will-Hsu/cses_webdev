import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import InstagramIcon from '../../images/instagram-icon.svg';
import LinkedInIcon from '../../images/linkedin-icon.svg';
import csesLogo from '../../images/cses-logo-white.png';

const socialLinks = [
  { logo: InstagramIcon, link: 'https://www.instagram.com/cses_ucsd/', alt: 'Instagram' },
  { logo: LinkedInIcon, link: 'https://www.linkedin.com/in/csesucsd/', alt: 'LinkedIn' },
];

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1A1A24',
        borderTop: '1px solid rgba(139, 92, 246, 0.2)',
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
              height: { xs: '48px', md: '66px' },
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
                  width: { xs: '32px', md: '40px' },
                  height: { xs: '32px', md: '40px' },
                  objectFit: 'contain',
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
          fontFamily: '"Space Mono", monospace',
          textAlign: 'center',
          fontSize: { xs: '0.75rem', md: '0.875rem' },
          color: '#9CA3AF',
        }}
      >
        &copy; 2026 UC San Diego Computer Science and Engineering Society. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
