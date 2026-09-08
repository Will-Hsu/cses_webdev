import { Box, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { COMMUNITIES, getCommunity } from './communityData';
import { communityStyles } from './styles';

interface CommunityPageProps {
  // Which community this route renders. One component backs all three pages.
  community: string;
}

const CommunityPage = ({ community: communityKey }: CommunityPageProps) => {
  const styles = communityStyles();
  const navigate = useNavigate();
  const community = getCommunity(communityKey);

  return (
    <Box sx={styles.pageWrapper}>
      <Box
        component="img"
        src={community.graphic}
        alt=""
        aria-hidden="true"
        sx={{ ...styles.backdrop, [community.graphicSide]: 0 }}
      />

      <Container maxWidth="xl" sx={styles.container}>
        <Box component="h1" sx={{ ...styles.pageTitle, m: 0 }}>
          Our Communities
        </Box>

        <Box sx={styles.pills}>
          {COMMUNITIES.map((option) => (
            <Button
              key={option.key}
              onClick={() => navigate(option.path)}
              sx={styles.pill(option.accent, option.key === community.key)}
            >
              {option.name}
            </Button>
          ))}
        </Box>

        <Box sx={styles.showcase}>
          <Box
            sx={{
              ...styles.showcaseInner,
              // Copy on the left means the logo column follows it, and vice
              // versa; each page in the design orients this differently.
              flexDirection: {
                xs: 'column',
                md: community.copySide === 'left' ? 'row' : 'row-reverse',
              },
            }}
          >
            <Box sx={styles.copyColumn}>
              <Box component="h2" sx={{ ...styles.communityName, m: 0 }}>
                {community.name}
              </Box>
              <Box sx={styles.communityDescription}>{community.description}</Box>
            </Box>

            <Box
              sx={{
                ...styles.logoColumn,
                justifyContent: {
                  xs: 'center',
                  md: community.logoSide === 'left' ? 'flex-start' : 'flex-end',
                },
                // Staggered down from the copy on desktop; stacked flush on mobile.
                mt: { xs: 0, md: `${community.logoOffset}px` },
              }}
            >
              <Box
                component="img"
                src={community.logo}
                alt={`CSE Society ${community.name}`}
                sx={styles.logo}
              />
            </Box>
          </Box>
        </Box>

        <Box component="h2" sx={{ ...styles.projectsHeading, m: 0 }}>
          Current Projects
        </Box>
        <Box sx={styles.projectsSubtitle}>
          See what {community.name} is building right now
        </Box>

        {community.projects.length > 0 ? (
          <Box sx={styles.projectsList}>
            {community.projects.map((project) => (
              <Box key={project.name} sx={styles.projectCard}>
                <Box>
                  <Box sx={styles.projectName}>{project.name}</Box>
                  <Box sx={styles.projectDescription}>{project.description}</Box>
                  {project.members !== undefined && (
                    <Box sx={styles.projectMembers}>{project.members} members</Box>
                  )}
                </Box>
                {project.status && (
                  <Box sx={styles.statusChip(project.status)}>{project.status}</Box>
                )}
              </Box>
            ))}
          </Box>
        ) : (
          <Box sx={styles.emptyText}>Projects coming soon.</Box>
        )}
      </Container>
    </Box>
  );
};

export default CommunityPage;
