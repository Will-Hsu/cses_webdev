import React from 'react';
import { Container } from '@mui/material';
import bgTop from '../../images/shape.svg';
import bgBtm from '../../images/shape.svg';
import { event_style } from './styles';
import EventBox from '../Event/Event';
import Button from '../Button/Button';

const Events = () => {
  const styles = event_style();

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <img src={bgTop} alt="bg1" style={styles.bg1} />
      <img src={bgBtm} alt="bg2" style={styles.bg2} />
      <Container maxWidth="xl" sx={styles.body}>
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
          <h2>EVENTS</h2>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '38px',
            marginTop: '-20px',
          }}
        >
          <Button size="medium" text="This Week" onClick={() => console.log('click')}></Button>
          <Button size="medium" text="This Month" onClick={() => console.log('click')}></Button>
        </div>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

        <div
          style={{
            color: 'white',
            fontSize: '20px',
            fontFamily: 'Chakra Petch',
            fontWeight: '700',
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '39px',
          }}
        >
          <EventBox
            title={'Student Summit'}
            targetDate={new Date('2023-08-31T00:00:00')}
            location={'Somewhere on campus'}
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
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '30px',
            marginTop: '20px',
          }}
        >
          <Button
            size="medium"
            text="See All Events ->"
            onClick={() => console.log('click')}
          ></Button>
        </div>

        {/* Past Event Section */}
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
          <h2> PAST EVENTS</h2>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '30px',
            marginTop: '-20px',
          }}
        >
          <Button size="medium" text="2023" onClick={() => console.log('click')}></Button>
        </div>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

        <div
          style={{
            color: 'white',
            fontSize: '20px',
            fontFamily: 'Chakra Petch',
            fontWeight: '700',
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '39px',
          }}
        >
          <EventBox
            title={'Student Summit'}
            targetDate={new Date('2023-08-31T00:00:00')}
            location={'Somewhere on campus'}
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
          />
        </div>
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
        <div
          style={{
            color: 'white',
            fontSize: '20px',
            fontFamily: 'Chakra Petch',
            fontWeight: '700',
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '39px',
          }}
        >
          <EventBox
            title={'Student Summit'}
            targetDate={new Date('2023-08-31T00:00:00')}
            location={'Somewhere on campus'}
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
          />
        </div>
      </Container>
    </div>
  );
};

export default Events;
