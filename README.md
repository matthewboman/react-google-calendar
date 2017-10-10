# React Google Calendar
React Google Calendar is an implementation of [react-big-calendar](https://github.com/intljusticemission/react-big-calendar)
that pulls events from multiple Google calendars and reformats them for display.
It also allows for many kinds of reoccuring events, such as daily, weekly, and monthly.

[Demo && Dox](https://crashspringfield.github.io/react-big-calendar)

## Running locally

* clone the repository `git clone https://github.com/crashspringfield/react-google-calendar.git`
* update config.js with your API key
* `npm install && npm start`

## Further setup

* Get a Google Calendar API key. [Simple Calendar](https://docs.simplecalendar.io/google-api-key/) has good instructions for setting this up.
* Create calendars and make them public. Go to [https://calendar.google.com/calendar](https://calendar.google.com/calendar) to create a calendar and make it public. You'll need the Calendar ID in your Home component.

## Contributing
If there is an bug needing fixin' or feature you'd like to see, open an issue. If you're not getting the data back you expect, see below.

#### Reoccuring event algorithms
Accounting for all the various ways events can reoccur is a huge undertaking and there are many we missed. Right now we support the following:

* single events
* daily events (e.g. every day, every n days)
* weekly events (e.g. every Monday)
* monthly events by date (e.g. [first of the month](https://www.youtube.com/watch?v=PArF9k2SbQk))
* monthy events by day (e.g. first Friday)

If you find an edge case that isn't supported, raise an issue, or create a fork and write your own solution.

## LICENSE
MIT
