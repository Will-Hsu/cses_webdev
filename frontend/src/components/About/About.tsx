import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { Container, Box, Grid, createTheme, useMediaQuery } from '@mui/material';
import bgTop from '../../images/shape2.svg';
import bgBtm from '../../images/shape2.svg';
import shape from '../../images/shape.svg';
import previous from '../../images/previous.png';
import next from '../../images/next.png';
import { aboutStyles } from './styles';
import blankPhoto from '../../images/aboutpagephoto.png';
import books from '../../images/aboutbooks.png';
import lightBulb from '../../images/aboutlightbulb.png';
import Nabil from '../../images/meettheteamImages/nabil.jpg';
import Samvrit from '../../images/meettheteamImages/samvrit.jpeg';
import Anuj from '../../images/meettheteamImages/anuj.jpg';
import Sithu from '../../images/meettheteamImages/sithu.jpg';
import Rahul from '../../images/meettheteamImages/rahul.jpg';
import Ishika from '../../images/meettheteamImages/ishika.jpg';
import Yashil from '../../images/meettheteamImages/yashil.jpg';
import Cassandra from '../../images/meettheteamImages/cassandra.png';
import Sidhant from '../../images/meettheteamImages/sidhant.jpg';
import Rachel from '../../images/meettheteamImages/rachel.jpg';
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

const categories = [
  {
    id: 1,
    name: 'CSES Board',
    members: [
      { name: 'Nabil Khoury', title: 'Co-President', photo: Nabil },
      { name: 'Samvrit Srinath', title: 'Co-President', photo: Samvrit },
      { name: 'Rahul Mistry', title: 'VP Internal', photo: Rahul },
      { name: 'Sithu Soe', title: 'VP External', photo: Sithu },
      { name: 'Anuj Jain', title: 'VP Finance', photo: Anuj },
      { name: 'Cassandra Ponce Maldonado', title: 'Events Chair', photo: Cassandra },
      { name: 'Sidhant Rohatgi', title: 'Events Chair', photo: Sidhant },
      { name: 'Christopher Tams', title: 'Marketing Chair', photo: Christopher },
      { name: 'Nishant Begani', title: 'Marketing Chair', photo: Nishant },
      { name: 'Ishika Agrawal', title: 'DEI Chair', photo: Ishika },
      { name: 'Rachel Paner', title: 'Design Chair', photo: Rachel },
      { name: 'Yashil Vora', title: 'Projects Chair', photo: Yashil },
    ],
  },
  {
    id: 2,
    name: 'CSES Officers',
    members: [
      { name: 'Gaurav Nair', title: 'Events Officer', photo: Gaurav },
      { name: 'Arnav Kamdar', title: 'Events Officer', photo: shape },
      { name: 'Anay Mulay', title: 'Events Officer', photo: Anay },
      { name: 'Mishka Jethwani', title: 'Events Officer', photo: Mishka },
      { name: 'Ketan Jain', title: 'Marketing Officer', photo: Ketan },
      { name: 'Song Hee Seo (Gloria)', title: 'Marketing Officer', photo: Gloria },
      { name: 'Vinuthna Maradana', title: 'Marketing Officer', photo: Vinuthna },
    ],
  },
  {
    id: 3,
    name: 'Internal Webdev',
    members: [
      { name: 'Will Hsu', title: 'Engineering Manager', photo: Will },
      { name: 'Delvin Bajoua', title: 'Product Manager', photo: Delvin },
      { name: 'Sadrac Santacruz Ibarra', title: 'Frontend Developer', photo: Sadrac },
      { name: 'Kaung Min Khant', title: 'Frontend Developer', photo: Kaung },
      { name: 'Sithu Soe', title: 'Frontend Developer', photo: Sithu },
      { name: 'Joyce Lu', title: 'Frontend Developer', photo: Joyce },
      { name: 'Eddie Ho', title: 'Backend Developer', photo: Eddie },
      { name: 'Yashil Vora', title: 'Backend Developer', photo: Yashil },
      { name: 'Brian Liu', title: 'Backend Developer', photo: Brian },
      { name: 'Hogun Kim', title: 'Project Coordinator', photo: shape },
    ],
  },
  {
    id: 4,
    name: 'External Webdev',
    members: [
      { name: 'Shruti Bhamidipati', title: 'President', photo: Shruti },
      { name: 'Manan Patel', title: 'VP Finance', photo: Manan },
      { name: 'Jheel Gandhi', title: 'VP Design', photo: Jheel },
      { name: 'Sonia Fereidooni', title: 'VP Operations', photo: Sonia },
    ],
  },
];

const About = () => {
  const navigate = useNavigate();
  const theme = createTheme();
  const styles = aboutStyles();
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const isMiddleScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  const membersPerPage = 6;
  const remainingSpots = membersPerPage - (currentCategory.members.length % membersPerPage);

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

  // Calculate the number of members displayed on the current page
  const membersDisplayed = currentCategory.members.slice((currentPage - 1) * 6, currentPage * 6);

  // Define the threshold for different margin values
  const marginThreshold = 3;

  // Check if there are fewer than 3 members displayed
  const areFewMembers = membersDisplayed.length < marginThreshold;

  // Define the margin values based on the number of members displayed
  const marginTopValue = areFewMembers ? '3%' : '-50%';

  return (
    <div style={{ position: 'relative' }}>
      <Box sx={styles.root}>
        <Box sx={styles.backgroundImage}>
          <img src={bgTop} alt="bg1" style={{ ...styles.bg1, position: 'absolute' }} />
          <img src={bgBtm} alt="bg2" style={{ ...styles.bg2, position: 'absolute' }} />
        </Box>
        <Container maxWidth="xl" sx={styles.body}>
          <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
            <Grid item sm={6} md={4} lg={3}>
              <img src={blankPhoto} alt="img" />
            </Grid>
            <Grid item sm={6} md={5} lg={5}>
              <Box
                sx={{
                  color: 'white',
                  textAlign: { lg: 'left', sm: 'left', xs: 'center' },
                  fontSize: '1em',
                }}
              >
                <h1
                  style={{
                    fontFamily: 'Chakra Petch',
                    fontSize: '65px',
                    fontWeight: '700',
                    marginTop: '0',
                  }}
                >
                  WHAT IS CSES?
                </h1>
              </Box>
              <p style={{ color: 'white', fontSize: '20px' }}>
                CSES is the Computer Science and Engineering Society at UCSD that focuses on the
                professional development of CSE students and students interested in computing
                through various programs and career development events.
              </p>
            </Grid>
          </Grid>
          <h1
            style={{
              color: 'white',
              marginTop: '10%',
              textAlign: 'center',
              fontFamily: 'Chakra Petch',
              fontSize: '65px',
              fontWeight: '700',
            }}
          >
            WHAT DO WE DO?
          </h1>
          <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
            <Grid item sm={5} lg={3}>
              <img src={books} alt="img" style={{ width: '90%' }} />
            </Grid>
            <Grid item sm={6} lg={5}>
              <Box sx={{ color: 'white', textAlign: { lg: 'left', sm: 'left', xs: 'center' } }}>
                <h1>Our History</h1>
              </Box>
              <p style={{ color: 'white', fontSize: '20px' }}>
                CSES was the first CSE organization at UCSD starting nearly twenty years ago, and we
                have innovated over the years to stay relevant in serving the CSE community. We aim
                to continue innovating and improving, so we could continue to serve this community
                for another twenty years.
              </p>
            </Grid>
          </Grid>
          {!isSmallScreen && (
            <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
              <Grid item sm={6.5} lg={5}>
                <Box sx={{ color: 'white', textAlign: { lg: 'left', sm: 'left', xs: 'center' } }}>
                  <h1>Our Future</h1>
                </Box>
                <p style={{ color: 'white', width: '85%', fontSize: '20px' }}>
                  Our mission statement is to help our members get professional opportunities while
                  fostering a network of individuals. We do this through quarterly career fairs,
                  programs for career development, and project opportunities to gain experience.
                </p>
              </Grid>
              <Grid item sm={4.5} lg={3}>
                <img src={lightBulb} alt="img" style={{ marginLeft: '10%', width: '65%' }} />
              </Grid>
            </Grid>
          )}
          {isSmallScreen && (
            <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
              <Grid item sm={5} lg={3}>
                <img src={lightBulb} alt="img" />
              </Grid>
              <Grid item sm={6} lg={5}>
                <Box sx={{ color: 'white', textAlign: { lg: 'left', sm: 'center', xs: 'center' } }}>
                  <h1>Our Future</h1>
                </Box>
                <p style={{ color: 'white', fontSize: '20px' }}>
                  Our mission statement is to help our members get professional opportunities while
                  fostering a network of individuals. We do this through quarterly career fairs,
                  programs for career development, and project opportunities to gain experience.
                </p>
              </Grid>
            </Grid>
          )}
          <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
            <Grid item sm={5} lg={3}>
              <div style={{ width: '250px', height: '250px', backgroundColor: 'grey' }}></div>
            </Grid>
            <Grid item sm={6} lg={5}>
              <Box
                sx={{
                  color: 'white',
                  textAlign: { lg: 'left', sm: 'center', xs: 'center' },
                  fontSize: { xs: '0.9em', sm: '1em', lg: '1em' },
                }}
              >
                <h1>What's in store for me?</h1>
              </Box>
              <p style={{ color: 'white', fontSize: '20px' }}>
                Check out amazing events we have planned as well as the opportunities we have for
                members.
              </p>
              <Box
                sx={{
                  marginLeft: '-2%',
                  display: 'flex',
                  justifyContent: { xs: 'center', sm: 'left', lg: 'left' },
                }}
              >
                <div style={{ fontFamily: 'Chakra Petch' }}>
                  <Button
                    size="large"
                    text="See Opportunities ->"
                    onClick={() => navigate('/opportunities')}
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
          {!isSmallScreen && (
            <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
              <Grid item sm={6.5} lg={5}>
                <Box sx={{ color: 'white', textAlign: { lg: 'left', sm: 'center', xs: 'center' } }}>
                  <h1>How do I join?</h1>
                </Box>
                <Box sx={{ color: 'white', textAlign: { lg: 'left', sm: 'left', xs: 'center' } }}>
                  <p style={{ color: 'white', fontSize: '20px' }}>
                    Check out amazing events we have planned as well as the opportunities we have
                    for members.
                  </p>
                  <Box
                    sx={{
                      marginLeft: '-2%',
                      display: 'flex',
                      justifyContent: { xs: 'center', sm: 'left', lg: 'left' },
                    }}
                  >
                    <Button
                      size="large"
                      text="Become a Member ->"
                      onClick={() => navigate('/membership')}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={4.5} lg={3}>
                <div style={{ width: '250px', height: '250px', backgroundColor: 'grey' }}></div>
              </Grid>
            </Grid>
          )}

          {isSmallScreen && (
            <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
              <Grid item sm={5} lg={3}>
                <div style={{ width: '250px', height: '250px', backgroundColor: 'grey' }}></div>
              </Grid>
              <Grid item sm={6} lg={5}>
                <Box sx={{ color: 'white', textAlign: { lg: 'left', sm: 'center', xs: 'center' } }}>
                  <h1>How do I join?</h1>
                </Box>
                <p style={{ color: 'white' }}>
                  Check out amazing events we have planned as well as the opportunities we have for
                  members.
                </p>
                <Box
                  sx={{
                    marginLeft: '-2%',
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'left', lg: 'left' },
                  }}
                >
                  <Button
                    size="large"
                    text="Become a Member ->"
                    onClick={() => navigate('/opportunities')}
                  />
                </Box>
              </Grid>
            </Grid>
          )}

          <Grid item xs={12} sm={4.5} md={5}>
            <Box
              sx={{
                ...styles.mainTitleBottom,
                textAlign: 'center',
              }}
            >
              MEET THE TEAM!
            </Box>
          </Grid>

          <Grid container sx={{ marginTop: '5%', display: 'flex', justifyContent: 'center' }}>
            {categories.map((category) => (
              <Grid item md={1.6} key={category.id}>
                <Button
                  size="large"
                  text={category.name}
                  onClick={() => handleCategoryChange(category)}
                />
              </Grid>
            ))}
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

            {!isMiddleScreen && (
              <Grid container item xs={9} justifyContent="center">
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
                  <Grid item xs={12} sm={3.5} md={3.1} key={index + currentCategory.members.length}>
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
                    style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                  >
                    <img src={previous} alt="img" style={{ width: 30, height: 30 }} />
                  </button>
                </Grid>
                <Grid item>
                  <button
                    style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(currentCategory.members.length / 6)}
                  >
                    <img src={next} alt="img" style={{ width: 30, height: 30 }} />
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default About;
