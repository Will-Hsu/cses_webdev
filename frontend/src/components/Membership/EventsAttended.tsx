import useMediaQuery from '../../hooks/useMediaQuery';
import { Link, Container, Typography } from '@mui/material';
import EventBox from '../Event/Event';
import { membershipStyles } from './styles';
import alertLogo from '../../images/events-attended-alert.svg';
import MobileEventBox from '../Event/MobileEvent';

export interface EventsAttendedProps {
  eventsAttended: Array<{
    _id: string;
    title: string;
    location: string;
    description: string;
    start_time: string;
    end_time: string;
    calendar_link: string;
    instagram_link: string;
  }>;
}

const EventsAttended = ({ eventsAttended }: EventsAttendedProps) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  // const isiPad = useMediaQuery('(max-width: 1000px)');
  const styles = membershipStyles(isMobile);

  return (
    <Container sx={styles.eventsAttendedBody}>
      <h1 style={styles.eventsAttendedTitle}>EVENTS ATTENDED</h1>

      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '60px' }}>
        <img
          src={alertLogo}
          alt="Events Attended Alert"
          width="32"
          height="32"
          style={{ marginRight: '20px' }}
        />
        <Typography variant="subtitle1" sx={styles.eventsAttendText}>
          {eventsAttended.length === 0 && (
            <i>
              Haven't attended an event? <Link href="/events"> Let's change that! </Link>
              {/* Attend 2 more events and reach SENIOR MEMBER status!*/}
            </i>
          )}
          {eventsAttended.length > 0 && (
            <i>
              You have attended {eventsAttended.length} events!
              {/* Attend 2 more events and reach SENIOR MEMBER status!*/}
            </i>
          )}
        </Typography>
      </div>

      {!isMobile && (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', overflow: 'scroll' }}>
          {eventsAttended.map((event) => (
            <EventBox
              title={event.title}
              targetDate={new Date(event.start_time)}
              location={event.location}
              calendar_link={event.calendar_link}
              description={event.description}
              end_time={event.end_time}
              instagram_link={event.instagram_link}
              start_time={event.start_time}
              _id={event._id}
              pastEvent
            />
          ))}
        </div>
      )}

      {isMobile && (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', overflow: 'scroll' }}>
          {eventsAttended.map((event) => (
            <MobileEventBox
              title={event.title}
              targetDate={new Date(event.start_time)}
              location={event.location}
              end_time={event.end_time}
              start_time={event.start_time}
              _id={event._id}
              pastEvent
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default EventsAttended;
