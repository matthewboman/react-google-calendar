const moment = require('moment')

/*
 * Handles events that occur the same day of every week
 * (e.g. every Monday)
 */

// handleWeekly :: String -> Int -> {} -> [{}]
const handleWeekly = (calendar, recurrence, e) => {
  const start = e.start.date
    ? moment(e.start.date)
    : moment(e.start.dateTime)
  const end = e.end.date
    ? moment(e.start.date)
    : moment(e.end.dateTime)

  let reoccurringEvents = [
    {
      eventType: calendar.name,
      creator: e.creator,
      end: end._d,
      gLink: e.htmlLink,
      description: e.description,
      location: e.location,
      start: start._d,
      title: e.summary,
      meta: e
    }
  ]
  let add = 1

  while (recurrence > 0) {
    const reoccurringEvent = {
      eventType: calendar.name,
      creator: e.creator,
      end: end.clone().add(add, 'week')._d,
      gLink: e.htmlLink,
      description: e.description,
      location: e.location,
      start: start.clone().add(add, 'week')._d,
      title: e.summary,
      meta: e
    }
    reoccurringEvents.push(reoccurringEvent)
    recurrence --
    add ++
  }
  return reoccurringEvents
}

module.exports = handleWeekly
