import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import bgTop from '../../images/shape.svg';
import bgBtm from '../../images/shape.svg';
import { event_style } from './styles';
import EventBox from '../Event/Event';
import Button from '../Button/Button';

interface EventData {
  calendar_link: string;
  description: string;
  end_time: string;
  instagram_link: string;
  location: string;
  start_time: string;
  title: string;
  _id: string;
}
const Events = () => {
  const styles = event_style();

  const [upcomingEvents, setUpcomingEvents] = useState<EventData[]>([]);
  const [pastEvents, setPastEvents] = useState<EventData[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  useEffect(() => {
    let upcomingEventsEndpoint = 'http://127.0.0.1:5000/api/v1/events?type=upcoming';
    let pastEventsEndpoint = 'http://127.0.0.1:5000/api/v1/events?type=past';

    const fetchUpcomingEvents = async () => {
      try {
        if (selectedYear) {
          upcomingEventsEndpoint += `&year=${selectedYear}`;
        }
        if (selectedMonth) {
          upcomingEventsEndpoint += `&month=${selectedMonth}`;
        }

        const response = await fetch(upcomingEventsEndpoint);
        const data = await response.json();
        setUpcomingEvents(data);
      } catch (error) {
        console.error('Error fetching upcoming events:', error);
      }
    };

    const fetchPastEvents = async () => {
      try {
        if (selectedYear) {
          pastEventsEndpoint += `&year=${selectedYear}`;
        }
        if (selectedMonth) {
          pastEventsEndpoint += `&month=${selectedMonth}`;
        }

        const response = await fetch(pastEventsEndpoint);
        const data = await response.json();
        setPastEvents(data);
      } catch (error) {
        console.error('Error fetching past events:', error);
      }
    };

    fetchUpcomingEvents();
    fetchPastEvents();
  }, [selectedYear, selectedMonth]);

  const [displayedFutureEvents, setDisplayedFutureEvents] = useState(upcomingEvents);
  const [displayedPastEvents, setDisplayedPastEvents] = useState(pastEvents);
  const [isThisWeekClicked, setIsThisWeekClicked] = useState(false);
  const [isThisMonthClicked, setIsThisMonthClicked] = useState(false);
  const [is2023Clicked, setIs2023Clicked] = useState(false);

  const handleThisWeekClick = () => {
    if (isThisWeekClicked) {
      setDisplayedFutureEvents(upcomingEvents);
      setIsThisWeekClicked(false);
    } else {
      const now = new Date().getTime();
      const oneWeekAfter = now + 7 * 24 * 60 * 60 * 1000;

      const thisWeekEvents = upcomingEvents.filter(
        (event) =>
          new Date(event.start_time).getTime() >= now &&
          new Date(event.start_time).getTime() <= oneWeekAfter,
      );

      setDisplayedFutureEvents(thisWeekEvents);
      setIsThisWeekClicked(true);
    }
  };

  const handleThisMonthClick = () => {
    if (isThisMonthClicked) {
      setDisplayedFutureEvents(upcomingEvents);
      setIsThisMonthClicked(false);
    } else {
      const now = new Date().getTime();
      const oneMonthAfter = now + 30 * 24 * 60 * 60 * 1000;

      const thisMonthEvents = upcomingEvents.filter(
        (event) =>
          new Date(event.start_time).getTime() >= now &&
          new Date(event.start_time).getTime() <= oneMonthAfter,
      );

      setDisplayedFutureEvents(thisMonthEvents);
      setIsThisMonthClicked(true);
    }
  };

  const handle2023 = () => {
    if (is2023Clicked) {
      setDisplayedPastEvents(pastEvents);
      setIs2023Clicked(false);
    } else {
      const year2023Events = pastEvents.filter((event) => {
        const endDate = new Date(event.end_time);
        return endDate.getFullYear() === 2023;
      });

      setDisplayedPastEvents(year2023Events);
      setIs2023Clicked(true);
    }
  };

  // Render EventBoxes using map
  const renderEventBoxes = (events: EventData[]) => {
    return events.map((eventData) => (
      <React.Fragment key={eventData._id}>
        <EventBox
          title={eventData.title}
          targetDate={new Date(eventData.end_time)}
          location={eventData.location}
          calendar_link={eventData.calendar_link}
          description={eventData.description}
          end_time={eventData.end_time}
          instagram_link={eventData.instagram_link}
          start_time={eventData.start_time}
          _id={eventData._id}
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
    ));
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

        {/* Render EventBoxes for future events */}
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
          {renderEventBoxes(upcomingEvents)}
        </div>

        {/* ... (previous code) */}

        {/* Render EventBoxes for past events */}
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
          {renderEventBoxes(pastEvents)}
        </div>
      </Container>
    </div>
  );
};

export default Events;
