import React, { useState } from 'react';
import { Box, Grid, ToggleButton, createTheme, useMediaQuery } from '@mui/material';
import previous from '../../images/previous.png';
import next from '../../images/next.png';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { buttonStyles } from '../Button/styles';
import { aboutStyles } from './styles';
import Sithu from '../../images/meettheteamImages/sithu.jpg';
import Rahul from '../../images/meettheteamImages/rahul.png';
import Yashil from '../../images/meettheteamImages/yashil vora.jpg';
import Mishka from '../../images/meettheteamImages/mishka.jpeg';
import Brian from '../../images/meettheteamImages/brian.jpg';
import Jake from '../../images/meettheteamImages/jake villaseno.jpeg';
import Jose from '../../images/meettheteamImages/josue martinez.jpeg';
import Angelina from '../../images/meettheteamImages/angelina yee.jpg';
import Ganesh from '../../images/meettheteamImages/ganesh kumarappan.jpg';
import Sardor from '../../images/meettheteamImages/sardor sobirov.jpg';
import Shreya from '../../images/meettheteamImages/shreya gupta.jpg';
import ShreyaN from '../../images/meettheteamImages/Shreya Nagunuri.png';
import Kevin from '../../images/meettheteamImages/kevin kim.jpeg';
import KevinW from '../../images/meettheteamImages/KevinWu.png';
import Sofia from '../../images/meettheteamImages/sofia nguyen.png';
import Maanasa from '../../images/meettheteamImages/maanasa prasad.png';
import Michael from '../../images/meettheteamImages/michael he.png';
import Pranav_Soma from '../../images/meettheteamImages/Pranav_Soma.jpeg';
import Nikitha_Maderamitla from '../../images/meettheteamImages/Nikitha_Maderamitla.jpg';
import Aryen_Singhal from '../../images/meettheteamImages/Aryen_Singhal.jpg';
import Hillary_Chang from '../../images/meettheteamImages/Hillary_Chang.webp';
import Aditya_Kakarla from '../../images/meettheteamImages/Aditya_Kakarla.jpg';
import Chase_Peterson from '../../images/meettheteamImages/Chase_Peterson.jpg';
import Tia_Irani from '../../images/meettheteamImages/Tia_Irani.jpeg';
import Steven_Shi from '../../images/meettheteamImages/Steven_Shi.jpg';
import Vinod_Vairavaraj from '../../images/meettheteamImages/Vinod_Vairavaraj.png';
import Shree_Venkatesh from '../../images/meettheteamImages/Shree_Venkatesh.jpg';
import Bhavik_Chandna from '../../images/meettheteamImages/Bhavik_Chandna.jpg';
import Kevin_Sun from '../../images/meettheteamImages/Kevin_Sun.jpg';
import Aryamun_Das from '../../images/meettheteamImages/Ryan_Das.jpeg';
import Aditi_Bansal from '../../images/meettheteamImages/Aditi_Bansal.jpg';
import Lucas_Hlaing from '../../images/meettheteamImages/Lucas_Hiaing.jpeg';
import Varun_Parekh from '../../images/meettheteamImages/Varun_Parekh.jpg';

const categories = [
  {
    id: 1,
    name: 'CSES Board',
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
  },
  {
    id: 2,
    name: 'CSES Dev',
    members: [
      { name: 'Shreya Gupta', title: 'President', photo: Shreya },
      { name: 'Steven Shi', title: 'VP Products', photo: Steven_Shi },
      { name: 'Jake Villasenor', title: 'VP Design', photo: Jake },
      { name: 'Sardor Sobirov', title: 'Frontend Developer', photo: Sardor },
      { name: 'Sithu Soe', title: 'Frontend Developer', photo: Sithu },
      { name: 'Kevin Wu', title: 'Frontend Developer', photo: KevinW },
      { name: 'Shreya Nagunuri', title: 'Backend Developer', photo: ShreyaN },
      { name: 'Brian Liu', title: 'Backend Developer', photo: Brian },
      { name: 'Ganesh Kumarappan', title: 'Backend Developer', photo: Ganesh },
    ],
  },
  {
    id: 4,
    name: 'CSES Open Source',
    members: [
      { name: 'Yashil Vora', title: 'President', photo: Yashil },
      { name: 'Mishka Jethwani', title: 'VP Operations', photo: Mishka },
      { name: 'Aryen Singhal', title: 'Engineering Manager', photo: Aryen_Singhal },
      { name: 'Chase Peterson', title: 'Engineering Manager', photo: Chase_Peterson },
      { name: 'Shree Venkatesh', title: 'Engineering Manager', photo: Shree_Venkatesh },
      { name: 'Kevin Sun', title: 'Engineering Manager', photo: Kevin_Sun },
      { name: 'Kevin Kim', title: 'Lead Software Engineer', photo: Kevin },
      { name: 'Sofia Nguyen', title: 'UI/UX Designer', photo: Sofia },
      { name: 'Tia Irani', title: 'UI/UX Designer', photo: Tia_Irani },
      { name: 'Aditi Bansal', title: 'UI/UX Designer', photo: Aditi_Bansal },
      { name: 'Vinod Vairavaraj', title: 'UI/UX Designer', photo: Vinod_Vairavaraj },
    ],
  },
  {
    id: 6,
    name: 'CSES E/Acc',
    members: [
      { name: 'Pranav Soma', title: 'President', photo: Pranav_Soma },
      { name: 'Aryamun Das', title: 'Founder', photo: Aryamun_Das },
      { name: 'Nikitha Maderamitla', title: 'Internal Director', photo: Nikitha_Maderamitla },
      { name: 'Aditya Kakarla', title: 'External Director', photo: Aditya_Kakarla },
      { name: 'Bhavik Chandna', title: 'Project Lead', photo: Bhavik_Chandna },
    ],
  },
];

const MeetTheTeam = () => {
  const styles = aboutStyles();
  const theme = createTheme();
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [currentPage, setCurrentPage] = useState(1);
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
          MEET THE TEAM!
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
          justifyContent="center"
          sx={{
            marginTop: {
              xs: '8%',
              sm: areFewMembers ? marginTopValue : '-90%',
              md: marginTopValue,
            },
            marginBottom: {
              xs: areFewMembers ? '10%' : '0%',
              sm: areFewMembers ? '10%' : '0%',
              md: areFewMembers ? '10%' : '0%',
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
            sx={{ alignItems: 'center' }}
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
