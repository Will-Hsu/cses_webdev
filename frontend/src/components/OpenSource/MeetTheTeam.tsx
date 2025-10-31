import React, { useState } from 'react';
import { Box, Grid, ToggleButton, createTheme, useMediaQuery } from '@mui/material';
import previous from '../../images/previous.png';
import next from '../../images/next.png';
import { buttonStyles } from '../Button/styles';
import { tempStyles } from './styles';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Maanasa from '../../images/meettheteamImages/maanasa prasad.png';
import Aditi_Bansal from '../../images/opensourceteam/Aditi Bansal.jpg';
import Alexis_Vega from '../../images/opensourceteam/Alexis Vega.jpg';
import Anika_Dontu from '../../images/opensourceteam/Anika Dontu.jpg';
import Arjun_Singh from '../../images/opensourceteam/Arjun Singh.jpeg';
import Aryen_Singhal from '../../images/opensourceteam/Aryen Singhal.jpg';
import Chase_Peterson from '../../images/opensourceteam/Chase Peterson.jpg';
import Dhruv_Agarwal from '../../images/opensourceteam/Dhruv Agarwal.jpg';
import Mishka_Jethwani from '../../images/opensourceteam/Mishka Jethwani.jpg';
import Nishitha_Selvakumar from '../../images/opensourceteam/Nishitha Selvakumar.jpg';
import Parth_Trivedi from '../../images/opensourceteam/Parth Trivedi.jpg';
import Ritvik_Chand from '../../images/opensourceteam/Ritvik Chand.jpg';
import Shree_Venkatesh from '../../images/opensourceteam/Shree Venkatesh.jpg';
import Thanh_Trinh from '../../images/opensourceteam/Thanh Trinh.jpeg';
import Ulises_Salinas from '../../images/opensourceteam/Ulises Salinas.jpg';
import Vedant_Vardhaan from '../../images/opensourceteam/Vedant Vardhaan.jpeg';
import Victoria_Tran from '../../images/opensourceteam/Victoria Tran.jpeg';
import Vinod_Vairavaraj from '../../images/opensourceteam/Vinod Vairavaraj.jpeg';
import William_Widjaja from '../../images/opensourceteam/William Widjaja.png';
import Yashil_Vora from '../../images/opensourceteam/Yashil Vora.jpg';
import Yixuan_Li from '../../images/opensourceteam/Yixuan Li.jpg';
import Yash_Ravipati from '../../images/meettheteamImages/Yash_Ravipati.jpg'
import placeholder from '../../images/Placeholder.jpg'

const categories = [
  {
    id: 1,
    name: 'Exec',
    members: [
      { name: 'Yashil Vora', title: 'President', photo: Yashil_Vora },
      { name: 'Yash Ravipati', title: 'VP Technical', photo: Yash_Ravipati },
      { name: 'Mishka Jethwani', title: 'VP Operations', photo: Mishka_Jethwani },
    ],
  },
  {
    id: 2,
    name: 'TritonScript',
    members: [
      { name: 'Aryen Singhal', title: 'Engineering Manager', photo: Aryen_Singhal },
      { name: 'Dhruv Agarwal', title: 'Developer', photo: Dhruv_Agarwal },
      { name: 'Victoria Tran', title: 'Developer', photo: Victoria_Tran },
      { name: 'Riyana Dutta', title: 'Developer', photo: placeholder },
      { name: 'Thanh Trinh', title: 'Developer', photo: Thanh_Trinh },
    ],
  },
  {
    id: 3,
    name: 'TritonSpend',
    members: [
      { name: 'Shree Venkatesh', title: 'Engineering Manager', photo: Shree_Venkatesh },
      { name: 'Vinod Vairavaraj ', title: 'Designer', photo: Vinod_Vairavaraj },
      { name: 'Aditi Bansal', title: 'Designer', photo: Aditi_Bansal },
      { name: 'Vedant Vardhaan', title: 'Developer', photo: Vedant_Vardhaan },
      { name: 'Kiruthika Marikumaran', title: 'Developer', photo: placeholder },
      { name: 'Chris Park', title: 'Developer', photo: placeholder },
      { name: 'Ritvik Chand', title: 'Developer', photo: Ritvik_Chand },
      { name: 'Anika Dontu', title: 'Developer', photo: Anika_Dontu },
    ],
  },
  {
    id: 4,
    name: 'Low Price Center',
    members: [
      { name: 'Chase Peterson', title: 'Engineering Manager', photo: Chase_Peterson },
      { name: 'Vinod Vairavaraj ', title: 'Designer', photo: Vinod_Vairavaraj },
      { name: 'Tia Irani', title: 'Designer', photo: placeholder },
      { name: 'Navyaa Gupta', title: 'Developer', photo: placeholder },
      { name: 'Nishitha Selvakumar', title: 'Developer', photo: Nishitha_Selvakumar },
      { name: 'Kyla Ma', title: 'Developer', photo: placeholder },
      { name: 'Nicholas Nguyen', title: 'Developer', photo: placeholder },
      { name: 'Weston Zong', title: 'Developer', photo: placeholder },
    ],
  },
  {
    id: 5,
    name: 'Oppurtune',
    members: [
      { name: 'Kevin Sun', title: 'Engineering Manager', photo: placeholder },
      { name: 'Aditi Bansal ', title: 'Designer', photo: Aditi_Bansal },
      { name: 'Tia Irani', title: 'Designer', photo: placeholder },
      { name: 'Parth Trivedi', title: 'Developer', photo: Parth_Trivedi },
      { name: 'Yixuan Li', title: 'Developer', photo: Yixuan_Li },
      { name: 'Alexis Vega', title: 'Developer', photo: Alexis_Vega },
      { name: 'Maanasa Prasad', title: 'Developer', photo: Maanasa },
      { name: 'William Widjaja', title: 'Developer', photo: William_Widjaja },
      { name: 'Ulises Salinas', title: 'Developer', photo: Ulises_Salinas },
    ],
  },
];

const MeetTheTeam = () => {
  const styles = tempStyles();
  const theme = createTheme();
  const [currentPage, setCurrentPage] = useState(1);
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const isMiddleScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const verySmallScreen = useMediaQuery('(max-width:350px');

  const membersPerPage = 6;
  const remainingSpots = membersPerPage - (currentCategory.members.length % membersPerPage);

  // Calculate the number of members displayed on the current page
  const membersDisplayed = currentCategory.members.slice((currentPage - 1) * 6, currentPage * 6);

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

  const handleCategoryChange = (category: (typeof categories)[number]) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    const maxPages = Math.ceil(currentCategory.members.length / 6);
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
        sx={{ marginTop: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <ToggleButtonGroup value={currentCategory.name} exclusive aria-label="Category Selection">
          {categories.map((category) => (
            <ToggleButton
              key={category.name}
              value={category.name}
              sx={{
                ...buttonStyles(false, false, false),
                marginRight: '0px',
                marginLeft: '0px',
                '&.MuiToggleButton-root.Mui-selected, &.MuiToggleButton-root.Mui-selected:hover': {
                  backgroundColor: 'grey',
                  color: 'white',
                },
                fontSize: 'clamp(10px, 2vw, 15px)',
              }}
              onClick={() => {
                handleCategoryChange(category);
              }}
            >
              {category.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
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
          {currentCategory.members
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
            <Grid item xs={6} sm={4} md={4} lg={4} key={index + currentCategory.members.length}>
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
                    currentPage === Math.ceil(currentCategory.members.length / 6)
                      ? 'auto'
                      : 'pointer',
                  opacity:
                    currentPage === Math.ceil(currentCategory.members.length / 6) ? '20%' : '100%',
                }}
                onClick={handleNextPage}
                disabled={currentPage === Math.ceil(currentCategory.members.length / 6)}
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
