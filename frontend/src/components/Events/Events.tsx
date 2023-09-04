import React, { useState, useEffect } from 'react';
import { Container, ToggleButton } from '@mui/material';
import bgTop from '../../images/shape.svg';
import bgBtm from '../../images/shape.svg';
import { event_style } from './styles';
import EventBox from '../Event/Event';
import Button from '../Button/Button';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { buttonStyles } from '../Button/styles';
import { height } from '@mui/system';
import useMediaQuery from '../../hooks/useMediaQuery';

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
  const eventsContainerStyle: any = styles.eventsContainer;

  const [upcomingEvents, setUpcomingEvents] = useState<EventData[]>([]);
  const [pastEvents, setPastEvents] = useState<EventData[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isIpad = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  if (isDesktop) {
    // if desktop view set styles for desktop
    eventsContainerStyle.maxWidth = '100vw';
    eventsContainerStyle.overflowX = 'hidden';
    eventsContainerStyle.flexWrap = 'wrap' as 'wrap';
  }

  if (isIpad) {
    // if ipad view set styles for ipad
    eventsContainerStyle.maxWidth = '100vw';
    eventsContainerStyle.overflowX = 'hidden';
    eventsContainerStyle.flexWrap = 'wrap' as 'wrap';
  }

  if (isMobile) {
    // if mobile view set styles for mobile
    eventsContainerStyle.maxWidth = '100vw';
    eventsContainerStyle.width = '100%'; // Set width to 100% of the parent container
    eventsContainerStyle.padding = '0'; // Remove any padding
    eventsContainerStyle.margin = '0'; // Remove any margin
    eventsContainerStyle.overflowX = 'auto';
    eventsContainerStyle.overflowY = 'auto';
    eventsContainerStyle.flexWrap = 'wrap' as 'wrap';
  }

  useEffect(() => {
    // Set media queries

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
        setDisplayedFutureEvents(data);
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
        setDisplayedPastEvents(data);
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

      console.log(thisWeekEvents);

      setDisplayedFutureEvents(thisWeekEvents);
      setIsThisWeekClicked(true);
      setIsThisMonthClicked(false);
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

      console.log(thisMonthEvents);

      setDisplayedFutureEvents(thisMonthEvents);
      setIsThisWeekClicked(false);
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
      </React.Fragment>
    ));
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <img src={bgTop} alt="bg1" style={{ ...styles.bg1, position: 'absolute' }} />
      <img src={bgBtm} alt="bg2" style={{ ...styles.bg2, position: 'absolute' }} />
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
          <ToggleButtonGroup
            value="Timeframe"
            exclusive
            aria-label="Events Filter"
          >
            <ToggleButton
                  key="This Week"
                  value="This Week"
                  sx={{
                    ...buttonStyles(false),
                    marginRight:'0px',
                    marginLeft:'0px',
                    '&.MuiToggleButton-root.Mui-selected, &.MuiToggleButton-root.Mui-selected:hover': {
                      backgroundColor: 'grey',
                      color: 'white',
                    },
                  }}
                  onClick={handleThisWeekClick}
                  >
                  This Week
            </ToggleButton>
            <ToggleButton
                  key="This Month"
                  value="This Month"
                  sx={{
                    ...buttonStyles(false),
                    marginRight:'0px',
                    marginLeft:'0px',
                    '&.MuiToggleButton-root.Mui-selected, &.MuiToggleButton-root.Mui-selected:hover': {
                      backgroundColor: 'grey',
                      color: 'white',
                    },
                  }}
                  onClick={handleThisMonthClick}
                  >
                  This Month
            </ToggleButton>
          </ToggleButtonGroup>
          {/* <Button size="medium" text="This Week" onClick={handleThisWeekClick}></Button>
          <Button size="medium" text="This Month" onClick={handleThisMonthClick}></Button> */}
        </div>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        {/* Render EventBoxes for future events */}
        <div
          style={{
            ...eventsContainerStyle,
          }}
        >
          {renderEventBoxes(displayedFutureEvents)}
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

        <div style={{ ...eventsContainerStyle }}>
          {(displayedPastEvents.length === 0 && (
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
              No events found
            </div>
          )) ||
            renderEventBoxes(displayedPastEvents)}
        </div>
      </Container>
    </div>
  );
};

export default Events;
