# CSES Web Dev Set Up Guide

1. Download [Node](https://nodejs.org/en) and npm if you don't have them (run `node -v` and `npm -v` to check).
2. Clone the repository on the `main` branch and open the project in VSCode.
3. Install VSCode extensions Eslint and Prettier (for linting and formatting).

## Add .env files
4. Ask Nikhil or Sithu for the contents of these files, which you will add to your local repository.

## BackEnd

5. Go to the `project/backend` directory.
6. Run `npm install` to install all the node packages.
7. Run `npm start` to start the backend server and check there is no error in the terminal.

## FrontEnd

8. Go to the `project/frontend` directory.
9. Run `npm install` to install all the node packages.
10. Run `npm start` to run the React App and check if you can see the rendered site at http://localhost:3000/

## Google Calendar sync (Events page)

The Events page displays upcoming events from the CSES Google Calendar (`cses@ucsd.edu`) via
`GET /api/v1/calendar/events`. Backend setup (see `backend/.env.example`):

1. Requires Node 18+ (the backend uses the built-in `fetch`).
2. In [Google Cloud Console](https://console.cloud.google.com/), create/select a project, enable the
   **Google Calendar API**, and create an **API key**. Restrict the key to the Calendar API.
3. In each calendar's settings (as `cses@ucsd.edu`), enable **"Make available to public"** under
   Access permissions and set the dropdown to **"See all event details"** (free/busy mode strips
   titles and locations). The API returns 404 for private calendars even with a valid key.
4. Add to `backend/.env`:
   - `GOOGLE_CALENDAR_API_KEY=<your key>`
   - One calendar ID per community tab: `GOOGLE_CALENDAR_ID_GENERAL`, `GOOGLE_CALENDAR_ID_OPEN_SOURCE`,
     `GOOGLE_CALENDAR_ID_INNOVATE`, `GOOGLE_CALENDAR_ID_DEV`. Events are categorized by which
     calendar they're on. Each ID is under that calendar's Settings > "Integrate calendar".
   - If none of those are set, `GOOGLE_CALENDAR_ID` (default `cses@ucsd.edu`) is used as a single
     calendar whose events all show under the General tab.

When `GOOGLE_CALENDAR_API_KEY` is unset the endpoint logs a warning and returns `[]`, and the
Events page shows its empty state. Responses are cached in memory for 5 minutes.

### Labelling an event's type

Each event card shows a small label under the title ("Social", "Career", "Workshop", ...). Set it
on the Google Calendar event in either of these ways:

- Add a `Type: Social` line anywhere in the event's **description**, or
- Prefix the event **title** with the type in square brackets: `[Social] Welcome Week Social`.

Either way the tag is stripped before display, so the card shows a clean title and description. The
label is free-form — any word works, no code change needed. Untagged events fall back to showing
their community (General / Open-Source / Innovate / Dev).

## Development

- Prior to any local development, you should pull the latest code from `main` and work on your separate branch.
- Your branch name should be in the format: `(feature/bug)/github_username/(FE/BE)-feature_name`.
- An example of a good branch name: `feature/Will-Hsu/FE-Buttons` or `bug/Will-Hsu/FE-ButtonsDebug`.
