import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import bgTop from '../../images/shape.svg';
import bgBtm from '../../images/shape.svg';
import { event_style } from './styles';
import EventBox from '../Event/Event';
import Button from '../Button/Button';

const Events = () => {
  const styles = event_style();
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  useEffect(() => {
    // Make the API call to fetch upcoming events
    let upcomingEventsEndpoint = 'http://127.0.0.1:5000/api/v1/events?type=upcoming';
    if (selectedYear) {
      upcomingEventsEndpoint += `&year=${selectedYear}`;
    }
    if (selectedMonth) {
      upcomingEventsEndpoint += `&month=${selectedMonth}`;
    }

    fetch(upcomingEventsEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setUpcomingEvents(data);
      })
      .catch((error) => {
        console.error('Error fetching upcoming events:', error);
      });

    // Make the API call to fetch past events
    let pastEventsEndpoint = 'http://127.0.0.1:5000/api/v1/events?type=past';
    if (selectedYear) {
      pastEventsEndpoint += `&year=${selectedYear}`;
    }
    if (selectedMonth) {
      pastEventsEndpoint += `&month=${selectedMonth}`;
    }

    fetch(pastEventsEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setPastEvents(data);
      })
      .catch((error) => {
        console.error('Error fetching past events:', error);
      });
  }, [selectedYear, selectedMonth]);

  // Data array for EventBoxes
  const futureEventBoxesData = [
    {
      title: 'Student Summit',
      targetDate: new Date('2023-07-26T00:00:00'),
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
    // Add more Future EventBox data here if needed
  ];

  const pastEventBoxesData = [
    {
      title: 'Student Summit',
      targetDate: new Date('2023-03-31T00:00:00'),
      location: 'Somewhere on campus',
    },
    {
      title: 'Some other event',
      targetDate: new Date('2023-05-23T04:00:00'),
      location: 'Somewhere on campus',
    },
    {
      title: 'Another event',
      targetDate: new Date('2022-06-31T00:00:00'),
      location: 'Somewhere on campus',
    },
    // Add past EventBox data here
  ];

  const [displayedFutureEvents, setDisplayedFutureEvents] = useState(futureEventBoxesData);
  const [displayedPastEvents, setDisplayedPastEvents] = useState(pastEventBoxesData);
  const [isThisWeekClicked, setIsThisWeekClicked] = useState(false);
  const [isThisMonthClicked, setIsThisMonthClicked] = useState(false);
  const [is2023Clicked, setIs2023Clicked] = useState(false);

  const handleThisWeekClick = () => {
    if (isThisWeekClicked) {
      setDisplayedFutureEvents(futureEventBoxesData);
      setIsThisWeekClicked(false);
    } else {
      const now = new Date().getTime();
      const oneWeekAfter = now + 7 * 24 * 60 * 60 * 1000;

      const thisWeekEvents = futureEventBoxesData.filter(
        (event) => event.targetDate.getTime() >= now && event.targetDate.getTime() <= oneWeekAfter,
      );

      setDisplayedFutureEvents(thisWeekEvents);
      setIsThisWeekClicked(true);
    }
  };

  const handleThisMonthClick = () => {
    if (isThisMonthClicked) {
      setDisplayedFutureEvents(futureEventBoxesData);
      setIsThisMonthClicked(false);
    } else {
      const now = new Date().getTime();
      const oneMonthAfter = now + 30 * 24 * 60 * 60 * 1000;

      const thisMonthEvents = futureEventBoxesData.filter(
        (event) => event.targetDate.getTime() >= now && event.targetDate.getTime() <= oneMonthAfter,
      );

      setDisplayedFutureEvents(thisMonthEvents);
      setIsThisMonthClicked(true);
    }
  };

  const handle2023 = () => {
    if (is2023Clicked) {
      setDisplayedPastEvents(pastEventBoxesData);
      setIs2023Clicked(false);
    } else {
      const year2023Events = pastEventBoxesData.filter(
        (event) => event.targetDate.getFullYear() === 2023,
      );

      setDisplayedPastEvents(year2023Events);
      setIs2023Clicked(true);
    }
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
          {displayedFutureEvents.map((eventData, index) => (
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

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '30px',
            marginTop: '20px',
          }}
        ></div>

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
          <Button size="medium" text="2023" onClick={handle2023}></Button>
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
          {displayedPastEvents.map((eventData, index) => (
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
