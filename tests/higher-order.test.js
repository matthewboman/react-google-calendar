const response = require('./dummy_data/response')
const fns = require('./src/utils/functions')

it("Returns only recurring events", () => {
  expect(
    fns.recurring(response).length
  ).toEqual(8)
})

it("Returns only events that do not recur", () => {
  expect(
    fns.oneTime('demo', response).length
  ).toEqual(1)
})

it("Returns events recurring every `n` day(s)", () => {
  expect(
    fns.filterByOneProperty("RRULE:FREQ=DAILY", fns.recurring(response)).length
  ).toEqual(4)
})

it("Returns events recurring every `n` week(s)", () => {
  expect(
    fns.filterByOneProperty("RRULE:FREQ=WEEKLY", fns.recurring(response)).length
  ).toEqual(2)
})

it("Returns events recurring every `n` month(s)", () => {
  expect(
    fns.filterByOneProperty("RRULE:FREQ=MONTHLY", fns.recurring(response)).length
  ).toEqual(2)
})

it("FALSE: Returns whether the last item in the array of filters contains a given string", () => {
  expect(
    fns.filterIncludesString(["RRULE:FREQ=MONTHLY", "BYDAY=1FR"], "TH")
  ).toEqual(false)
})

it("TRUE: Returns whether the last item in the array of filters contains a given string", () => {
  expect(
    fns.filterIncludesString(["RRULE:FREQ=MONTHLY"], "TH")
  ).toEqual(true)
})
