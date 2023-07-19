import React from 'react';
import { Container, Typography, Grid, Link, Box } from '@mui/material';
import bg from '../../images/shape2.svg';
import Button from '../Button/Button';
import sponsor from '../../images/cseLogo.gif';
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
              <br />
              Our LinkedIn network has opportunities for members from companies, alumni, and
              professors in our network. This is an opportunity for only members. To join the
              LinkedIn network, please email{' '}
              <Link href="mailto:cses@ucsd.edu" color="inherit">
                cses@ucsd.edu
              </Link>{' '}
              with your UCSD email. <br />
              <br />
              To become a member, please press on the membership tab on this website and participate
              in our events.
            </Typography>
          </Grid>
          <Grid item sx={{ width: '40%', margin: '5% 5% 0 0%' }}>
            <div style={{ width: '400px', height: '450px', backgroundColor: 'grey' }}></div>
          </Grid>
          <Grid item sx={{ width: '55%', marginTop: '5%' }}>
            <Typography sx={styles.subtitle}>
              For <span style={{ fontStyle: 'italic' }}>sponsors</span>.
            </Typography>
            <Typography sx={{ ...styles.test, marginBottom: '15px' }}>
              <br />
              We have various sponsor packages that include participating in our CSE Society career
              fair, individual recruiting events, and promotion of your company. To inquire about
              sponsoring the CSE Society, please contact{' '}
              <Link href="mailto:cses@ucsd.edu" color="inherit">
                cses@ucsd.edu
              </Link>
              .
            </Typography>
            <Button
              size="medium"
              text="See Opportunities ->"
              onClick={() => console.log('click')}
            ></Button>
          </Grid>
        </Grid>
        <Typography align="center" sx={{ ...styles.subtitle, margin: '6% 0% 4% 0%' }}>
          Thank you to our current sponsors!
        </Typography>

        <Box display="flex" justifyContent="center">
          <a href="https://cse.ucsd.edu/" style={styles.link}>
            <img src={sponsor} alt="sponsor" style={styles.sponsor} />
          </a>
        </Box>
      </Container>
    </div>
  );
};

export default Opportunities;
