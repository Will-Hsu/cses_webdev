import React from 'react';
import Button from '../Button/Button';
import { Container } from '@mui/material';
import background from '../../images/home_bg.svg';
import desktop from './Images/desktop.png'
import { homeStyles } from './styles';


const Home = () => {
  /*const styles = homeStyles();*/
  
  return (
    <div style={{ position: 'relative' }}>
      <img src={background} alt="bg" style={{ width: '100%' }} />
      <Container maxWidth="xl" style={{ position: 'absolute', top: '83px' }}>
        <div style={{ display: 'flex'}}>
          <div>
            <div style={{ color: 'white', fontSize: '100px', fontFamily: 'Chakra Petch', marginLeft: '99px', marginTop: '117px', fontWeight: '700'}}>Innovate.</div>
            <div style={{ color: 'white', fontSize: '100px', fontFamily: 'Chakra Petch', marginLeft: '99px', marginTop: '24px', fontWeight: '700'}}>Build.</div>
            <div style={{ color: 'white', fontSize: '100px', fontFamily: 'Chakra Petch', marginLeft: '99px', marginTop: '24px', fontWeight: '700'}}>Connect.</div>
            <div style={{fontSize: '25px', marginLeft: '99px', marginTop: '40px', fontFamily: 'Chakra Petch', fontWeight: '500' }}>
            {<Button size="large" text="Learn About Us!" onClick={() => console.log('click')} /> }
            </div>
          </div>
        <img src={desktop} alt="img" style={{ width: '50%', marginLeft: '150px', marginTop: '45px'}}/>
        </div>

        <div style={{ display: 'flex'}}>
          <div style={{ color: 'white', fontSize: '50px', fontFamily: 'Inter', marginLeft: '99px', marginTop: '150px', fontWeight: '600'}}>Join CSES today.</div>
          <div style={{ height: '105px', width: '205px', backgroundColor: '#F3C969', borderRadius: '0 20px 0px 0px', marginTop: '150px', marginLeft: '42px'}}>
            <div style={{ height: '93px', width: '194px', backgroundColor: '#FFF', float: 'right', borderRadius: '0 20px 0px 0px'}}>
              <div style={{ fontSize:'50px', fontFamily: 'Inter', fontWeight: '700', paddingLeft: '10px', paddingTop: '10px'}}>1000+</div>
              <div style={{ fontSize:'15px', fontFamily: 'Inter', fontWeight: '500', paddingLeft: '10px'}}>Members & counting.</div>
            </div>
          </div>
          <div style={{ height: '105px', width: '205px', backgroundColor: '#F3C969', borderRadius: '0 20px 0px 0px', marginTop: '150px', marginLeft: '32px'}}>
            <div style={{ height: '93px', width: '194px', backgroundColor: '#FFF', float: 'right', borderRadius: '0 20px 0px 0px'}}>
              <div style={{ fontSize:'50px', fontFamily: 'Inter', fontWeight: '700', paddingLeft: '10px', paddingTop: '10px'}}>n +</div>
              <div style={{ fontSize:'15px', fontFamily: 'Inter', fontWeight: '500', paddingLeft: '10px'}}>Another statistic!</div>
            </div>
          </div>
          <div style={{ height: '105px', width: '205px', backgroundColor: '#F3C969', borderRadius: '0 20px 0px 0px', marginTop: '150px', marginLeft: '32px'}}>
            <div style={{ height: '93px', width: '194px', backgroundColor: '#FFF', float: 'right', borderRadius: '0 20px 0px 0px'}}>
              <div style={{ fontSize:'50px', fontFamily: 'Inter', fontWeight: '700', paddingLeft: '10px', paddingTop: '10px'}}>1000+</div>
              <div style={{ fontSize:'15px', fontFamily: 'Inter', fontWeight: '500', paddingLeft: '10px'}}>Members & counting.</div>
            </div>
          </div>
        </div>
        <div style={{fontSize: '21px', marginLeft: '280px', marginTop: '0px', fontFamily: 'Chakra Petch', fontWeight: '500'}} >
        <Button size="large" text="Become a Member ->" onClick={() => console.log('click')} />
        </div>
        <div style={{ color: 'white' }}>TODO</div>
        <Button size="medium" text="See All Events ->" onClick={() => console.log('click')} />
      </Container>
    </div>
  );
};

export default Home;
