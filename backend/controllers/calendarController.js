import asyncHandler from 'express-async-handler';

// All events live on one public CSES calendar.
const DEFAULT_CALENDAR_ID = 'csesucsd@gmail.com';

// Upcoming events to request. One calendar now carries every community's
// events, so this is the budget across all four tabs, not per tab.
const MAX_RESULTS = 50;

// In-memory cache so we don't burn Google API quota on every page load.
const CACHE_TTL_MS = 5 * 60 * 1000;
let cache = { data: null, fetchedAt: 0 };

// Organizers prefix each event title with its community, e.g.
// "CSES Opensource Workshop". Matching is deliberately loose about spelling
// and separators so a stray hyphen or capital doesn't silently drop an event
// into General. Anything with no recognized prefix falls under General.
const DEFAULT_CATEGORY = 'General';
const CATEGORY_PREFIXES = [
  { category: 'Open-Source', pattern: /^\s*CSES[\s_-]+open[\s_-]?source\b[\s:_–—-]*/i },
  { category: 'Innovate', pattern: /^\s*CSES[\s_-]+innovate\b[\s:_–—-]*/i },
  { category: 'Dev', pattern: /^\s*CSES[\s_-]+dev\b[\s:_–—-]*/i },
  { category: 'General', pattern: /^\s*CSES[\s_-]+general\b[\s:_–—-]*/i },
];

// The prefix is routing information, not part of the event name, so it is
// stripped from what we display.
const extractCategory = (summary) => {
  for (const { category, pattern } of CATEGORY_PREFIXES) {
    if (pattern.test(summary)) {
      return { category, title: summary.replace(pattern, '').trim() || summary.trim() };
    }
  }

  return { category: DEFAULT_CATEGORY, title: summary };
};

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

const fetchCalendar = async (apiKey, calendarId) => {
  const url = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`,
  );
  url.search = new URLSearchParams({
    key: apiKey,
    timeMin: new Date().toISOString(),
    singleEvents: 'true',
    orderBy: 'startTime',
    maxResults: String(MAX_RESULTS),
  }).toString();

  const response = await fetch(url);
  if (!response.ok) {
    const body = await response.text();
    console.error(`Google Calendar API error for "${calendarId}" (${response.status}): ${body}`);
    return [];
  }

  const { items = [] } = await response.json();
  return items
    .filter((item) => item.status !== 'cancelled')
    .map((item) => {
      // Category prefix comes first in the title, so strip it before looking
      // for a "[Type]" prefix on what remains.
      const { category, title: untagged } = extractCategory(item.summary ?? 'Untitled event');
      const { type, title, description } = extractType(untagged, item.description ?? '');

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

// Display list of upcoming events from the CSES Google Calendar.
export const calendarEventList = asyncHandler(async (req, res) => {
  // Read env inside the handler: dotenv.config() runs after module imports.
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;

  if (!apiKey) {
    console.warn('GOOGLE_CALENDAR_API_KEY is not set; returning empty calendar event list');
    return res.json([]);
  }

  if (cache.data && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
    return res.json(cache.data);
  }

  const calendarId = process.env.GOOGLE_CALENDAR_ID || DEFAULT_CALENDAR_ID;
  const events = (await fetchCalendar(apiKey, calendarId)).sort(
    (a, b) => new Date(a.start) - new Date(b.start),
  );

  cache = { data: events, fetchedAt: Date.now() };
  res.json(events);
});

// Export default controller methods
export default {
  calendarEventList,
};
