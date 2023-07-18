import React from 'react';
import { Container, Typography, Grid, Link, Box } from '@mui/material';
import bg from '../../images/shape2.svg';
import { opportunitiesStyles } from './styles';

const Opportunities = () => {
  const styles = opportunitiesStyles();
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <img src={bg} alt="bg1" style={styles.bg} />
      <Container maxWidth="xl" sx={styles.body}>
        <Typography sx={styles.title}>OPPORTUNITIES</Typography>
        <Grid container spacing={2}>
          <Grid item sx={{ width: '40%', margin: '3% 5% 0 0%' }}>
            <div style={{ width: '400px', height: '450px', backgroundColor: 'grey' }}></div>
          </Grid>
          <Grid item sx={{ width: '55%', marginTop: '3%' }}>
            <Typography sx={styles.subtitle}>
              For <span style={{ fontStyle: 'italic' }}>members</span>.
            </Typography>
            <Typography sx={styles.test}>
              Our LinkedIn network has opportunities for members from companies, alumni, and
              professors in our network. This is an opportunity for only members. To join the
              LinkedIn network, please email{' '}
              <Link href="mailto:cses@ucsd.edu" color="inherit">
                cses@ucsd.edu
              </Link>{' '}
              with your UCSD email. To become a member, please press on the membership tab on this
              website and participate in our events.
            </Typography>
          </Grid>
          <Grid item sx={{ width: '40%', margin: '3% 5% 0 0%' }}>
            <div style={{ width: '400px', height: '450px', backgroundColor: 'grey' }}></div>
          </Grid>
          <Grid item sx={{ width: '55%', marginTop: '3%' }}>
            <Typography sx={styles.subtitle}>
              For <span style={{ fontStyle: 'italic' }}>sponsors</span>.
            </Typography>
            <Typography sx={styles.test}>
              We have various sponsor packages that include participating in our CSE Society career
              fair, individual recruiting events, and promotion of your company. To inquire about
              sponsoring the CSE Society, please contact{' '}
              <Link href="mailto:cses@ucsd.edu" color="inherit">
                cses@ucsd.edu
              </Link>
              .
            </Typography>
          </Grid>
        </Grid>
        <Typography align="center" sx={{ ...styles.subtitle, margin: '6% 0% 4% 0%' }}>
          Thank you to our current sponsors!
        </Typography>

        <Box display="flex" justifyContent="center" alignItems="center">
          <Box display="flex" justifyContent="center">
            <div style={styles.greyBox}></div>
            <div style={styles.greyBox}></div>
            <div style={styles.greyBox}></div>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Opportunities;
