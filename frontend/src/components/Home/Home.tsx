import React from 'react';
import Button from '../Button/Button';
import { Container } from '@mui/material';
import background from '../../images/home_bg.svg';
import EventBox from '../Events/Event';
import { event_style } from '../Events/styles';
// Use EventBox component in your Home component



const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img src={background} alt="bg" style={{ width: '100%' }} />
      <Container maxWidth="xl" style={{ position: 'absolute', top: '83px' }}>
        <div style={{ color: 'white' }}>TODO</div>
        <Button size="medium" text="See All Events ->" onClick={() => console.log('click')} />

        <div style={{ color: 'white' }}><h2>Upcoming Events.</h2></div>

        <div 
          style={{ 
            color: 'white',
            

          }}>
          <EventBox 
            targetDate={new Date('2023-08-31T00:00:00')} 
            location={String(true)} 
            style={event_style()}
          />
        </div>
        
      </Container>
    </div>

    


  );
};

export default Home;
