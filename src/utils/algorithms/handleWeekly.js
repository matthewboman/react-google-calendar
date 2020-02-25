const moment = require('moment')

/*
 * Handles events that occur the same day of every week
 * (e.g. every Monday)
 */

// handleWeekly :: String -> Int -> {} -> [{}]
const handleWeekly = (calendar, recurrence, e, cancelled) => {
  const start = e.start.date
    ? moment(e.start.date)
    : moment(e.start.dateTime)
  const end = e.end.date
    ? moment(e.start.date)
    : moment(e.end.dateTime)

  // check if first event is cancelled
  let isCancelled = cancelled.find(item => (
    item.recurringEventId === e.id && start.isSame(item.originalStartTime.dateTime)
  ))

  // add first event if not cancelled
  let reoccurringEvents = [];
  if (!isCancelled) {
    reoccurringEvents.push({
      eventType: calendar.name,
      creator: e.creator,
      end: end._d,
      gLink: e.htmlLink,
      description: e.description,
      location: e.location,
      start: start._d,
      title: e.summary,
      meta: e,
    })
  }

  let add = 1

  while (recurrence > 0) {
    // check if next events cancelled
    let isCancelled = cancelled.find(item => (
        item.recurringEventId === e.id && start.clone().add(add, "week").isSame(item.originalStartTime.dateTime)
    ))

    if (!isCancelled) {
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
    }
    recurrence --
    add ++
  }
  return reoccurringEvents
}

module.exports = handleWeekly
