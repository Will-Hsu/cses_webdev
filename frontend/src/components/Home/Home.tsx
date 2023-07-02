import React from 'react';
/*import Button from '../Button/Button';*/
import { Button, Container } from '@mui/material';
import background from '../../images/home_bg.svg';
import desktop from './Images/desktop.png'
import { homeStyles } from './styles';


const Home = () => {
  const styles = homeStyles();
  
  return (
    <div style={{ position: 'relative' }}>
      <img src={background} alt="bg" style={{ width: '100%' }} />
      <Container maxWidth="xl" style={{ position: 'absolute', top: '83px' }}>
        <div style={{ display: 'flex'}}>
          <div>
            <div style={{ color: 'white', fontSize: '100px', fontFamily: 'Chakra Petch', marginLeft: '99px', marginTop: '117px', fontWeight: '700'}}>Innovate.</div>
            <div style={{ color: 'white', fontSize: '100px', fontFamily: 'Chakra Petch', marginLeft: '99px', marginTop: '24px', fontWeight: '700'}}>Build.</div>
            <div style={{ color: 'white', fontSize: '100px', fontFamily: 'Chakra Petch', marginLeft: '99px', marginTop: '24px', fontWeight: '700'}}>Connect.</div>
            <div>
              <Button sx={styles.firstButton} onClick={() => console.log('click')}>
              Learn about us!
              </Button>
            </div>
          </div>
        <img src={desktop} alt="img" style={{ width: '50%', marginLeft: '150px', marginTop: '45px'}}/>
        </div>

        <div style={{ display: 'flex'}}>
          <div style={{ color: 'white', fontSize: '50px', fontFamily: 'Inter', marginLeft: '99px', marginTop: '150px', fontWeight: '600'}}>Join CSES today.</div>
          <div style={{ height: '129px', width: '232px', backgroundColor: '#F3C969', borderRadius: '0 20px 0px 0px', marginTop: '150px', marginLeft: '42px'}}>
            <div style={{ height: '113px', width: '224px', backgroundColor: '#FFF', float: 'right', borderRadius: '0 20px 0px 0px'}}>
              <div style={{ fontSize:'50px', fontFamily: 'Inter', fontWeight: '700', paddingLeft: '10px', paddingTop: '10px'}}>1000+</div>
              <div style={{ fontSize:'20px', fontFamily: 'Inter', fontWeight: '500', paddingLeft: '10px', paddingTop: '8px'}}>Members & counting.</div>
            </div>
          </div>
          <div style={{ height: '129px', width: '232px', backgroundColor: '#F3C969', borderRadius: '0 20px 0px 0px', marginTop: '150px', marginLeft: '32px'}}>
            <div style={{ height: '113px', width: '224px', backgroundColor: '#FFF', float: 'right', borderRadius: '0 20px 0px 0px'}}>
              <div style={{ fontSize:'50px', fontFamily: 'Inter', fontWeight: '700', paddingLeft: '10px', paddingTop: '10px'}}>n +</div>
              <div style={{ fontSize:'20px', fontFamily: 'Inter', fontWeight: '500', paddingLeft: '10px', paddingTop: '8px'}}>Another statistic!</div>
            </div>
          </div>
          <div style={{ height: '129px', width: '232px', backgroundColor: '#F3C969', borderRadius: '0 20px 0px 0px', marginTop: '150px', marginLeft: '32px'}}>
            <div style={{ height: '113px', width: '224px', backgroundColor: '#FFF', float: 'right', borderRadius: '0 20px 0px 0px'}}>
              <div style={{ fontSize:'50px', fontFamily: 'Inter', fontWeight: '700', paddingLeft: '10px', paddingTop: '10px'}}>1000+</div>
              <div style={{ fontSize:'20px', fontFamily: 'Inter', fontWeight: '500', paddingLeft: '10px', paddingTop: '8px'}}>Opportunities.</div>
            </div>
          </div>
        </div>
        <div>
          <Button sx={styles.secondButton} onClick={() => console.log('click')}>
            {'Become a Member ->'}
          </Button>
        </div>
        <div style={{ color: 'white' }}>TODO</div>
      </Container>
    </div>
  );
};

export default Home;
