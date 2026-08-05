import asyncHandler from 'express-async-handler';

// One Google Calendar per community; each event's category comes from the
// calendar it lives on. Calendars with no configured ID are skipped.
const CALENDAR_CATEGORIES = [
  { category: 'General', envKey: 'GOOGLE_CALENDAR_ID_GENERAL' },
  { category: 'Open-Source', envKey: 'GOOGLE_CALENDAR_ID_OPEN_SOURCE' },
  { category: 'Innovate', envKey: 'GOOGLE_CALENDAR_ID_INNOVATE' },
  { category: 'Dev', envKey: 'GOOGLE_CALENDAR_ID_DEV' },
];

// In-memory cache so we don't burn Google API quota on every page load.
const CACHE_TTL_MS = 5 * 60 * 1000;
let cache = { data: null, fetchedAt: 0 };

// Organizers tag an event's type ("Social", "Career", ...) either with a
// "Type: X" line anywhere in the description or with a "[X]" prefix on the
// title. Both are stripped from what we display.
const TYPE_IN_DESCRIPTION = /^[ \t]*type[ \t]*:[ \t]*(.+?)[ \t]*$/im;
const TYPE_IN_TITLE = /^\s*\[([^\]]+)\]\s*/;

const extractType = (summary, description) => {
  const fromDescription = description.match(TYPE_IN_DESCRIPTION);
  if (fromDescription) {
    return {
      type: fromDescription[1],
      title: summary,
      description: description.replace(TYPE_IN_DESCRIPTION, '').trim(),
    };
  }

  const fromTitle = summary.match(TYPE_IN_TITLE);
  if (fromTitle) {
    return {
      type: fromTitle[1].trim(),
      title: summary.replace(TYPE_IN_TITLE, '').trim(),
      description,
    };
  }

  return { type: '', title: summary, description };
};

const fetchCalendar = async (apiKey, calendarId, category) => {
  const url = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`,
  );
  url.search = new URLSearchParams({
    key: apiKey,
    timeMin: new Date().toISOString(),
    singleEvents: 'true',
    orderBy: 'startTime',
    maxResults: '25',
  }).toString();

  const response = await fetch(url);
  if (!response.ok) {
    const body = await response.text();
    console.error(`Google Calendar API error for "${category}" (${response.status}): ${body}`);
    return [];
  }

  const { items = [] } = await response.json();
  return items
    .filter((item) => item.status !== 'cancelled')
    .map((item) => {
      const { type, title, description } = extractType(
        item.summary ?? 'Untitled event',
        item.description ?? '',
      );

      return {
        id: item.id,
        title,
        description,
        type,
        location: item.location ?? '',
        start: item.start?.dateTime ?? item.start?.date,
        end: item.end?.dateTime ?? item.end?.date,
        allDay: !item.start?.dateTime,
        htmlLink: item.htmlLink ?? '',
        category,
      };
    });
};

// Display list of upcoming events from the CSES Google Calendars.
export const calendarEventList = asyncHandler(async (req, res) => {
  // Read env inside the handler: dotenv.config() runs after module imports.
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;

  if (!apiKey) {
    console.warn('GOOGLE_CALENDAR_API_KEY is not set; returning empty calendar event list');
    return res.json([]);
  }

  const calendars = CALENDAR_CATEGORIES.filter(({ envKey }) => process.env[envKey]).map(
    ({ category, envKey }) => ({ category, calendarId: process.env[envKey] }),
  );

  // Fallback: a single calendar (all events shown as General) when no
  // per-community calendars are configured.
  if (calendars.length === 0) {
    calendars.push({
      category: 'General',
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'cses@ucsd.edu',
    });
  }

  if (cache.data && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
    return res.json(cache.data);
  }

  const results = await Promise.all(
    calendars.map(({ category, calendarId }) => fetchCalendar(apiKey, calendarId, category)),
  );
  const events = results.flat().sort((a, b) => new Date(a.start) - new Date(b.start));

  cache = { data: events, fetchedAt: Date.now() };
  res.json(events);
});

// Export default controller methods
export default {
  calendarEventList,
};
