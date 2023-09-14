import React from 'react';
//import { AuthContext } from '../../context/AuthContext';
//import { useNavigate } from 'react-router-dom';
//import axios from 'axios';
//import { User } from '../../utils/types';
import {
    Box,
    Button,
    Container,
    Typography,
    TableContainer,
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow,
    Modal,
    TextField,
    createTheme,
    useMediaQuery,
    Grid
  } from '@mui/material';
// import { memberProfile } from './styles';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { membershipStyles } from './styles';
import prize from '../../images/gift.png'


interface RewardsProp {
  points: number;
}

const RewardsMenu = (userData: RewardsProp) => {
    const theme = createTheme();
    const styles = membershipStyles();
    const isMobile = useMediaQuery('(max-width: 767px)');
    const smallPrizePoints = 500;
    const mediumPrizePoints = 1250;
    const largePrizePoints = 2500;

    return (
      <Container maxWidth="xl" sx={styles.rewardsBody}>
      <Typography sx={isMobile ? styles.eventsAttendedTitleMobile : styles.eventsAttendedTitle}>
        REWARDS
      </Typography>
      <Box style={{ display: 'flex', flexDirection: isMobile ? 'column': 'row', alignItems: 'flex-start'}}>
      
        <Button sx={{...styles.rewardBox, 
          cursor: userData.points >= smallPrizePoints ? 'pointer' : 'not-allowed', 
          '&:hover': userData.points >= smallPrizePoints ? {
            boxShadow: '0 0 20px 5px rgba(52, 152, 219, 0.7)',
          }: 'none', 
          filter: userData.points >= smallPrizePoints ? 'grayscale(0%)': 'grayscale(100%)',
          }}>
          <Box>
          <img src={prize} alt="img" style={{ maxWidth: '50%'}} />
          </Box>
          <Box
            style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Inter',
              fontWeight: '600',
              textTransform: 'none',
            }}
          >
            Small Prize
          </Box>
          <Box
            style={{
              color: 'white',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: '600',
              textTransform: 'none',
            }}
          >
            500 Points
          </Box>
        </Button>
        <Button sx={{...styles.rewardBox, 
          cursor: userData.points >= mediumPrizePoints ? 'pointer' : 'not-allowed', 
          '&:hover': userData.points >= mediumPrizePoints ? {
            boxShadow: '0 0 20px 5px rgba(52, 152, 219, 0.7)',
          }: 'none', 
          filter: userData.points >= mediumPrizePoints ? 'grayscale(0%)': 'grayscale(100%)',
          }}>
          <Box>
          <img src={prize} alt="img" style={{ maxWidth: '65%'}} />
          </Box>
          <Box
            style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Inter',
              fontWeight: '600',
              textTransform: 'none',
            }}
          >
            Medium Prize
          </Box>
          <Box
            style={{
              color: 'white',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: '600',
              textTransform: 'none',
            }}
          >
            1250 Points
          </Box>
        </Button>
        <Button sx={{...styles.rewardBox, 
          cursor: userData.points >= largePrizePoints ? 'pointer' : 'not-allowed', 
          '&:hover': userData.points >= largePrizePoints ? {
            boxShadow: '0 0 20px 5px rgba(52, 152, 219, 0.7)',
          }: 'none', 
          filter: userData.points >= largePrizePoints ? 'grayscale(0%)': 'grayscale(100%)',
          }}>
          <Box>
          <img src={prize} alt="img" style={{ maxWidth: '80%'}} />
          </Box>
          <Box
            style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Inter',
              fontWeight: '600',
              textTransform: 'none',
            }}
          >
            Large Prize
          </Box>
          <Box
            style={{
              color: 'white',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: '600',
              textTransform: 'none',
            }}
          >
            2500 Points
          </Box>
        </Button>
       
      </Box>

      </Container>
  );
    
  };
  
export default RewardsMenu;


    