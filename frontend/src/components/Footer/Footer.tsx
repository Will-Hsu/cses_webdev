import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import InstagramIcon from '../../images/instagram-icon.svg';
import LinkedInIcon from '../../images/linkedin-icon.svg';
import csesLogo from '../../images/logo.png';
import { colors, fonts } from '../../theme';

const links = [
  { logo: InstagramIcon, link: 'https://www.instagram.com/cses_ucsd/', label: 'Instagram' },
  { logo: LinkedInIcon, link: 'https://www.linkedin.com/in/csesucsd/', label: 'LinkedIn' },
];

const COPYRIGHT = '© 2026 UC San Diego Computer Science and Engineering Society. All rights reserved.';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: colors.background,
        borderTop: `1px solid ${colors.border}`,
        padding: { xs: '1rem 2.5rem 1.5rem', md: '1.25rem 2.5rem 1.5rem' },
        color: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src={csesLogo}
          alt="CSES logo"
          sx={{
            height: { xs: '2.5rem', md: '3rem' },
            maxWidth: '100%',
            objectFit: 'contain',
          }}
        />

        {/* Social Icons */}
        <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 } }}>
          {links.map(({ logo, link, label }) => (
            <Link
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-block',
                '& img': {
                  width: { xs: '1.75rem', md: '2rem' },
                  height: { xs: '1.75rem', md: '2rem' },
                  objectFit: 'contain',
                },
              }}
            >
              <img src={logo} alt={label} />
            </Link>
          ))}
        </Box>
      </Box>

      <Typography
        sx={{
          fontFamily: fonts.body,
          fontSize: '0.8rem',
          color: colors.textSecondary,
          textAlign: 'center',
          mt: 2,
        }}
      >
        {COPYRIGHT}
      </Typography>
    </Box>
  );
};

export default Footer;
