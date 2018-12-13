import * as Promise from 'bluebird'
import moment from 'moment'

import {
  handleDaily,
  handleDateOfMonth,
  handleDayOfMonth,
  handleWeekly
} from './algorithms'
import {
  filterByOneProperty,
  filterIncludesString,
  oneTime,
  recurring,
  recurringByProperty,
  removeCancelled,
  removeRecurrenceProperty
} from './functions'

Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth-1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});

export default {

  /*
   * Get events from all calendars specified and created specified number of recurring events
   */
  getAllCalendars: (config) => Promise.map(config.calendars, (calendar) => {
    // get each calendar
    return fetch(`https://content.googleapis.com/calendar/v3/calendars/${calendar.url}/events?key=${config.api_key}`)
      .then(res => res.json())
      .then(res => {
        const items = res.items
        const events = removeCancelled(items)
        const oneTimeEvents = oneTime(calendar, events)
        const recurringEvents = recurring(events)

        const daily = filterByOneProperty("RRULE:FREQ=DAILY", recurringEvents)
        const recurringDaily = recurringByProperty(
          removeRecurrenceProperty(daily),
          handleDaily,
          calendar,
          config.dailyRecurrence
        ).flat()

        const weekly = filterByOneProperty("RRULE:FREQ=WEEKLY", recurringEvents)
        const recurringWeekly = recurringByProperty(
          removeRecurrenceProperty(weekly),
          handleWeekly,
          calendar,
          config.weeklyRecurrence
        ).flat()

        const monthly = filterByOneProperty("RRULE:FREQ=MONTHLY", recurringEvents)
        // dateOfMonth will have only one item in the array, so this will verify "RRULE:FREQ=MONTHLY"
        const dateOfMonth = monthly
          .filter(item => filterIncludesString(item.r, "TH"))
        // however, dayOfMonth will have two items in the array
        // the second item will be like "BYDAY=1FR"
        const dayOfMonth = monthly
          .filter(item => !filterIncludesString(item.r, "TH"))

        const recurringDateOfMonth = recurringByProperty(
          removeRecurrenceProperty(dateOfMonth),
          handleDateOfMonth,
          calendar,
          config.monthlyRecurrence
        ).flat()
        const recurringDayOfMonth = recurringByProperty(
          removeRecurrenceProperty(dayOfMonth),
          handleDayOfMonth,
          calendar,
          config.monthlyRecurrence
        ).flat()

        const allEvents = [].concat(
          oneTimeEvents,
          recurringDaily,
          recurringWeekly,
          recurringDateOfMonth,
          recurringDayOfMonth
        )
        return allEvents.flat()
      })
  })
  .then(allEvents => [].concat.apply([], allEvents))

}
