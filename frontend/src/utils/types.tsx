export type EventCategory = 'General' | 'Open-Source' | 'Innovate' | 'Dev';

// Event stored in MongoDB (admin dashboard / QR check-in system).
export interface MongoEvent {
  _id: string;
  title: string;
  start_time: string;
  end_time: string;
  location: string;
  description: string;
  calendar_link: string;
  instagram_link: string;
  event_type?: string;
  major_event: boolean;
  code: string;
  qrCode: string;
}

// Event synced from the cses@ucsd.edu Google Calendar.
export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  start: string;
  end: string;
  allDay: boolean;
  htmlLink: string;
  category: EventCategory;
  // Free-form label shown under the title (e.g. "Social", "Career"), set on the
  // calendar event itself. Empty when the organizer didn't tag the event.
  type: string;
}

export interface User {
  name: string;
  email: string;
  minor: string;
  major: string;
  expectedGraduationYear: number;
  points: number;
  profilePicture: string;
  eventsAttended: [];
}
