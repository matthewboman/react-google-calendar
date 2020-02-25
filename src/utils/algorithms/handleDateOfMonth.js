const moment = require('moment')

/*
 * Handles events that occure the same date of every month
 * (e.g. the 1st, the 8th)
 */

// handleDateOfMonth :: String -> Int -> {} -> [{}]
 const handleDateOfMonth = (calendar, recurrence, e) => {
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
    let isCancelled = cancelled.find(item => (
      item.recurringEventId === e.id && start.clone().add(add, "months").isSame(item.originalStartTime.dateTime)
    ))

    if (!isCancelled) {
      const reoccurringEvent = {
        eventType: calendar.name,
        creator: e.creator,
        start: start.clone().add(add, "months")._d,
        end: end.clone().add(add, "months")._d,
        gLink: e.htmlLink,
        description: e.description,
        location: e.location,
        title: e.summary,
        meta: e,
      }
      reoccurringEvents.push(reoccurringEvent);
    }
     recurrence --
     add ++
   }
   return reoccurringEvents
 }

module.exports = handleDateOfMonth
