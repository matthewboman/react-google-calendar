# React Google Calendar
React Google Calendar is an implementation of [react-big-calendar](https://github.com/intljusticemission/react-big-calendar)
that pulls events from multiple Google calendars and reformats them for display.
It also allows for many kinds of reoccuring events, such as daily, weekly, and monthly.

[Demo && Docs](https://crashspringfield.github.io/react-google-calendar/)

## Getting Started

    import Calendar from 'react_google_calendar'

    const calendar_configuration = {
        api_key: YOUR_GOOGLE_API_KEY,
        calendars: [
          {
            name: 'demo', // whatever you want to name it
            url: 'exampleURL@group.calendar.google.com' // your calendar URL
          }
        ],
        dailyRecurrence: 700,
        weeklyRecurrence: 500,
        monthlyRecurrence: 20
    }

    export default class MyApp extends Component {
        constructor(props) {
          super(props)
            this.state = {
              events: []
            }
        }

        render = () =>
          <div>
            <Calendar
              events={this.state.events}
              config={calendar_configuration} />
          </div>
    }

## Local Development

* clone the repository `git clone https://github.com/crashspringfield/react-google-calendar.git`
* `config.js` has a demo API for tests. Update config.js with your API key to access your calendar.
* Download dependencies: `npm install`
* Download peer dependencies: `npm i array.prototype.flat moment@^2.22.2 react@^16.6.3 react-big-calendar@^0.20.2 react-dom@^16.6.3 webpack`
* Development build with hot reloading: `npm start`
* Build for production: `npm run build`
* Run tests: `npm test`

## Further setup

* Get a Google Calendar API key. [Simple Calendar](https://docs.simplecalendar.io/google-api-key/) has good instructions for setting this up.
* Create calendars and make them public. Go to [https://calendar.google.com/calendar](https://calendar.google.com/calendar) to create a calendar and make it public. You'll need the Calendar ID in your Home component.

## Contributing
If there is any bug needing fixing or feature you'd like to see, open an issue. If you're not getting the data back you expect, see below.

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
