/*
 * Higher-Order fuctions for processing events from Google Calendar
 */

// filterByOneProperty :: String -> [{}] -> [{}]
const filterByOneProperty = (propterty, events) => events
  .filter(event => event.r[0] == propterty)

// filterIncludesString :: [] -> String -> Bool
const filterIncludesString = (filters, str) => filters[filters.length - 1].includes(str)

// oneTime :: String -> [{}] -> [{}]
const oneTime = (calendar, events) => events
  .filter(item => !item.recurrence)
  .map(e => {
    // account for all day events and arbitrarily set time to 8am-5pm
    const start = e.start.date
      ? new Date(`${e.start.date}T08:00:00`)
      : new Date(e.start.dateTime)
    const end = e.end.date
      ? new Date(`${e.start.date}T05:00:00`)
      : new Date(e.end.dateTime)

    return {
      title: e.summary,
      eventType: calendar.name,
      start: start,
      end: end,
      description: e.description,
      location: e.location,
      glink: e.htmlLink,
      meta: e
    }
  })

// recurring :: [{}] -> [{}]
const recurring = events => events.filter(item => item.recurrence)
  .map(event => ({ e: event, r: event.recurrence[0].split(';') }))

// recurringByProperty :: [{}] -> Function -> String -> Int -> [{}]
const recurringByProperty = (events, fn, calendar, occurences) => [].concat.apply([], events)
  .map(event => fn(calendar, occurences, event))

// removeCancelled :: [{}] -> [{}]
const removeCancelled = events => events.filter(item => item.status != "cancelled")

// removeRecurrenceProperty :: [{}] -> [{}]
const removeRecurrenceProperty = events => events.map(event => event.e)

module.exports = {
  filterByOneProperty,
  filterIncludesString,
  oneTime,
  recurring,
  recurringByProperty,
  removeCancelled,
  removeRecurrenceProperty
}
