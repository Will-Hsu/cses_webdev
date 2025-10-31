import { Container, Box, Grid, Typography, Link, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { aboutStyles } from './styles';
import dev from '../../images/ourCommunitiesImages/DevLogo.png';
import opensource from '../../images/ourCommunitiesImages/OpenSourceLogo.png';
import innovate from '../../images/ourCommunitiesImages/InnovateLogo.png';

const Communities = () => {
  const styles = aboutStyles();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Container
      disableGutters
      sx={{
        width: '100%',
        backgroundColor: 'transparent',
        marginTop: '10%',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          ...styles.mainTitleTop,
          fontSize: 'clamp(40px, 9vw, 80px)',
          color: 'white',
          marginBottom: '2%',
        }}
      >
        Our Communities
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'white',
          fontSize: 'clamp(16px, 2.4vw, 22px)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        At CSES, we have various communities that cover different areas of tech and offer hands-on
        projects for you to collaborate, gain experience, and build your resume. Websites are coming soon, 
        but for now, check out our{' '}
        <Link
          href="https://linktr.ee/csesucsd"
          rel="noopener noreferrer"
          color="inherit"
          target="_blank"
          underline="always"
        >
          Linktree
        </Link>{' '}
        and come to our quarterly kick-off events for the latest updates on each community's
        recruitment and projects!
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        direction={isMobile ? 'column' : 'row'}
        sx={{ px: { xs: '2%', sm: '3%' } }}
      >
        <Grid item xs={12} sm={4}>
          <Link component={RouterLink} to="/opensourcecommunity" underline="none" sx={{ display: 'inline-block' }}>
            <Box
              component="img"
              src={opensource}
              alt="CSES Open Source"
              sx={{
                width: '100%',
                maxWidth: 400,
                margin: '0 auto',
                display: 'block',
                cursor: 'pointer',
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Link component={RouterLink} to="/innovatecommunity" underline="none" sx={{ display: 'inline-block' }}>
            <Box
              component="img"
              src={innovate}
              alt="CSES Innovate"
              sx={{
                width: '100%',
                maxWidth: 400,
                margin: '0 auto',
                display: 'block',
                cursor: 'pointer',
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Link component={RouterLink} to="/devcommunity" underline="none" sx={{ display: 'inline-block' }}>
            <Box
              component="img"
              src={dev}
              alt="CSES Dev"
              sx={{
                width: '100%',
                maxWidth: 400,
                margin: '0 auto',
                display: 'block',
                cursor: 'pointer',
              }}
            />
          </Link>
        </Grid>
      </Grid>

    </Container>
  );
};

export default Communities;
