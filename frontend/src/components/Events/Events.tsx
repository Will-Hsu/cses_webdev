import React from 'react';
import { Container } from '@mui/material';
import bgTop from '../../images/shape.svg';
import bgBtm from '../../images/shape.svg';
import { event_style } from './styles';
import EventBox from '../Event/Event';
import Button from '../Button/Button';

const Events = () => {
  const styles = event_style();

  // Data array for EventBoxes
  const eventBoxesData = [
    {
      title: 'Student Summit',
      targetDate: new Date('2023-08-31T00:00:00'),
      location: 'Somewhere on campus',
    },
    {
      title: 'Some other event',
      targetDate: new Date('2023-08-23T04:00:00'),
      location: 'Somewhere on campus',
    },
    {
      title: 'Another event',
      targetDate: new Date('2023-07-31T00:00:00'),
      location: 'Somewhere on campus',
    },
    // Add more EventBox data here if needed
  ];
  const handleThisWeekClick = () => {
    const thisWeekEventBoxes = eventBoxesData.filter(
      eventBox => EventBox.targetDate >= new Date() - new Date('7 days')
    );
    const thisMonthEventBoxes = eventBoxesData.filter(
      eventBox => EventBox.targetDate >= new Date() - new Date('30 days')
    );
    console.log(thisWeekEventBoxes);
    console.log(thisMonthEventBoxes);
  };

  const handleThisMonthClick = () => {
    const thisWeekEventBoxes = eventBoxesData.filter(
      eventBox => EventBox.targetDate >= new Date() - new Date('7 days').getTime()
    );
    const thisMonthEventBoxes = eventBoxesData.filter(
      eventBox => EventBox.targetDate >= new Date() - new Date('30 days').getTime()
    );
    console.log(thisWeekEventBoxes);
    console.log(thisMonthEventBoxes);
  };
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

        {/* Buttons for filtering events */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '38px',
            marginTop: '-20px',
          }}
        >
          <Button size="medium" text="This Week" onClick={handleThisWeekClick}></Button>
          <Button size="medium" text="This Month" onClick={handleThisMonthClick}></Button>
        </div>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

        {/* Render EventBoxes using map */}
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
          {eventBoxesData.map((eventData, index) => (
            <React.Fragment key={index}>
              <EventBox
                title={eventData.title}
                targetDate={eventData.targetDate}
                location={eventData.location}
              />
              {/* Add space between EventBoxes */}
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
            </React.Fragment>
          ))}
        </div>

        {/* Button for displaying all events */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '30px',
            marginTop: '20px',
          }}
        >
          
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

        {/* Buttons for filtering past events */}
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

        {/* Render Past EventBoxes using map */}
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
          {eventBoxesData.map((eventData, index) => (
            <React.Fragment key={index}>
              <EventBox
                title={eventData.title}
                targetDate={eventData.targetDate}
                location={eventData.location}
              />
              {/* Add space between EventBoxes */}
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
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Events;
