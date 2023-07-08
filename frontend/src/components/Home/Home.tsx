import React from 'react';
import Button from '../Button/Button';
import { Container } from '@mui/material';
import background from '../../images/home_bg.svg';
import EventBox from '../Events/Event';
import { event_style } from '../Events/styles';
import EventSection from '../Events/EventSection';
// Use EventBox component in your Home component

const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img src={background} alt="bg" style={{ width: '100%' }} />
      <Container maxWidth="xl" style={{ position: 'absolute', top: '83px' }}>
        <div
          style={{
            color: 'white',
            fontSize: '40px',
            fontFamily: 'Chakra Petch',
            marginLeft: '39px',
            marginTop: '117px',
            fontWeight: '700',
          }}
        >
          <h2>UPCOMING EVENTS.</h2>
        </div>

        {/* <EventSection></EventSection> */}
        <div
          style={{
            color: 'white',
            fontSize: '20px',
            fontFamily: 'Chakra Petch',
            fontWeight: '700',
            display: 'flex',
            flexDirection: 'row',

            marginLeft: '10rem',
            margin: 'auto',
            width: '50%',
          }}
        >
          <EventBox
            title={'Student Summit'}
            targetDate={new Date('2023-08-31T00:00:00')}
            location={'Somewhere on campus'}
            style={event_style()}
          />
          <p
            style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Chakra Petch',
              fontWeight: '500',
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <EventBox
            title={'Some othe event'}
            targetDate={new Date('2023-08-23T04:00:00')}
            location={'Somewhere on campus'}
            style={event_style()}
          />
          <p
            style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Chakra Petch',
              fontWeight: '500',
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <EventBox
            title={'Another event'}
            targetDate={new Date('2023-07-31T00:00:00')}
            location={'Somewhere on campus'}
            style={event_style()}
          />
        </div>
        <Button
          size="medium"
          text="See All Events ->"
          onClick={() => console.log('click')}
        ></Button>
      </Container>
    </div>
  );
};

export default Home;
