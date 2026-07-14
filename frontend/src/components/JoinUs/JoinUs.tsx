import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ASLogo from '../../images/sponsors/AS_Logo.png';
import CSEDeptLogo from '../../images/sponsors/CSEDept_Logo.png';
import BasementLogo from '../../images/sponsors/Basement_Logo.jpeg';
import EyePopAILogo from '../../images/sponsors/EyePopAI_Logo.png';
import BSLLogo from '../../images/sponsors/BSL.png';
import IGELogo from '../../images/sponsors/IGE_Logo.png';
import LinuxLogo from '../../images/sponsors/Linux_Logo.png';
import LovableLogo from '../../images/sponsors/Lovable_Logo.png';
import OSPOLogo from '../../images/sponsors/OSPO_Logo.png';
import PersonaLogo from '../../images/sponsors/Persona_Logo.png';
import RobloxLogo from '../../images/sponsors/Roblox_Logo.png';

const stats = [
  { number: '455+', label: 'members' },
  { number: '18+', label: 'annual\nevents' },
  { number: '12+', label: 'annual\nprojects' },
];

const sponsors = [
  { src: ASLogo, alt: 'Associated Students' },
  { src: CSEDeptLogo, alt: 'CSE Department' },
  { src: BSLLogo, alt: 'Big Strategy Lab' },
  { src: RobloxLogo, alt: 'Roblox' },
  { src: PersonaLogo, alt: 'Persona' },
  { src: LovableLogo, alt: 'Lovable' },
  { src: EyePopAILogo, alt: 'EyePop AI' },
  { src: IGELogo, alt: 'IGE' },
  { src: LinuxLogo, alt: 'Linux Foundation' },
  { src: OSPOLogo, alt: 'OSPO' },
  { src: BasementLogo, alt: 'Basement' },
];

const JoinUs = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#0a0e1a',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: '140px', md: '160px' },
        pb: 8,
        px: 3,
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontFamily: '"Space Mono", monospace',
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          fontWeight: 400,
          mb: 3,
        }}
      >
        Join us.
      </Typography>

      {/* Subtext */}
      <Typography
        sx={{
          fontFamily: '"Space Mono", monospace',
          fontSize: { xs: '1rem', md: '1.25rem' },
          textAlign: 'center',
          maxWidth: '500px',
          mb: 5,
          lineHeight: 1.6,
        }}
      >
        Interested in joining our initiative? Apply below!
      </Typography>

      {/* Apply Button */}
      <Box
        sx={{
          border: '2px solid #725DEF',
          borderRadius: '8px',
          mb: 6,
        }}
      >
        <Button
          href="#"
          sx={{
            color: 'white',
            fontFamily: '"Space Mono", monospace',
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            fontWeight: 700,
            px: 6,
            py: 1.5,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'rgba(114, 93, 239, 0.1)',
            },
          }}
        >
          Apply
        </Button>
      </Box>

      {/* Organization tagline */}
      <Typography
        sx={{
          fontFamily: '"Space Mono", monospace',
          fontSize: { xs: '1rem', md: '1.25rem' },
          textAlign: 'center',
          mb: 4,
        }}
      >
        We are UCSD's largest computing organization
      </Typography>

      {/* Stats */}
      <Box
        sx={{
          display: 'flex',
          gap: { xs: 2, md: 4 },
          mb: 8,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {stats.map((stat) => (
          <Box
            key={stat.label}
            sx={{
              border: '2px solid #725DEF',
              borderRadius: '12px',
              px: { xs: 4, md: 6 },
              py: { xs: 3, md: 4 },
              textAlign: 'center',
              minWidth: { xs: '140px', md: '180px' },
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Space Mono", monospace',
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 1,
              }}
            >
              {stat.number}
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Space Mono", monospace',
                fontSize: { xs: '0.9rem', md: '1.1rem' },
                whiteSpace: 'pre-line',
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Partners Section */}
      <Typography
        sx={{
          fontFamily: '"Space Mono", monospace',
          fontSize: { xs: '1.5rem', md: '2.5rem' },
          fontWeight: 400,
          textAlign: 'center',
          mb: 6,
        }}
      >
        Thank You to Our Current Partners
      </Typography>

      {/* Sponsor Logos Grid */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
          maxWidth: '800px',
        }}
      >
        {sponsors.map((sponsor) => (
          <Box
            key={sponsor.alt}
            sx={{
              width: { xs: '120px', md: '180px' },
              height: { xs: '90px', md: '120px' },
              backgroundColor: '#d9d9d9',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src={sponsor.src}
              alt={sponsor.alt}
              sx={{
                maxWidth: '85%',
                maxHeight: '85%',
                objectFit: 'contain',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default JoinUs;
