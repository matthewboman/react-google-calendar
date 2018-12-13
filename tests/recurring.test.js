const flat = require('array.prototype.flat')
const algorithms = require('./src/utils/functions')
const response = require('./dummy_data/response')
const fns = require('./src/utils/functions')

// these assumptions are verified in `higher-order.test.js`
const daily = fns.filterByOneProperty("RRULE:FREQ=DAILY", fns.recurring(response))
const weekly = fns.filterByOneProperty("RRULE:FREQ=WEEKLY", fns.recurring(response))
const monthly = fns.filterByOneProperty("RRULE:FREQ=MONTHLY", fns.recurring(response))
const dateOfMonth = monthly
  .filter(item => fns.filterIncludesString(item.r, "TH"))
const dayOfMonth = monthly
  .filter(item => !fns.filterIncludesString(item.r, "TH"))

/*
 * Daily tests
 */
it("Returns events that occur daily", () => {
  // 4 events, each repeated 5 times
  expect(
    flat(
      fns.recurringByProperty(
        fns.removeRecurrenceProperty(daily),
        algorithms.handleDaily,
        'demo',
        5
      )
    ).length
  ).toBe(20)
})

it("Returns the correct daily event", () => {
  expect(
    flat(
      fns.recurringByProperty(
        fns.removeRecurrenceProperty(daily),
        algorithms.handleDaily,
        'demo',
        1
      )
    )[0]['title']
  ).toBe("Reoccur every day")
})

/*
 * Weekly tests
 */
it("Returns events that occur weekly", () => {
  // 2 events, each repeated 5 times
  expect(
    flat(
      fns.recurringByProperty(
        fns.removeRecurrenceProperty(weekly),
        algorithms.handleWeekly,
        'demo',
        5
      )
    ).length
  ).toBe(10)
})

it("Returns the correct event that occurs on the same day every week", () => {
  expect(
    flat(
      fns.recurringByProperty(
        fns.removeRecurrenceProperty(weekly),
        algorithms.handleWeekly,
        'demo',
        1
      )
    )[0]['title']
  ).toBe("Repeat every week")
})

/*
 * Monthly tests - Day (e.g first friday, second tuesday)
 */

it("Returns events that occur on the same day every month", () => {
  expect(
    flat(
      fns.recurringByProperty(
        fns.removeRecurrenceProperty(dayOfMonth),
        algorithms.handleDayOfMonth,
        'demo',
        5
      )
    ).length
  ).toBe(5)
})

it("Returns the correct event that occurs on the same day every month", () => {
  expect(
    flat(
      fns.recurringByProperty(
        fns.removeRecurrenceProperty(dayOfMonth),
        algorithms.handleDayOfMonth,
        'demo',
        1
      )
    )[0]['title']
  ).toBe('Reoccuring First Friday')
})

/*
 * Monthly tests - Date (e.g. 1st, 17th)
 */
it("Returns events that occur on the same date every month", () => {
  expect(
    flat(
      fns.recurringByProperty(
        fns.removeRecurrenceProperty(dateOfMonth),
        algorithms.handleDateOfMonth,
        'demo',
        5
      )
    ).length
  ).toBe(5)
})

it("Returns the correct event that occurs on the same date every month", () => {
  expect(
    flat(
      fns.recurringByProperty(
        fns.removeRecurrenceProperty(dateOfMonth),
        algorithms.handleDateOfMonth,
        'demo',
        1
      )
    )[0]['title']
  ).toBe('First of the month')
})
