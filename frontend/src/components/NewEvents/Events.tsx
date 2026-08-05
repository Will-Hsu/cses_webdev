import { useEffect, useMemo, useState } from 'react';
import { Box, CircularProgress, Container, Stack } from '@mui/material';
import EventCard from './EventCard';
import SegmentedTabs from '../common/SegmentedTabs';
import { calendarEventsAPI } from '../../api';
import { CalendarEvent } from '../../utils/types';
import { colors } from '../../theme';
import { eventsStyles } from './styles';

const CATEGORIES = ['General', 'Open-Source', 'Innovate', 'Dev'];

const EventsPage = () => {
  const styles = eventsStyles();

  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('General');

  useEffect(() => {
    calendarEventsAPI()
      .then((data: CalendarEvent[]) => setEvents(data))
      .catch((error: unknown) => {
        console.error('Error fetching calendar events:', error);
        setEvents([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredEvents = useMemo(
    () => events.filter((event) => event.category === category),
    [events, category],
  );

  return (
    <Box sx={styles.pageWrapper}>
      <Container maxWidth="xl" sx={styles.container}>
        <Box component="h1" sx={{ ...styles.title, m: 0 }}>
          Events
        </Box>
        <Box sx={styles.subtitle}>
          Join us for workshops, hackathons, tech talks, and networking events
        </Box>

        <Box component="h2" sx={{ ...styles.sectionHeading, m: 0 }}>
          Upcoming Events
        </Box>

        <Box sx={styles.tabsWrapper}>
          <SegmentedTabs options={CATEGORIES} value={category} onChange={setCategory} />
        </Box>

        {loading ? (
          <Box sx={styles.statusWrapper}>
            <CircularProgress sx={{ color: colors.purple }} />
          </Box>
        ) : filteredEvents.length > 0 ? (
          <Stack spacing={3} sx={styles.cardsStack}>
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </Stack>
        ) : (
          <Box sx={styles.statusWrapper}>
            <Box sx={styles.emptyText}>No upcoming events. Check back soon!</Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default EventsPage;
