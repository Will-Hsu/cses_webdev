import React from 'react';
import Button from '../Button/Button';
import { Container, Box, Grid} from '@mui/material';
import background from '../../images/home_bg.svg';
import desktop from './Images/desktop.png';
import { homeStyles } from './styles';

const Home = () => {
  const styles = homeStyles();
  return (
    <Box sx={styles.root} >
      <Box sx={styles.backgroundImage}><img src={background} alt="bg"/></Box>
      <Container maxWidth="xl" sx={styles.container}>
      <Grid container>
        <Grid item xs={12} sm={5} md={5}>
          <Box sx={{ textAlign: {xs: 'center', sm: 'left'}}}>
            <Box sx={{ ...styles.title, marginTop: {xs: '8%', sm: '20%', md: '25%'}, marginLeft: {xs: '0%', sm: '3%', md: '12%'}}}>Innovate.</Box>
            <Box sx={{...styles.title, marginLeft: {xs: '0%', sm: '3%', md: '12%'}}}>Build.</Box>
            <Box sx={{...styles.title, marginLeft: {xs: '0%', sm: '3%', md: '12%'}}}>Connect.</Box>
            <Box sx={{...styles.button, marginLeft: {xs: '0%', sm: '2%', md: '12%'}}}><Button size="large" text="Learn About Us" onClick={() => console.log('click')}/></Box>
          </Box>
        </Grid>
          <Grid item xs={12} sm={7} md={6.5}>
            <img src={desktop} alt="img" style={{ width: '100%', marginTop: '8%', height: 'auto'}} />
          </Grid>
      </Grid>
      <Grid container spacing={0} sx={{marginTop: '17%'}}>
        <Grid item xs={12} sm={4.5} md={5}>
          <Box sx={{...styles.subtitle, display: 'flex', justifyContent: {xs: 'center', sm: 'right'}}}>Join CSES today.</Box>
          <Box sx={{...styles.button, marginTop: {xs: '3%', sm: '0%'}, display: 'flex', justifyContent: {xs: 'center', sm: 'right'}, marginLeft: '0%'}}><Button size="large" text="Become a Member ->" onClick={() => console.log('click')}/></Box>
        </Grid>
        <Grid item xs={11} sm={2.5} md={2} sx={{ display: {xs: 'flex', sm: "block"}, justifyContent: 'center', alignItems: 'center'}}>
          <Box sx={{...styles.statisticContainer, width: {xs: '100%', sm: 'auto'}}}>
            <Box sx={styles.statisticWrapper}>
              <Box sx={{...styles.statisticTitle, fontSize: {xs: 'clamp(40px, 3vw, 100px)', sm: 'clamp(20px, 3vw, 30px)', md: 'clamp(15px, 3vw, 50px)'}}}>1000+</Box>
              <Box sx={{...styles.statisticSubtitle, fontSize: {xs: 'clamp(15px, 3vw, 50px)', sm: 'clamp(10px, 3vw, 12px)', md: 'clamp(12px, 3vw, 17px)'}}}>Members & counting.</Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={11} sm={2.5} md={2}>
          <Box sx={styles.statisticContainer}>
            <Box sx={styles.statisticWrapper}>
              <Box sx={{...styles.statisticTitle, fontSize: {xs: 'clamp(40px, 3vw, 100px)', sm: 'clamp(20px, 3vw, 30px)', md: 'clamp(12px, 3vw, 50px)'}}}>n+</Box>
              <Box sx={{...styles.statisticSubtitle, fontSize: {xs: 'clamp(15px, 3vw, 50px)', sm: 'clamp(10px, 3vw, 12px)', md: 'clamp(12px, 3vw, 17px)'}}}>Another statistic!</Box>
            </Box>
          </Box>
        </Grid>
          <Grid item xs={11} sm={2.5} md={2}>
            <Box sx={styles.statisticContainer}>
              <Box sx={styles.statisticWrapper}>
                <Box sx={{...styles.statisticTitle, fontSize: {xs: 'clamp(40px, 3vw, 100px)', sm: 'clamp(20px, 3vw, 30px)', md: 'clamp(12px, 3vw, 50px)'}}}>1000+</Box>
                <Box sx={{...styles.statisticSubtitle, fontSize: {xs: 'clamp(15px, 3vw, 50px)', sm: 'clamp(10px, 3vw, 12px)', md: 'clamp(12px, 3vw, 17px)'}}}>Members & counting.</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>       
        <Box sx={{ color: 'white', fontSize: 'clamp(25px, 5vw, 60px)', fontFamily: 'Chakra Petch', marginLeft: {sx: '5%', sm: '2%', md: '5%'}, marginTop: '17%', fontWeight: 700, textAlign: {xs: 'center', sm: 'left', md: 'left'}}}>UPCOMING EVENTS.</Box>
      </Container>
    </Box>
  );
};

export default Home;