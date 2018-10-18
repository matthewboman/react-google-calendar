import axios from 'axios'
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

export default {

  /*
   * @deprecated - This will be changed to take an Object in v2.0.0 in order to make parameters clearer
   *
   * Get events from all calendars specified and created specified number of recurring events
   */
  getAllCalendars: (
    GOOGLE_API_KEY,
    calendars,
    dailyRecurrence,
    weeklyRecurrence,
    monthlyRecurrence
  ) => Promise.map(calendars, (calendar) => {
    return axios.get(`https://content.googleapis.com/calendar/v3/calendars/${calendar.url}/events?key=${GOOGLE_API_KEY}`)
      .then(res => {
        const items = res.data.items
        const events = removeCancelled(items)
        const oneTimeEvents = oneTime(calendar, events)
        const recurringEvents = recurring(events)

        const daily = filterByOneProperty("RRULE:FREQ=DAILY", recurringEvents)
        const recurringDaily = recurringByProperty(
          removeRecurrenceProperty(daily),
          handleDaily,
          calendar,
          dailyRecurrence
        ).flat()

        const weekly = filterByOneProperty("RRULE:FREQ=WEEKLY", recurringEvents)
        const recurringWeekly = recurringByProperty(
          removeRecurrenceProperty(weekly),
          handleWeekly,
          calendar,
          weeklyRecurrence
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
          monthlyRecurrence
        ).flat()
        const recurringDayOfMonth = recurringByProperty(
          removeRecurrenceProperty(dayOfMonth),
          handleDayOfMonth,
          calendar,
          monthlyRecurrence
        ).flat()

        const allEvents = [].concat(
          oneTimeEvents,
          recurringDaily,
          recurringWeekly,
          recurringDateOfMonth,
          recurringDayOfMonth
        )
        return allEvents
      })
  })
  .then(allEvents => [].concat.apply([], allEvents))

}
