import { Box } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { CalendarEvent } from '../../utils/types';
import { eventCardStyles } from './styles';

const TIME_ZONE = 'America/Los_Angeles';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: TIME_ZONE,
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: TIME_ZONE,
  hour: 'numeric',
  minute: '2-digit',
});

// All-day events carry a date-only string ("2026-10-16") that already is the
// calendar day, with no instant attached. Pinning both the parse and the format
// to UTC keeps it from being shifted into the previous day for anyone east of
// Pacific, which converting into TIME_ZONE would do.
const allDayFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'UTC',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const formatDate = (event: CalendarEvent) => {
  if (event.allDay) return allDayFormatter.format(new Date(`${event.start}T00:00:00Z`));
  return dateFormatter.format(new Date(event.start));
};

const formatTimeRange = (event: CalendarEvent) => {
  if (event.allDay) return 'All day';
  return `${timeFormatter.format(new Date(event.start))} - ${timeFormatter.format(
    new Date(event.end),
  )}`;
};

const EventCard = ({ event }: { event: CalendarEvent }) => {
  const styles = eventCardStyles();

  return (
    <Box sx={styles.card}>
      <Box sx={styles.title}>{event.title}</Box>
      <Box sx={styles.category}>{event.type || event.category}</Box>

      <Box sx={styles.detailsWrapper}>
        <Box sx={styles.detailRow}>
          <CalendarTodayOutlinedIcon sx={styles.detailIcon} />
          <Box sx={styles.detailText}>{formatDate(event)}</Box>
        </Box>
        <Box sx={styles.detailRow}>
          <AccessTimeOutlinedIcon sx={styles.detailIcon} />
          <Box sx={styles.detailText}>{formatTimeRange(event)}</Box>
        </Box>
        {event.location && (
          <Box sx={styles.detailRow}>
            <LocationOnOutlinedIcon sx={styles.detailIcon} />
            <Box sx={styles.detailText}>{event.location}</Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default EventCard;
