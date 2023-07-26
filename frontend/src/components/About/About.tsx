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
import Anuj from '../../images/Anuj_Jain_CSES_VP-Finance.jpg';
import Cassandra from '../../images/Cassandra_PonceMaldonado_CSES_EventChair.png';
import Nabil from '../../images/Nabil_Khoury_CSES_Co-President.jpg';
import Rahul from '../../images/Rahul_Mistry_CSES_VP Internal.jpg';
import Samvrith from '../../images/Samvrit_Srinath_CSES_Co-President.jpeg';
import Sithu from '../../images/Sithu_Soe_CSES_VP External.jpg';
import Christopher from '../../images/christopher_tams_marketing_chair.png'
import Yashil from '../../images/Yashil_Vora_CSES_Projects_Chair.jpg';
import Rachel from '../../images/Rachel_Paner_CSES_Design_Chair.jpg';
import Nishant from '../../images/Nishant_Begani_CSES_MarketingChair.jpg';
import Ishika from '../../images/Ishika_Agrawal_CSES_DEIChair.jpg'
import Sidhant from '../../images/SidhantRohatgi CSES EventChair.jpg'
import Brian from '../../images/brian_liu_cses_webdev_backend_developer.jpg.jpg';
import Delvin from '../../images/Delvin_Bajoua_CSES_ProductManager.jpg';
import Eddie from '../../images/Eddie_Ho_CSES_WebDev_Backend-Developer.jpeg';
import Joyce from '../../images/Joyce_Lu_CSES_WebDeveloper.jpg';
import Kaung from '../../images/Kaung Min_Khant_CSES WebDev_Frontend Developer.png';
import Sadrac from '../../images/Sadrac_Santacruz_Ibarra_Web_Developer.jpg';
import Will from '../../images/Will_Hsu_CSES_WebDev_EngineeringManager.jpg'

const categories = [
  {
    id: 1,
    name: 'CSES Board',
    members: [
      { name: 'Nabil Khoury', title: 'Co-President', photo: Nabil },
      { name: 'Samvrith Srinath', title: 'Co-President', photo: Samvrith },
      { name: 'Rahul Mistry', title: 'VP Internal', photo: Rahul },
      { name: 'Sithu Soe', title: 'VP External', photo: Sithu },
      { name: 'Anuj Jain', title: 'VP Finance', photo: Anuj },
      { name: 'Cassandra Pounce Maldonado', title: 'Events Chair', photo: Cassandra },
      { name: 'Sidhant Rohatgi', title: 'Events Chair', photo: Sidhant },
      { name: 'Christopher Tams', title: 'Marketing Chair', photo: Christopher },
      { name: 'Nishant Begani', title: 'Marketing Chair', photo: Nishant },
      { name: 'Rachel Paner', title: 'Design Chair', photo: Rachel },
      { name: 'Ishika Agrawal', title: 'DEI Chair', photo: Ishika },
      { name: 'Yashil Vora', title: 'Projects Chair', photo: Yashil },
    ],
  },
  {
    id: 2,
    name: 'CSES Officers',
    members: [
      { name: 'Member 2.1', title: 'Title 1', photo: shape },
      { name: 'Member 2.2', title: 'Title 2', photo: shape },
      { name: 'Member 2.3', title: 'Title 3', photo: shape },
      { name: 'Member 2.4', title: 'Title 4', photo: shape },
      { name: 'Member 2.5', title: 'Title 5', photo: shape },
      { name: 'Member 2.6', title: 'Title 6', photo: shape },
      { name: 'Member 2.7', title: 'Title 6', photo: shape },
      { name: 'Member 2.8', title: 'Title 6', photo: shape },
      { name: 'Member 2.9', title: 'Title 6', photo: shape },
      { name: 'Member 2.10', title: 'Title 6', photo: shape },
    ],
  },
  {
    id: 3,
    name: 'CSES WebDev Internal',
    members: [
      { name: 'Will Hsu', title: 'Engineering Manager', photo: Will },
      { name: 'Delvin Bajoua', title: 'Product Manager', photo: Delvin },
      { name: 'Kaung Min Khant', title: 'Frondend Developer', photo: Kaung },
      { name: 'Sadra Santacruz Ibarra', title: 'Frontend Developer', photo: Sadrac },
      { name: 'Sithu Soe', title: 'Frontend Developer', photo: Sithu },
      { name: 'Joyce', title: 'Frontend Developer', photo: Joyce },
      { name: 'Eddie Ho', title: 'Backend Developer', photo: Eddie },
      { name: 'Yashil Vora', title: 'Backend Developer', photo: Yashil },
      { name: 'Brian Li', title: 'Backend Developer', photo: Brian },
    ],
  },
  {
    id: 4,
    name: 'CSES WebDev External',
    members: [
      { name: 'Member 4.1', title: 'Title 1', photo: shape },
      { name: 'Member 4.2', title: 'Title 2', photo: shape },
      { name: 'Member 4.3', title: 'Title 3', photo: shape },
      { name: 'Member 4.4', title: 'Title 4', photo: shape },
      { name: 'Member 4.5', title: 'Title 5', photo: shape },
      { name: 'Member 4.6', title: 'Title 6', photo: shape },
      { name: 'Member 4.7', title: 'Title 6', photo: shape },
    ],
  },
  {
    id: 5,
    name: 'Category 5',
    members: [
      { name: 'Member 5.1', title: 'Title 1', photo: shape },
      { name: 'Member 5.2', title: 'Title 2', photo: shape },
      { name: 'Member 5.3', title: 'Title 3', photo: shape },
      { name: 'Member 5.4', title: 'Title 4', photo: shape },
      { name: 'Member 5.5', title: 'Title 5', photo: shape },
      { name: 'Member 5.6', title: 'Title 6', photo: shape },
    ],
  },
];

const About = () => {
  const navigate = useNavigate();
  const theme = createTheme();
  const styles = aboutStyles();
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  const membersPerPage = 6;
  const remainingSpots = membersPerPage - (currentCategory.members.length % membersPerPage);

  const emptyMembers = Array.from({ length: remainingSpots }).map((_, index) => ({
    name: `Empty Member ${index + 1}`,
    title: 'Empty Title',
    photo: 'blankSquare',
  }));

  const handleCategoryChange = (category: typeof categories[number]) => {
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
    <div style={{position: 'relative'}}>
     <Box sx={styles.root}>
       <Box>
         <img src={bgTop} alt="bg1" style={styles.bg1} />
         <img src={bgBtm} alt="bg2" style={styles.bg2} />
       </Box>
     <Container maxWidth="xl" sx={styles.body}>
       <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
         <Grid item sm={4.5} lg={2.5}>
           <img src={blankPhoto} alt="img" />
         </Grid>
         <Grid item sm={6} lg={4}>
           <Box
             sx={{
               color: 'white',
               textAlign: { lg: 'left', sm: 'left', xs: 'center' },
               fontSize: '1em',
             }}
           >
             <h1 style={{fontFamily: 'Chakra Petch'}}>WHAT IS CSES?</h1>
           </Box>
           <p style={{ color: 'white' }}>
             CSES is the Computer Science and Engineering Society at UCSD that focuses on the
             professional development of CSE students and students interested in computing through
             various programs and career development events.
           </p>
         </Grid>
       </Grid>
       <h1 style={{ color: 'white', marginTop: '10%', textAlign: 'center', fontFamily: 'Chakra Petch'}}>WHAT DO WE DO?</h1>
       <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
         <Grid item sm={5} lg={3}>
           <img src={books} alt="img" />
         </Grid>
         <Grid item sm={6} lg={5}>
           <Box sx={{ color: 'white', textAlign: { lg: 'left', sm: 'left', xs: 'center' } }}>
             <h1>Our History</h1>
           </Box>
           <p style={{ color: 'white' }}>
             CSES was the first CSE organization at UCSD starting nearly twenty years ago, and we
             have innovated over the years to stay relevant in serving the CSE community. We aim to
             continue innovating and improving, so we could continue to serve this community for
             another twenty years.
           </p>
         </Grid>
       </Grid>
       {!isSmallScreen && (
         <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
           <Grid item sm={6.5} lg={5}>
             <Box sx={{ color: 'white', textAlign: { lg: 'left', sm: 'left', xs: 'center' } }}>
               <h1>Our Future</h1>
             </Box>
             <p style={{ color: 'white' }}>
               Our mission statement is to help our members get professional opportunities while
               fostering a network of individuals. We do this through quarterly career fairs,
               programs for career development, and project opportunities to gain experience.
             </p>
           </Grid>
           <Grid item sm={4.5} lg={3}>
             <img src={lightBulb} alt="img" style={{ marginLeft: '10%' }} />
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
             <p style={{ color: 'white' }}>
               Our mission statement is to help our members get professional opportunities while
               fostering a network of individuals. We do this through quarterly career fairs,
               programs for career development, and project opportunities to gain experience.
             </p>
           </Grid>
         </Grid>
       )}
       <Grid container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
         <Grid item sm={5} lg={3}>
           <img src={books} alt="img" />
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
            <div style={{fontFamily: 'Chakra Petch'}}>
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
                   onClick={() => navigate('/membership')}
                 />
               </Box>
             </Box>
           </Grid>
           <Grid item sm={4.5} lg={3}>
             <img src={books} alt="img" style={{ marginLeft: '10%' }} />
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




       <Grid item xs={12} sm={4.5} lg={5}>
         <Box
           sx={{
             ...styles.mainTitleBottom,
             textAlign: 'center'
           }}>
           MEET THE TEAM!
         </Box>
       </Grid>


       <Grid container sx={{ marginTop: '5%', display: 'flex', justifyContent: 'center' }}>
       {categories.map((category) => (
         <Grid item lg={1.5} key={category.id}>
           <Button size="large" text={category.name} onClick={() => handleCategoryChange(category)} />
         </Grid>
       ))}
     </Grid>


    
     <Grid container sx={{ marginTop: '1%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       <Grid container item xs={12} justifyContent="center" >
         {currentCategory.members
           .slice((currentPage - 1) * 6, currentPage * 6)
           .map((member, index) => (
             <Grid item xs={12} sm={3.5} lg={3.1} key={index}>
               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                 <img src={member.photo} alt="img" style={{ width: 300, height: 300 }} />
               </div>
               <h3 style={{ color: 'white', textAlign: 'center' }}>{member.name}</h3>
               <h5 style={{ color: 'white', textAlign: 'center' }}>{member.title}</h5>
             </Grid>
           ))}


         {emptyMembers.map((member, index) => (
           <Grid item xs={12} sm={3.5} lg={3.1} key={index + currentCategory.members.length}>
             {/* Empty placeholder, no visible content */}
           </Grid>
         ))}


       </Grid>
       <Grid container item xs={12} sm={11} lg={12} justifyContent="center" sx={{ marginTop: { xs: '8%', sm: areFewMembers ? marginTopValue : '-100%', lg: marginTopValue }, marginBottom: {xs: areFewMembers ? '10%' : '0%', sm: areFewMembers ? '10%' : '0%', lg: areFewMembers ? '10%' : '0%'}}}>
         <Grid container item xs={5} sm={20} lg={10} justifyContent="space-between" sx={{ alignItems: 'center' }}>
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
