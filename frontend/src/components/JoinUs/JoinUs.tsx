import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './JoinUs.css';
import chainGraphic from '../../images/joinus/chain.png';
import lightbulbGraphic from '../../images/joinus/lightbulb.png';
import gearGraphic from '../../images/joinus/gear.png';
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

// Matches the design's staggered 3-2-3(-3) sponsor grid.
const sponsorRows = [
  [
    { src: ASLogo, alt: 'Associated Students' },
    { src: CSEDeptLogo, alt: 'CSE Department' },
    { src: BSLLogo, alt: 'Big Strategy Lab' },
  ],
  [
    { src: RobloxLogo, alt: 'Roblox' },
    { src: PersonaLogo, alt: 'Persona' },
  ],
  [
    { src: LovableLogo, alt: 'Lovable' },
    { src: EyePopAILogo, alt: 'EyePop AI' },
    { src: IGELogo, alt: 'IGE' },
  ],
  [
    { src: LinuxLogo, alt: 'Linux Foundation' },
    { src: OSPOLogo, alt: 'OSPO' },
    { src: BasementLogo, alt: 'Basement' },
  ],
];

const JoinUs = () => {
  return (
    <Box className="join-us-page">
      <Box className="join-us-canvas">
        <Box
          component="img"
          src={chainGraphic}
          alt=""
          className="join-us-decor join-us-decor-chain"
        />
        <Box
          component="img"
          src={lightbulbGraphic}
          alt=""
          className="join-us-decor join-us-decor-lightbulb"
        />
        <Box
          component="img"
          src={gearGraphic}
          alt=""
          className="join-us-decor join-us-decor-gear"
        />

        {/* Heading */}
        <Typography className="join-us-heading">Join us.</Typography>

        {/* Subtext */}
        <Typography className="join-us-subtext">
          Interested in joining our initiative? Apply below!
        </Typography>

        {/* Apply Button */}
        <Button href="#" className="join-us-apply-button">
          Apply
        </Button>

        {/* Organization tagline */}
        <Typography className="join-us-tagline">
          We are UCSD's largest computing organization
        </Typography>

        {/* Stats */}
        <Box className="join-us-stats">
          {stats.map((stat, i) => (
            <Box key={stat.label} className={`join-us-stat-box join-us-stat-box--${i}`}>
              <Typography className="join-us-stat-number">{stat.number}</Typography>
              <Typography className="join-us-stat-label">{stat.label}</Typography>
            </Box>
          ))}
        </Box>

        {/* Partners Section */}
        <Typography className="join-us-partners-heading">
          Thank You to Our Current Partners
        </Typography>

        {/* Sponsor Logos Grid (staggered 3-2-3-3 rows, matching design) */}
        <Box className="join-us-sponsor-rows">
          {sponsorRows.map((row, rowIndex) => (
            <Box key={rowIndex} className={`join-us-sponsor-row join-us-sponsor-row--${rowIndex}`}>
              {row.map((sponsor, boxIndex) => (
                <Box
                  key={sponsor.alt}
                  className={`join-us-sponsor-box join-us-sponsor-box--${boxIndex}`}
                >
                  <Box
                    component="img"
                    src={sponsor.src}
                    alt={sponsor.alt}
                    className="join-us-sponsor-img"
                  />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default JoinUs;
