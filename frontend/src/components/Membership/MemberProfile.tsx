import React from 'react';
import { Box, Grid, LinearProgress, Typography } from '@mui/material';
import blankPic from '../../images/blankMemberPic.png';


interface MemberProfileProps {
  memberName: string;
  //imageUrl: string;
}

const MemberProfile = ({ memberName}: MemberProfileProps) => {
  return (
    <div style={{ color: 'white', position: 'relative', top: '93px' }}>
      <Grid container sx={{ marginTop: '-2%', display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={12} sm={8} lg={8}>
            <Box
                sx={{
                color: 'white',
                textAlign: { lg: 'center', sm: 'center', xs: 'center' },
                fontSize: { xs: '19px', sm: '30px', lg: '30px' },
                }}
            >
                <h1 style={{ fontFamily: 'Chakra Petch', fontWeight: '700' }}>
                    MEMBER PROFILE
                </h1>
            </Box>
        </Grid>
        </Grid>

    <Grid container sx={{ marginTop: '2%', display: 'flex', justifyContent: 'center' }}>
      <Grid item sm={5} lg={3}>
        <img src={blankPic} alt="img" />
      </Grid>
      <Grid item sm={6} lg={3}>
        <Box
          sx={{
            color: 'white',
            textAlign: { lg: 'left', sm: 'left', xs: 'center' },
            fontSize: { xs: '0.9em', sm: '1em', lg: '1em' },
            marginTop: '10%',
            marginLeft: {xs: '0%', sm: '-10%', lg: '-15%'}
          }}
        >
          <h1>WELCOME BACK</h1>
        </Box>
        <Box
          sx={{
            color: 'white',
            textAlign: { lg: 'left', sm: 'left', xs: 'center' },
            fontSize: { xs: '0.9em', sm: '1em', lg: '1em' },
            marginTop: '-5%',
            marginLeft: {xs: '0%', sm: '-10%', lg: '-15%'}
          }}
        >
          <h1>{memberName}</h1>
        </Box>
        <Box 
           sx={{
            marginLeft: {xs: '0%', sm: '-10%', lg: '-15%'}, 
            justifyContent: 'center'
           }}>
            <LinearProgress variant="determinate" 
            value={25}
            sx={{
                height: 20, 
                width: {xs: 300, sm: 400, lg: 400},
                borderRadius: 2,
                border: '2px solid #F3C969',
                position: 'relative',
                bgcolor: 'transparent',
                '& .MuiLinearProgress-bar': {
                  bgcolor: '#F3C969',
                  borderRadius: 1, 
                },
              }}
            />
            
        </Box>
        <Box
            sx={{
                color: 'white',
                textAlign: { lg: 'left', sm: 'left', xs: 'center' },
                marginLeft: {xs: '0%', sm: '-10%', lg: '-15%'}, 
                marginTop: '6%'
            }}
        >
        <p style={{ color: 'white' , fontSize: '1em' }}>
          Member Tier: JUNIOR  |  Point Balance: 45
        </p>
        </Box>
      </Grid>
    </Grid>
    </div>
  );
};

export default MemberProfile;
