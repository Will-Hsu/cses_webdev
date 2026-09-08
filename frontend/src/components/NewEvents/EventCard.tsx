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

const formatDate = (event: CalendarEvent) => {
  // All-day events use date-only strings (e.g. "2026-04-28"); parse as local
  // midnight rather than UTC so the displayed day doesn't shift.
  const date = event.allDay ? new Date(`${event.start}T00:00:00`) : new Date(event.start);
  return dateFormatter.format(date);
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
