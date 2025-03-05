import React, { useState } from 'react';
import { Box, Grid, ToggleButton, createTheme, useMediaQuery } from '@mui/material';
import previous from '../../images/previous.png';
import next from '../../images/next.png';
import { tempStyles } from './styles';
import Sithu from '../../images/meettheteamImages/sithu.jpg';
import Rahul from '../../images/meettheteamImages/rahul.png';
import Jose from '../../images/meettheteamImages/josue martinez.jpeg';
import Angelina from '../../images/meettheteamImages/angelina yee.jpg';
import Maanasa from '../../images/meettheteamImages/maanasa prasad.png';
import Michael from '../../images/meettheteamImages/michael he.png';
import Hillary_Chang from '../../images/meettheteamImages/Hillary_Chang.webp';
import Lucas_Hlaing from '../../images/meettheteamImages/Lucas_Hiaing.jpeg';
import Varun_Parekh from '../../images/meettheteamImages/Varun_Parekh.jpg';

const team = 
  {
    id: 1,
    name: 'Project 1',
    members: [
      { name: 'Rahul Mistry', title: 'VP Internal', photo: Rahul },
      { name: 'Michael He', title: 'VP External', photo: Michael },
      { name: 'Sithu Soe', title: 'VP Operations', photo: Sithu },
      { name: 'Maanasa Prasad', title: 'VP Events', photo: Maanasa },
      { name: 'Lucas Hlaing', title: 'Finance Director', photo: Lucas_Hlaing },
      { name: 'Varun Parekh', title: 'Technical Workshop Director', photo: Varun_Parekh },
      { name: 'Angelina Yee', title: 'Marketing Chair', photo: Angelina },
      { name: 'Jose Martinez', title: 'External Director - Alumni and Professor', photo: Jose },
      { name: 'Hillary Chang', title: 'Corporate Connections Director', photo: Hillary_Chang },
    ],
  }

const MeetTheTeam = () => {
  const styles = tempStyles();
  const theme = createTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const isMiddleScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const verySmallScreen = useMediaQuery('(max-width:350px');

  const membersPerPage = 6;
  const remainingSpots = membersPerPage - (team.members.length % membersPerPage);

  // Calculate the number of members displayed on the current page
  const membersDisplayed = team.members.slice((currentPage - 1) * 6, currentPage * 6);

  // Define the threshold for different margin values
  const marginThreshold = 3;

  // Check if there are fewer than 3 members displayed
  const areFewMembers = membersDisplayed.length < marginThreshold;

  // Define the margin values based on the number of members displayed
  const marginTopValue = areFewMembers ? '3%' : '-50%';

  const emptyMembers = Array.from({ length: remainingSpots }).map((_, index) => ({
    name: `Empty Member ${index + 1}`,
    title: 'Empty Title',
    photo: 'blankSquare',
  }));


  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    const maxPages = Math.ceil(team.members.length / 6);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPages));
  };

  return (
    <div>
      <Grid item xs={12} sm={4.5} md={5.5} lg={5}>
        <Box
          sx={{
            ...styles.mainTitleBottom,
            textAlign: 'center',
            fontSize: 'clamp(32px, 8vw, 65px)',
          }}
        >
          OUR TEAM!
        </Box>
      </Grid>
      <Grid
        container
        sx={{
          marginTop: '4%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container item xs={12} sm={9} md={9} lg={9} justifyContent="center">
          {team.members
            .slice((currentPage - 1) * 6, currentPage * 6)
            .map((member, index) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={4}
                lg={4}
                key={index}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div
                  style={{
                    width: verySmallScreen
                      ? '120px'
                      : isSmallScreen
                      ? '120px'
                      : isMiddleScreen
                      ? '140px'
                      : '190px',
                    height: verySmallScreen
                      ? '120px'
                      : isSmallScreen
                      ? '120px'
                      : isMiddleScreen
                      ? '140px'
                      : '190px',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={member.photo}
                    key={member.photo}
                    alt="img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <h3
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    fontSize: '18px',
                  }}
                >
                  {member.name}
                </h3>
                <h5
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    fontSize: '14px',
                    marginTop: '-2%',
                  }}
                >
                  {member.title}
                </h5>
              </Grid>
            ))}

          {emptyMembers.map((member, index) => (
            <Grid item xs={6} sm={4} md={4} lg={4} key={index + team.members.length}>
              {/* Empty placeholder, no visible content */}
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={15}
          md={20}
          justifyContent="space-evenly"
          sx={{
            marginTop: {
              xs: '8%', // Default margin for extra small screens
              sm: membersDisplayed.length <= 3 ? '-30%' : '-70%', // Adjusted for small screens
              md: membersDisplayed.length <= 3 ? '-30%' : '-60%', // Adjusted for medium screens
              lg: membersDisplayed.length <= 3 ? '-15%' : '-45%', // Adjusted for large screens
            },
            marginBottom: {
              xs: membersDisplayed.length <= 3 ? '10%' : '0%',
              sm: membersDisplayed.length <= 3 ? '10%' : '0%',
              md: membersDisplayed.length <= 3 ? '10%' : '0%',
            },
          }}
        >
          <Grid
            container
            item
            xs={5}
            sm={20}
            md={15}
            justifyContent="space-between"
            sx={{ 
              alignItems: 'center',
              marginLeft:{
                sm: '4%',
                md: '6%',
                lg: '10%'
              },
              marginRight:{
                sm: '4%',
                md: '6%',
                lg: '10%'
              }
             }}
            
          >
            <Grid item>
              <button
                style={{
                  border: 'none',
                  background: 'none',
                  cursor: currentPage === 1 ? 'auto' : 'pointer',
                  opacity: currentPage === 1 ? '20%' : '100%',
                }}
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                <img
                  src={previous}
                  alt="img"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </button>
            </Grid>
            <Grid item>
              <button
                style={{
                  border: 'none',
                  background: 'none',
                  cursor:
                    currentPage === Math.ceil(team.members.length / 6)
                      ? 'auto'
                      : 'pointer',
                  opacity:
                    currentPage === Math.ceil(team.members.length / 6) ? '20%' : '100%',
                }}
                onClick={handleNextPage}
                disabled={currentPage === Math.ceil(team.members.length / 6)}
              >
                <img src={next} alt="img" style={{ width: 30, height: 30 }} />
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MeetTheTeam;
