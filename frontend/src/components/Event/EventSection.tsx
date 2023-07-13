import React from 'react';
import EventBox from './Event';
import { event_style } from './styles';
import Button from '../Button/Button';

import Stack from 'react-bootstrap/Stack';

const EventSection = () => {
  return (
    <div>
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
      <Button size="medium" text="This Week" onClick={() => console.log('click')}></Button>
      <Button size="medium" text="This Month" onClick={() => console.log('click')}></Button>

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
      <Button size="medium" text="See All Events ->" onClick={() => console.log('click')}></Button>

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
    </div>
  );
};

export default EventSection;
