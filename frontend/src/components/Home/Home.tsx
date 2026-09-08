import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { homeStyles } from './styles';
import { colors } from '../../theme';
import SegmentedTabs from '../common/SegmentedTabs';
import { TEAM_MEMBERS } from './teamData';
import DevLogo from '../../images/ourCommunitiesImages/DevLogo.png';
import InnovateLogo from '../../images/ourCommunitiesImages/InnovateLogo.png';
import OpenSourceLogo from '../../images/ourCommunitiesImages/OpenSourceLogo.png';

const WHAT_IS_CSES_COPY = `For over 21 years, CSES has been at the forefront of undergraduate computing, growing the largest student-led tech community on campus. Through our Dev, OpenSource, and Innovate divisions, we give students the chance to build real-world software, contribute to open-source projects, and explore cutting-edge research. We celebrate curiosity, foster innovation, and empower the next generation of tech leaders.`;

const COMMUNITIES = [
  {
    name: 'Open-Source',
    logo: OpenSourceLogo,
    accent: colors.lightBlue,
    description: 'Contribute to real projects and learn collaborative development practices',
    path: '/opensourcecommunity',
  },
  {
    name: 'Innovate',
    logo: InnovateLogo,
    accent: colors.purple,
    description: 'Turn ideas into reality through hackathons and entrepreneurial ventures',
    path: '/innovatecommunity',
  },
  {
    name: 'Dev',
    logo: DevLogo,
    accent: colors.mint,
    description: 'Build industry-ready skills and connect with mentors in tech',
    path: '/devcommunity',
  },
];

const TEAM_TABS = ['General', 'Open-Source', 'Innovate', 'Dev'];
const MEMBERS_PER_PAGE = { xs: 2, sm: 4, md: 8 };

const Home = () => {
  const navigate = useNavigate();
  const styles = homeStyles();

  const [teamTab, setTeamTab] = useState('General');
  const [teamPage, setTeamPage] = useState(0);

  const filteredMembers = useMemo(
    () => TEAM_MEMBERS.filter((member) => member.community === teamTab),
    [teamTab],
  );

  // Page size follows the md layout; smaller breakpoints wrap within the grid.
  const pageSize = MEMBERS_PER_PAGE.md;
  const pageCount = Math.ceil(filteredMembers.length / pageSize);
  const visibleMembers = filteredMembers.slice(teamPage * pageSize, (teamPage + 1) * pageSize);

  const handleTeamTabChange = (tab: string) => {
    setTeamTab(tab);
    setTeamPage(0);
  };

  return (
    <Box sx={styles.pageWrapper}>
      {/* Hero */}
      <Box sx={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box component="h1" sx={{ ...styles.heroTitle, m: 0 }}>
            CSE Society
          </Box>
          <Box sx={styles.heroSubtitle}>at UC San Diego</Box>
          <Box sx={styles.heroTagline}>
            Empowering students through technology, innovation, and community
          </Box>
          <Box sx={styles.heroButtons}>
            <Button sx={styles.primaryButton} onClick={() => navigate('/membership')}>
              Join us&nbsp;&nbsp;→
            </Button>
            <Button sx={styles.secondaryButton} onClick={() => navigate('/events')}>
              Explore Events →
            </Button>
          </Box>
        </motion.div>
      </Box>

      <Container maxWidth="xl" sx={styles.container}>
        {/* What is CSES? */}
        <Box sx={styles.sectionWrapper}>
          <Box component="h2" sx={{ ...styles.sectionTitle, m: 0 }}>
            What is CSES?
          </Box>
          <Box sx={styles.aboutParagraph}>{WHAT_IS_CSES_COPY}</Box>
        </Box>

        {/* Communities */}
        <Box sx={styles.sectionWrapper}>
          <Grid container spacing={4} justifyContent="center">
            {COMMUNITIES.map((community) => (
              <Grid item xs={12} sm={4} key={community.name}>
                <Box sx={styles.communityColumn} onClick={() => navigate(community.path)}>
                  <Box
                    component="img"
                    src={community.logo}
                    alt={`CSE Society ${community.name}`}
                    sx={styles.communityLogo}
                  />
                  <Box sx={styles.communityCard(community.accent)}>
                    <Box sx={styles.communityCardText}>{community.description}</Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Meet the Team! */}
        <Box sx={styles.sectionWrapper}>
          <Box component="h2" sx={{ ...styles.sectionTitle, m: 0 }}>
            Meet the Team!
          </Box>
          <Box sx={styles.sectionSubtitle}>The people who make CSE Society possible</Box>

          <Box sx={styles.teamTabsWrapper}>
            <SegmentedTabs options={TEAM_TABS} value={teamTab} onChange={handleTeamTabChange} />
          </Box>

          {visibleMembers.length > 0 ? (
            <Grid container spacing={3} justifyContent="center" sx={styles.teamGrid}>
              {visibleMembers.map((member) => (
                <Grid item xs={12} sm={6} md={3} key={`${member.community}-${member.name}`}>
                  <Box sx={styles.teamCard}>
                    <Box
                      component="img"
                      src={member.photo}
                      alt={member.name}
                      sx={styles.teamPhoto}
                    />
                    <Box sx={styles.teamName}>{member.name}</Box>
                    <Box sx={styles.teamRole}>{member.role}</Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={styles.emptyText}>Team members coming soon.</Box>
          )}

          {pageCount > 1 && (
            <Box sx={styles.dotsWrapper}>
              {Array.from({ length: pageCount }, (_, index) => (
                <Box
                  key={index}
                  sx={index === teamPage ? styles.dotActive : styles.dot}
                  onClick={() => setTeamPage(index)}
                />
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
