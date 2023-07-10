import React from 'react';
import EventBox from './Event';
import { event_style } from './styles';

const EventSection = () => {
  return (
    <div className="container" style={event_style().container}>
      <div className="centered_element" style={event_style().centered_element}>
        <EventBox
          title={'Student Summit'}
          targetDate={new Date('2023-08-31T00:00:00')}
          location={'Somewhere on campus'}
          style={event_style()}
        />
        <p style={event_style().spacer}>&nbsp;</p>
        <EventBox
          title={'Some other event'}
          targetDate={new Date('2023-08-23T04:00:00')}
          location={'Somewhere on campus'}
          style={event_style()}
        />
        <p style={event_style().spacer}>&nbsp;</p>
        <EventBox
          title={'Another event'}
          targetDate={new Date('2023-07-31T00:00:00')}
          location={'Somewhere on campus'}
          style={event_style()}
        />
      </div>
    </div>
  );
};

export default EventSection;
