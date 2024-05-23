import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import bgTop from '../../images/shape.svg';
import bgBtm from '../../images/shape.svg';
import { event_style } from './styles';
import EventBox from '../Event/Event';
import MobileEventBox from '../Event/MobileEvent';
import Button from '../Button/Button';
import useMediaQuery from '../../hooks/useMediaQuery';
import { CircularProgress } from '@mui/material';

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
  // add state for page number
  const [pageNumberUpcoming, setPageNumberUpcoming] = useState(1);
  const [pageNumberPast, setPageNumberPast] = useState(1);

  // add state for the total number of pages
  const [totalPagesUpcoming, setTotalPagesUpcoming] = useState(1);
  const [totalPagesPast, setTotalPagesPast] = useState(1);

  // add state for the number of events per page
  const eventsPerPage = 6;

  const styles = event_style();
  const eventsContainerStyle: any = styles.eventsContainer;

  const [upcomingEvents, setUpcomingEvents] = useState<EventData[]>([]);
  const [pastEvents, setPastEvents] = useState<EventData[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(new Date().getFullYear()); // Default to current year
  const [selectedMonth] = useState<number | null>(null);
  const [pastEventYears, setPastEventYears] = useState<number[]>([]);


  const [displayedFutureEvents, setDisplayedFutureEvents] = useState(upcomingEvents);
  const [displayedPastEvents, setDisplayedPastEvents] = useState(pastEvents);
  const [isThisWeekClicked, setIsThisWeekClicked] = useState(false);
  const [isThisMonthClicked, setIsThisMonthClicked] = useState(false);
  // add state to keep track of the total pages based on the filtered events
  const [filteredTotalPagesPast, setFilteredTotalPagesPast] = useState(totalPagesPast);


  const [isLoading, setIsLoading] = useState(true);

  const paginate = (
    events: Array<EventData>,
    pageNumber: number,
    totalPages: number,
    type: string,
  ) => {
    let filteredEvents = events;
    if (type === 'past' && selectedYear !== null) {
      // If a year filter is applied, use the filtered past events
      filteredEvents = pastEvents.filter(event => new Date(event.end_time).getFullYear() === selectedYear);

    }

    if (type === 'upcoming') {
      setPageNumberUpcoming(pageNumber);
      setDisplayedFutureEvents(
        filteredEvents.slice((pageNumber - 1) * eventsPerPage, pageNumber * eventsPerPage),
      );
    } else {
      setPageNumberPast(pageNumber);
      setDisplayedPastEvents(
        filteredEvents.slice((pageNumber - 1) * eventsPerPage, pageNumber * eventsPerPage),
      );
    }
  };

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
    eventsContainerStyle.alignItems = 'flex-start';
    eventsContainerStyle.flexWrap = 'wrap' as 'wrap';
  }

  if (isMobile) {
    // if mobile view set styles for mobile
    eventsContainerStyle.width = '100%'; // Set width to 100% of the parent container
    eventsContainerStyle.padding = '0'; // Remove any padding
    eventsContainerStyle.overflowX = 'auto';
    eventsContainerStyle.overflowY = 'auto';
    eventsContainerStyle.flexWrap = 'wrap' as 'wrap';
    eventsContainerStyle.alignItems = 'flex-start';
  }

  useEffect(() => {
    // Set media queries
    let upcomingEventsEndpoint = `${process.env.REACT_APP_BACKEND_URL}/api/v1/events?type=upcoming`;
    let pastEventsEndpoint = `${process.env.REACT_APP_BACKEND_URL}/api/v1/events?type=past`;
  
    const fetchUpcomingEvents = async () => {
      try {
        const response = await fetch(upcomingEventsEndpoint);
        const data = await response.json();
        setTotalPagesUpcoming(Math.ceil(data.length / 6));
        setUpcomingEvents(data);
        paginate(data, 1, totalPagesUpcoming, 'upcoming');
      } catch (error) {
        console.error('Error fetching upcoming events:', error);
      }
    };
  
    const fetchPastEvents = async () => {
      try {
        const response = await fetch(pastEventsEndpoint);
        const data = await response.json();
        setTotalPagesPast(Math.ceil(data.length / 6));
        setPastEvents(data);
  
        // Extract years from past events and sort in descending order
        const years = Array.from(new Set(data.map((event: EventData) => new Date(event.end_time).getFullYear())))
          .sort((a, b) => (b as number) - (a as number)); // Explicit type casting for 'a' and 'b'
        setPastEventYears(years as number[]);
        
  
        paginate(data, 1, totalPagesPast, 'past');
      } catch (error) {
        console.error('Error fetching past events:', error);
      }
    };
  
    async function fetchData() {
      try {
        await Promise.all([fetchUpcomingEvents(), fetchPastEvents()]);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
  
    fetchData();
  }, [selectedYear, selectedMonth, totalPagesUpcoming, totalPagesPast, setTotalPagesUpcoming, setTotalPagesPast]);
  

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

      setDisplayedFutureEvents(thisMonthEvents);
      setIsThisWeekClicked(false);
      setIsThisMonthClicked(true);
    }
  };

  const handleYearClick = (year: number) => {
    if (selectedYear === year) {
      setSelectedYear(null); 
    } else {
      setSelectedYear(year); 
    }
  };
  
  useEffect(() => {
    // Filter events based on selected year
    const filterEventsByYear = (year: number, events: EventData[]) => {
      return events.filter((event) => {
        const eventYear = new Date(event.end_time).getFullYear();
        return eventYear === year;
      });
    };
  
    if (selectedYear !== null) {
      const filteredPastEvents = filterEventsByYear(selectedYear, pastEvents);
      setDisplayedPastEvents(filteredPastEvents);
      setFilteredTotalPagesPast(Math.ceil(filteredPastEvents.length / eventsPerPage));
      paginate(filteredPastEvents, 1, totalPagesPast, 'past');
    } else {
      setDisplayedPastEvents(pastEvents);
      setFilteredTotalPagesPast(Math.ceil(pastEvents.length / eventsPerPage));
      paginate(pastEvents, 1, totalPagesPast, 'past');
    }
  }, [selectedYear, pastEvents]); 
  
  
  // Render EventBoxes using map
  const renderEventBoxes = (events: EventData[]) => {
    return events.map((eventData) => {
      if (isMobile) {
        return (
          <MobileEventBox
            title={eventData.title}
            targetDate={new Date(eventData.end_time)}
            location={eventData.location}
            end_time={eventData.end_time}
            start_time={eventData.start_time}
            _id={eventData._id}
            pastEvent
          />
        );
      } else {
        return (
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
        );
      }
    });
  };

  const renderPastEventBoxes = (events: EventData[]) => {
    return events.map((eventData) => {
      if (isMobile) {
        return (
          <MobileEventBox
            title={eventData.title}
            targetDate={new Date(eventData.end_time)}
            location={eventData.location}
            end_time={eventData.end_time}
            start_time={eventData.start_time}
            _id={eventData._id}
            pastEvent
          />
        );
      } else {
        return (
          <React.Fragment key={eventData._id}>
            <EventBox
              title={eventData.title}
              targetDate={new Date(eventData.end_time)}
              location={eventData.location}
              calendar_link=''
              description={eventData.description}
              end_time={eventData.end_time}
              instagram_link=''
              start_time={eventData.start_time}
              _id={eventData._id}
              pastEvent
            />
          </React.Fragment>
        );
      }
    });
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <img src={bgTop} alt="bg1" style={{ ...styles.bg1, position: 'absolute' }} />
      <img src={bgBtm} alt="bg2" style={{ ...styles.bg2, position: 'absolute' }} />
      <Container maxWidth="xl" sx={styles.body} >
        <Grid item mt={6} mb={2} ml={5} 
        sx={{ color: 'white', fontFamily: 'Chakra Petch', fontSize: 'clamp(32px, 8vw, 65px)', fontWeight: '700' }}>
        EVENTS
      </Grid>

        {isLoading && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress size="3em" style={{ color: 'white' }} />
          </div>
        )}

        {/* Buttons for filtering events */}
        {displayedFutureEvents.length >= 0 && (
          <Grid item container mb={3} ml={4} justifyContent="flex-start">
            <Button
              size="medium"
              text="This Week"
              infocus={isThisWeekClicked}
              onClick={handleThisWeekClick}
            ></Button>
            <Button
              size="medium"
              text="This Month"
              infocus={isThisMonthClicked}
              onClick={handleThisMonthClick}
            ></Button>
          </Grid>
        )}
        {/* Render EventBoxes for future events */}
      {!isLoading && <div style={{ ...eventsContainerStyle, marginTop: '20px' }}>
        {(displayedFutureEvents.length === 0 && (
          <Grid item
          sx={{ color: 'white', fontSize: 20, fontFamily: 'Chakra Petch', fontWeight: '700' }}>
            No upcoming events
          </Grid>
        )) ||
          renderEventBoxes(displayedFutureEvents)}
      </div>
      }
        {displayedFutureEvents.length > 0 && (
          <Grid item mt={2} ml={5} 
          sx={{ color: 'white', fontSize: 'clamp(15px, 3vw, 20px)', fontFamily: 'Chakra Petch', fontWeight: '700' }}>
              Page {pageNumberUpcoming} of {totalPagesUpcoming}
          </Grid>
        )}
        {totalPagesUpcoming > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button
              size="medium"
              text="Previous"
              onClick={() => {
                if (pageNumberUpcoming > 1) {
                  paginate(upcomingEvents, pageNumberUpcoming - 1, totalPagesUpcoming, 'upcoming');
                  const titleElement = document.getElementById('eventsTitle');
                  if (titleElement) {
                    const rect = titleElement.getBoundingClientRect();
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const targetY = rect.top + scrollTop;

                    window.scrollTo({
                      top: targetY,
                      behavior: 'smooth',
                    });
                  }
                }
              }}
              inactive={pageNumberUpcoming === 1}
            />
            <Button
              size="medium"
              text="Next"
              onClick={() => {
                if (pageNumberUpcoming < totalPagesUpcoming) {
                  paginate(upcomingEvents, pageNumberUpcoming + 1, totalPagesUpcoming, 'upcoming');
                  const titleElement = document.getElementById('eventsTitle');
                  if (titleElement) {
                    const rect = titleElement.getBoundingClientRect();
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const targetY = rect.top + scrollTop;

                    window.scrollTo({
                      top: targetY,
                      behavior: 'smooth',
                    });
                  }
                }
              }}
              inactive={pageNumberUpcoming === totalPagesUpcoming}
            />
          </div>
        )}

        {/* Render EventBoxes for past events */}
        <Grid item mt={15} mb={2} ml={5} 
        sx={{ color: 'white', fontFamily: 'Chakra Petch', fontSize: 'clamp(32px, 8vw, 65px)', fontWeight: '700' }}>
          PAST EVENTS
        </Grid>

        {isLoading && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress size="3em" style={{ color: 'white' }} />
          </div>
        )}
        {/* Buttons for filtering past events */}
        {displayedPastEvents.length > 0 && (
          <Grid item container mb={4} ml={4} justifyContent="flex-start">
            {/* <Button size="medium" text="2023" infocus={is2023Clicked} onClick={handle2023}></Button> */}
            
            {/*Buttons that handle general year */}
            {Array.from(pastEventYears).sort().reverse().map(year => (
              <Button
                key={year}
                size="medium"
                text={year.toString()}
                infocus={selectedYear === year}
                onClick={() => handleYearClick(year)}
              />
            ))}
          </Grid>
        )}
        <div style={{ ...eventsContainerStyle, marginTop: '20px' }}>
          {(displayedPastEvents.length === 0 && !isLoading && (
            <div
              style={{
                color: 'white',
                fontSize: '20px',
                fontFamily: 'Chakra Petch',
                fontWeight: '700',
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              No past events
            </div>
          )) ||
            renderPastEventBoxes(displayedPastEvents)}
        </div>
        {displayedPastEvents.length > 0 && (
          <div>
            <p
              style={{
                color: 'white',
                fontSize: 'clamp(15px, 3vw, 20px)',
                fontFamily: 'Chakra Petch',
                fontWeight: '700',
                display: 'flex',
                flexDirection: 'row',
                marginLeft: isDesktop ? '39px' : '',
                alignItems: isDesktop ? '': 'center',
                justifyContent: isDesktop ? '' : 'center'
              }}
            >
              Page {pageNumberPast} of {filteredTotalPagesPast}
            </p>
          </div>
        )}
        {filteredTotalPagesPast > 1 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            <Button
              size="medium"
              text="Previous"
              onClick={() => {
                if (pageNumberPast > 1) {
                  paginate(pastEvents, pageNumberPast - 1, totalPagesPast, 'past');
                  const titleElement = document.getElementById('pastEventsTitle');

                  if (titleElement) {
                    const rect = titleElement.getBoundingClientRect();
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const targetY = rect.top + scrollTop;

                    window.scrollTo({
                      top: targetY,
                      behavior: 'smooth',
                    });
                  }
                }
              }}
              inactive={pageNumberPast === 1}
            ></Button>
            <Button
              size="medium"
              text="Next"
              onClick={() => {
                if (pageNumberPast < totalPagesPast) {
                  paginate(pastEvents, pageNumberPast + 1, totalPagesPast, 'past');
                  const titleElement = document.getElementById('pastEventsTitle');
                  if (titleElement) {
                    const rect = titleElement.getBoundingClientRect();
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const targetY = rect.top + scrollTop;

                    window.scrollTo({
                      top: targetY,
                      behavior: 'smooth',
                    });
                  }
                }
              }}
              inactive={pageNumberPast === totalPagesPast}
            ></Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Events;
