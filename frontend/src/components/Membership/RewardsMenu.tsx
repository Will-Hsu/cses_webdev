import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import { membershipStyles } from './styles';
import smallPrize from '../../images/rewardsImages/small_gift.png';
import medPrize from '../../images/rewardsImages/med_gift.png';
import bigPrize from '../../images/rewardsImages/big_gift.png';
import ConfirmationDialog from './ConfirmationDialog';

interface RewardsProp {
  email: string;
  points: number;
}

const RewardsMenu = (userData: RewardsProp) => {
  const styles = membershipStyles();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const smallPrizePoints = 500;
  const mediumPrizePoints = 1250;
  const largePrizePoints = 2500;
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState('');

  const openConfirmationDialog = (prizeType: string) => {
    setSelectedPrize(prizeType);
    setConfirmationOpen(true);
  };

  const closeConfirmationDialog = () => {
    setSelectedPrize('');
    setConfirmationOpen(false);
  };

  const pointsForPrize = (prizeType: string) => {
    switch (prizeType) {
      case 'small':
        return 500;
      case 'medium':
        return 1250;
      case 'large':
        return 2500;
    }
  };

  const redeemSmallPrize = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/users/${userData.email}/redeemSmall`,
      );
      console.log('Redeem Small Prize endpoint called');

      window.location.reload();
    } catch (error) {
      console.error('Error redeeming small prize:', error);
    }
  };

  const redeemMediumPrize = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/users/${userData.email}/redeemMedium`,
      );

      window.location.reload();
    } catch (error) {
      console.error('Error redeeming medium prize:', error);
    }
  };

  const redeemLargePrize = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/users/${userData.email}/redeemLarge`,
      );

      window.location.reload();
    } catch (error) {
      console.error('Error redeeming large prize:', error);
    }
  };

  return (
    <Container maxWidth="xl" sx={styles.rewardsBody}>
      <Typography
        sx={{
          ...styles.eventsAttendedTitle,
          marginLeft: isMobile ? '16%' : '0',
          marginTop: isMobile ? '16%' : '14px', // Adjusted marginTop to move the title upwards

        }}
      >
        REWARDS
      </Typography>
      <Box
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'flex-start',
          marginLeft: isMobile ? '16%' : '0',
        }}
      >
        <Button
          sx={{
            ...styles.rewardBox,
            cursor: userData.points >= smallPrizePoints ? 'pointer' : 'not-allowed',
            '&:hover':
              userData.points >= smallPrizePoints
                ? {
                    boxShadow: '0 0 20px 5px rgba(52, 152, 219, 0.7)',
                  }
                : 'none',
            filter: userData.points >= smallPrizePoints ? 'grayscale(0%)' : 'grayscale(100%)',
          }}
          onClick={() => {
            if (userData.points >= smallPrizePoints) {
              openConfirmationDialog('small');
            }
          }}
        >
          <Box>
            <img src={smallPrize} alt="img" style={{ width: '70px', height: '70px' }} />
          </Box>
          <Box
            style={{
              color: userData.points >= smallPrizePoints ? 'white' : 'gray',
              fontSize: '20px',
              fontFamily: 'Inter',
              fontWeight: '600',
              textTransform: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Small Prize
          </Box>
          <Box
            style={{
              color: userData.points >= smallPrizePoints ? 'white' : 'gray',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: '600',
              textTransform: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            500 Points
          </Box>
        </Button>
        <Button
          sx={{
            ...styles.rewardBox,
            cursor: userData.points >= mediumPrizePoints ? 'pointer' : 'not-allowed',
            '&:hover':
              userData.points >= mediumPrizePoints
                ? {
                    boxShadow: '0 0 20px 5px rgba(52, 152, 219, 0.7)',
                  }
                : 'none',
            filter: userData.points >= mediumPrizePoints ? 'grayscale(0%)' : 'grayscale(100%)',
          }}
          onClick={() => {
            if (userData.points >= mediumPrizePoints) {
              openConfirmationDialog('medium');
            }
          }}
        >
          <Box>
            <img src={medPrize} alt="img" style={{ width: '80px', height: '92px' }} />
          </Box>
          <Box
            style={{
              color: userData.points >= mediumPrizePoints ? 'white' : 'gray',
              fontSize: '20px',
              fontFamily: 'Inter',
              fontWeight: '600',
              textTransform: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Medium Prize
          </Box>
          <Box
            style={{
              color: userData.points >= mediumPrizePoints ? 'white' : 'gray',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: '600',
              textTransform: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            1250 Points
          </Box>
        </Button>
        <Button
          sx={{
            ...styles.rewardBox,
            cursor: userData.points >= largePrizePoints ? 'pointer' : 'not-allowed',
            '&:hover':
              userData.points >= largePrizePoints
                ? {
                    boxShadow: '0 0 20px 5px rgba(52, 152, 219, 0.7)',
                  }
                : 'none',
            filter: userData.points >= largePrizePoints ? 'grayscale(0%)' : 'grayscale(100%)',
          }}
          onClick={() => {
            if (userData.points >= largePrizePoints) {
              openConfirmationDialog('large');
            }
          }}
        >
          <Box>
            <img src={bigPrize} alt="img" style={{ width: '100px', height: '113px' }} />
          </Box>
          <Box
            style={{
              color: userData.points >= largePrizePoints ? 'white' : 'gray',
              fontSize: '20px',
              fontFamily: 'Inter',
              fontWeight: '600',
              textTransform: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Large Prize
          </Box>
          <Box
            style={{
              color: userData.points >= largePrizePoints ? 'white' : 'gray',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: '600',
              textTransform: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            2500 Points
          </Box>
        </Button>
      </Box>
      {confirmationOpen && selectedPrize && (
        <ConfirmationDialog
          open={confirmationOpen}
          handleClose={closeConfirmationDialog}
          handleConfirm={() => {
            if (selectedPrize === 'small') {
              redeemSmallPrize();
            } else if (selectedPrize === 'medium') {
              redeemMediumPrize();
            } else if (selectedPrize === 'large') {
              redeemLargePrize();
            }
            closeConfirmationDialog();
          }}
          title="Confirm Prize Redemption"
          message={`Are you sure you want to redeem the ${selectedPrize} prize (${pointsForPrize(
            selectedPrize,
          )} points)?`}
        />
      )}
    </Container>
  );
};

export default RewardsMenu;
