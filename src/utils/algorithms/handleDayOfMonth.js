const moment = require('moment')

/*
 * Handles events that occur the same day of the month
 * (e.g. first Friday, last Monday)
 */

// handleDayOfMonth :: String -> Int -> {} -> [{}]
const handleDayOfMonth = (calendar, recurrence, e) => {
  const start = e.start.date
    ? moment(e.start.date)
    : moment(e.start.dateTime)
  const end = e.end.date
    ? moment(e.start.date)
    : moment(e.end.dateTime)

  const day = start.day()
  const date = start.date()
  let counter

  if (date <= 7) {
    counter = 1
  } else if ((date >7) && (date <= 14)) {
    counter = 7
  } else if ((date > 14) && (date <= 21)) {
    counter = 14
  } else if ((date > 21) && (date <= 28)) {
    counter = 21
  } else {
    counter = 28
  }

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

  while (recurrence > 0) {
    let tempCounter = counter
    // Using variables 'recurrence' and 'tempCounter' doesn't work with Moment
    let nextStart = new Date(start.year(), start.month() + recurrence, tempCounter, start.hour(), start.minutes())
    let nextEnd = new Date(end.year(), end.month() + recurrence, tempCounter, end.hour(), end.minutes())

    while (tempCounter < 31) {
      let isEqual = nextStart.getDay() == start.day()

      if (isEqual) {
        const reoccurringEvent = {
          eventType: calendar.name,
          creator: e.creator,
          end: nextEnd,
          gLink: e.htmlLink,
          description: e.description,
          location: e.location,
          start: nextStart,
          title: e.summary,
          meta: e
        }
        reoccurringEvents.push(reoccurringEvent)
        tempCounter = counter
        break
      }

      nextStart = new Date(start.year(), start.month() + recurrence, tempCounter, start.hour(), start.minutes())
      nextEnd = new Date(end.year(), end.month() + recurrence, tempCounter, end.hour(), end.minutes())
      tempCounter ++
    }
    recurrence --
  }
  return reoccurringEvents
}

module.exports = handleDayOfMonth
