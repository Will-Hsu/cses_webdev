import { Box, Button, Container, Grid, useMediaQuery } from '@mui/material';
import { joinUsStyles } from './styles';
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

const APPLY_URL = '#';

const STATS = [
  { number: '455+', label: 'members' },
  { number: '18+', label: 'annual events' },
  { number: '12+', label: 'annual projects' },
];

// Flat list: the grid reflows it per breakpoint, so adding or removing a
// sponsor needs no layout changes.
const SPONSORS = [
  { logo: ASLogo, name: 'Associated Students' },
  { logo: CSEDeptLogo, name: 'CSE Department' },
  { logo: BSLLogo, name: 'Big Strategy Lab' },
  { logo: RobloxLogo, name: 'Roblox' },
  { logo: PersonaLogo, name: 'Persona' },
  { logo: LovableLogo, name: 'Lovable' },
  { logo: EyePopAILogo, name: 'EyePop AI' },
  { logo: IGELogo, name: 'IGE' },
  { logo: LinuxLogo, name: 'Linux Foundation' },
  { logo: OSPOLogo, name: 'OSPO' },
  { logo: BasementLogo, name: 'Basement' },
];

// The design staggers the tiles: rows alternate three, two, three, two, with
// the short rows inset between the full ones. Deriving the rows from the list
// keeps that shape for any number of sponsors.
const ROW_PATTERN = [3, 2];

const chunkIntoRows = <T,>(items: T[]): T[][] => {
  const rows: T[][] = [];
  let index = 0;
  while (index < items.length) {
    const size = ROW_PATTERN[rows.length % ROW_PATTERN.length];
    rows.push(items.slice(index, index + size));
    index += size;
  }
  return rows;
};

const DECOR = [
  { src: chainGraphic, key: 'chain', position: 'decorChain' as const },
  { src: lightbulbGraphic, key: 'lightbulb', position: 'decorLightbulb' as const },
  { src: gearGraphic, key: 'gear', position: 'decorGear' as const },
];

const JoinUs = () => {
  const styles = joinUsStyles();
  // Below sm the stagger has no room to read; fall back to an even 2-up grid.
  const isStaggered = useMediaQuery('(min-width:600px)');
  const sponsorRows = isStaggered ? chunkIntoRows(SPONSORS) : [SPONSORS];
  const tilesPerRow = isStaggered ? ROW_PATTERN[0] : 2;

  return (
    <Box sx={styles.pageWrapper}>
      {DECOR.map(({ src, key, position }) => (
        <Box
          key={key}
          component="img"
          src={src}
          alt=""
          aria-hidden="true"
          sx={{ ...styles.decor, ...styles[position] }}
        />
      ))}

      <Container maxWidth="lg" sx={styles.container}>
        <Box component="h1" sx={{ ...styles.heading, m: 0 }}>
          Join us.
        </Box>
        <Box sx={styles.subtext}>Interested in joining our initiative? Apply below!</Box>
        <Button href={APPLY_URL} sx={styles.applyButton}>
          Apply
        </Button>

        <Box sx={styles.tagline}>We are UCSD&apos;s largest computing organization</Box>

        <Grid container spacing={3} justifyContent="center" sx={styles.statsGrid}>
          {STATS.map((stat) => (
            <Grid item xs={12} sm={4} key={stat.label}>
              <Box sx={styles.statBox}>
                <Box sx={styles.statNumber}>{stat.number}</Box>
                <Box sx={styles.statLabel}>{stat.label}</Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box component="h2" sx={{ ...styles.partnersHeading, m: 0 }}>
          Thank You to Our Current Partners
        </Box>

        <Box sx={styles.sponsorRows}>
          {sponsorRows.map((row, rowIndex) => (
            <Box key={rowIndex} sx={styles.sponsorRow}>
              {row.map((sponsor) => (
                <Box key={sponsor.name} sx={styles.sponsorTile(tilesPerRow)}>
                  <Box
                    component="img"
                    src={sponsor.logo}
                    alt={sponsor.name}
                    sx={styles.sponsorImg}
                  />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default JoinUs;
