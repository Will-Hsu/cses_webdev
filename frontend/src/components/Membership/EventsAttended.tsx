import { Container, Typography, useMediaQuery } from '@mui/material';
import EventBox from '../Event/Event';
import { membershipStyles } from './styles';
import alertLogo from '../../images/events-attended-alert.svg';

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
  const styles = membershipStyles();

  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Container maxWidth="xl" sx={styles.eventsAttendedBody}>
      <Typography sx={isMobile ? styles.eventsAttendedTitleMobile : styles.eventsAttendedTitle}>
        EVENTS ATTENDED
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '60px' }}>
        <img
          src={alertLogo}
          alt="Events Attended Alert"
          width="32"
          height="32"
          style={{ marginRight: '10px' }}
        />
        <Typography variant="subtitle1" sx={styles.eventsAttendText}>
          <i>
            Haven't attended an event yet? Let's change that!
            {/* Attend 2 more events and reach SENIOR MEMBER status!*/}
          </i>
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '40px' }}>
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
          />
        ))}
      </div>
    </Container>
  );
};

export default EventsAttended;
