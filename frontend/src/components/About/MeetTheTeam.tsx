import React, { useState } from 'react';
import { Box, Grid, ToggleButton, createTheme, useMediaQuery } from '@mui/material';
import shape from '../../images/shape.svg';
import previous from '../../images/previous.png';
import next from '../../images/next.png';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { buttonStyles } from '../Button/styles';
import { aboutStyles } from './styles';
import Nabil from '../../images/meettheteamImages/nabil.jpg';
import Samvrit from '../../images/meettheteamImages/samvrit.jpeg';
import Anuj from '../../images/meettheteamImages/anuj.jpg';
import Sithu from '../../images/meettheteamImages/sithu.jpg';
import Rahul from '../../images/meettheteamImages/rahul.png';
import Ishika from '../../images/meettheteamImages/ishika.jpg';
import Yashil from '../../images/meettheteamImages/yashil vora.jpg';
import Cassandra from '../../images/meettheteamImages/cassandra.png';
import Sidhant from '../../images/meettheteamImages/sidhant.jpg';
import Rachel from '../../images/meettheteamImages/rachel paner.jpeg';
import Christopher from '../../images/meettheteamImages/christopher.png';
import Gaurav from '../../images/meettheteamImages/gaurav.jpg';
import Ketan from '../../images/meettheteamImages/ketan.jpg';
import Anay from '../../images/meettheteamImages/anay.jpeg';
import Vinuthna from '../../images/meettheteamImages/vinuthna.jpg';
import Gloria from '../../images/meettheteamImages/gloria.jpg';
import Mishka from '../../images/meettheteamImages/mishka.jpeg';
import Delvin from '../../images/meettheteamImages/delvin.jpg';
import Sadrac from '../../images/meettheteamImages/sadrac.jpg';
import Joyce from '../../images/meettheteamImages/joyce.jpg';
import Eddie from '../../images/meettheteamImages/eddie.jpeg';
import Kaung from '../../images/meettheteamImages/kaung.png';
import Will from '../../images/meettheteamImages/will.jpg';
import Brian from '../../images/meettheteamImages/brian.jpg';
import Shruti from '../../images/meettheteamImages/shruti.jpg';
import Manan from '../../images/meettheteamImages/manan.jpg';
import Jheel from '../../images/meettheteamImages/jheel.jpg';
import Sonia from '../../images/meettheteamImages/sonia.jpg';
import Nishant from '../../images/meettheteamImages/nishant.jpg';
import Jake from '../../images/meettheteamImages/jake villaseno.jpeg';
import Jose from '../../images/meettheteamImages/josue martinez.jpeg';
import Angelina from '../../images/meettheteamImages/angelina yee.jpg';
import Shambhavi from '../../images/meettheteamImages/shambhavi mittal.jpg';
import Ganesh from '../../images/meettheteamImages/ganesh kumarappan.jpg';
import Sardor from '../../images/meettheteamImages/sardor sobirov.jpg';
import Shreya from '../../images/meettheteamImages/shreya gupta.jpg';
import Ryan from '../../images/meettheteamImages/ryan rickey.jpg';
//.import Saleha from '../../images/meettheteamImages/DSC_1386 - Saleha Ahmedi.jpg';
import Viren from '../../images/meettheteamImages/viren nathan.jpg';
import Kevin from '../../images/meettheteamImages/kevin kim.jpeg';
import Sofia from '../../images/meettheteamImages/sofia nguyen.png';
import Maanasa from '../../images/meettheteamImages/maanasa prasad.png';
import Ali from '../../images/meettheteamImages/ali alani.png';
import Michael from '../../images/meettheteamImages/michael he.png';
import Cole from '../../images/meettheteamImages/cole.png'

const categories = [
  {
    id: 1,
    name: 'CSES Board',
    members: [
      { name: 'Nabil Khoury', title: 'Co-President', photo: Nabil },
      { name: 'Samvrit Srinath', title: 'Co-President', photo: Samvrit },
      { name: 'Rahul Mistry', title: 'VP Internal', photo: Rahul },
      { name: 'Michael He', title: 'VP External', photo: Michael },
      { name: 'Sithu Soe', title: 'VP Operations', photo: Sithu },
      { name: 'Anuj Jain', title: 'VP Finance', photo: Anuj },
      { name: 'Maanasa Prasad', title: 'Event Director', photo: Maanasa },
      { name: 'Ishika Agrawal', title: 'Events Director', photo: Ishika },
      { name: 'Christopher Tams', title: 'Marketing Director', photo: Christopher },
      { name: 'Shambhavi Mittal', title: 'PR Director', photo: Shambhavi },
      { name: 'Cassandra Ponce Maldonado', title: 'Events Chair', photo: Cassandra },
      { name: 'Angelina Yee', title: 'Marketing Chair', photo: Angelina },
      { name: 'Rachel Paner', title: 'Design Chair', photo: Rachel },
      { name: 'Jose Martinez', title: 'Outreach Chair - Alumni', photo: Jose },
      { name: 'Ketan Jain', title: 'Outreach Chair - Student Organizations', photo: Ketan },
      { name: 'Cole Carter', title: 'Outreach Chair - Sponsors/Corporates', photo: Cole }
    ],
  },
  {
    id: 2,
    name: 'CSES Dev',
    members: [
      { name: 'Will Hsu', title: 'Engineering Manager', photo: Will },
      { name: 'Delvin Bajoua', title: 'Product Manager', photo: Delvin },
      { name: 'Shreya Gupta', title: 'Development Team Chair', photo: Shreya },
      { name: 'Hogun Kim', title: 'Project Coordinator', photo: shape },
      { name: 'Sadrac Santacruz Ibarra', title: 'Frontend Developer', photo: Sadrac },
      { name: 'Kaung Min Khant', title: 'Frontend Developer', photo: Kaung },
      { name: 'Sithu Soe', title: 'Frontend Developer', photo: Sithu },
      { name: 'Joyce Lu', title: 'Frontend Developer', photo: Joyce },
      { name: 'Eddie Ho', title: 'Backend Developer', photo: Eddie },
      { name: 'Brian Liu', title: 'Backend Developer', photo: Brian },
      { name: 'Ganesh Kumarappan', title: 'Backend Developer', photo: Ganesh },
      { name: 'Sardor Sobirov', title: 'Frontend Developer', photo: Sardor },
    ],
  },
  {
    id: 3,
    name: 'CSES WebDev',
    members: [
      { name: 'Shruti Bhamidipati', title: 'President', photo: Shruti },
      { name: 'Manan Patel', title: 'VP Finance', photo: Manan },
      { name: 'Jheel Gandhi', title: 'VP Design', photo: Jheel },
      { name: 'Sonia Fereidooni', title: 'VP Operations', photo: Sonia },
      { name: 'Ryan Rickey', title: 'Software Team Lead', photo: Ryan },
      { name: 'Jake Villaseno', title: 'UI/UX Designer', photo: Jake },
      //{ name: 'Saleha Ahmedi', title: 'WebDev', photo: Saleha},
    ],
  },
  {
    id: 4,
    name: 'CSES Open Source',
    members: [
      { name: 'Yashil Vora', title: 'President', photo: Yashil },
      { name: 'Mishka Jethwani', title: 'VP Operations', photo: Mishka },
      { name: 'Kevin Kim', title: 'Lead Software Engineer', photo: Kevin },
      { name: 'Sofia Nguyen', title: 'UI/UX Designer', photo: Sofia },
      { name: 'Song Hee Seo (Gloria)', title: 'Marketing Chair', photo: Gloria },
    ],
  },
  {
    id: 5,
    name: 'CSES Innovate',
    members: [
      { name: 'Viren Nathan', title: 'President', photo: Viren },
      { name: 'Ali Alani', title: 'CTO', photo: Ali },
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
  const verySmallScreen = useMediaQuery('(max-width:350px')

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
      <Grid container sx={{ marginTop: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {isMiddleScreen && (
          <Grid container item xs={12} justifyContent="center">
            {currentCategory.members
              .slice((currentPage - 1) * 6, currentPage * 6)
              .map((member, index) => (
                <Grid
                  item
                  xs={12}
                  sm={3.5}
                  md={3.1}
                  key={index}
                  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <div
                    style={{
                      width: '190px',
                      height: '190px',
                      overflow: 'hidden',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={member.photo}
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
              <Grid item xs={12} sm={3.5} md={3.1} key={index + currentCategory.members.length}>
                {/* Empty placeholder, no visible content */}
              </Grid>
            ))}
          </Grid>
        )}
        {isSmallScreen && (
          <Grid container item xs={12} justifyContent="center">
            {currentCategory.members
              .slice((currentPage - 1) * 6, currentPage * 6)
              .map((member, index) => (
                <Grid
                  item
                  xs={6}
                  sm={3.5}
                  md={0}
                  lg={3.1}
                  key={index}
                  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <div
                    style={{
                      width: verySmallScreen ? '120px': '140px',
                      height: verySmallScreen ? '120px': '140px',
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
                      fontSize: '16px',
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
                      fontSize: '12px',
                      marginTop: '-2%',
                    }}
                  >
                    {member.title}
                  </h5>
                </Grid>
              ))}

            {emptyMembers.map((member, index) => (
              <Grid item xs={12} sm={3.5} md={3.1} key={index + currentCategory.members.length}>
                {/* Empty placeholder, no visible content */}
              </Grid>
            ))}
          </Grid>
        )}

        {!isMiddleScreen && !isSmallScreen && (
          <Grid container item xs={9} justifyContent="center">
            {currentCategory.members
              .slice((currentPage - 1) * 6, currentPage * 6)
              .map((member, index) => (
                <Grid
                  item
                  xs={12}
                  sm={3.5}
                  md={0}
                  lg={3.1}
                  key={index}
                  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <div
                    style={{
                      width: '200px',
                      height: '200px',
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
              <Grid item xs={12} sm={3.5} md={3.1} lg={3.1} key={index + currentCategory.members.length}>
                {/* Empty placeholder, no visible content */}
              </Grid>
            ))}
          </Grid>
        )}

        <Grid
          container
          item
          xs={12}
          sm={15}
          md={12}
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
            md={9}
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
