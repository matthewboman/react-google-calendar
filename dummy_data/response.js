/*
 * Example data one would get back from an API request
 */

module.exports = [
  {
    created: "2017-10-10T14:25:18.000Z",
    creator: {email: "example@gmail.com", displayName: "example name"},
    description: "This should appear the first Friday of every month",
    end: {dateTime: "2017-10-06T21:00:00-04:00", timeZone: "America/New_York"},
    etag: "3015291036412000",
    htmlLink: "https://www.google.com/calendar/event?eid=MzJ0amQ5Y29sb2Q5MTZzY2JzbDQ0ZmRwaDFfMjAxNzEwMDZUMjIwMDAwWiBzcmcyM3ExdG05NW8wNXUzNmxlYzBpbGt0NEBn",
    iCalUID: "32tjd9colod916scbsl44fdph1@google.com",
    id: "32tjd9colod916scbsl44fdph1",
    kind: "calendar#event",
    organizer: {email: "srg23q1tm95o05u36lec0ilkt4@group.calendar.google.com", displayName: "Demo Calendar", self: true},
    recurrence: ["RRULE:FREQ=MONTHLY;BYDAY=1FR"],
    sequence: 0,
    start: {dateTime: "2017-10-06T18:00:00-04:00", timeZone: "America/New_York"},
    status: "confirmed",
    summary: "Reoccuring First Friday",
    transparency: "transparent",
    updated: "2017-10-10T14:25:18.206Z",
  },
  {
    created: "2017-10-10T14:27:26.000Z",
    creator: {email: "example@gmail.com", displayName: "example name"},
    description: "https://www.youtube.com/watch?v=PArF9k2SbQk",
    end: {dateTime: "2017-10-01T11:00:00-04:00", timeZone: "America/New_York"},
    etag: "3015291293952000",
    htmlLink: "https://www.google.com/calendar/event?eid=Nm1qYzlvdDNsa2w2b2ptNWd1Z3RqbnY1MGpfMjAxNzEwMDFUMTQwMDAwWiBzcmcyM3ExdG05NW8wNXUzNmxlYzBpbGt0NEBn",
    iCalUID: "6mjc9ot3lkl6ojm5gugtjnv50j@google.com",
    id: "6mjc9ot3lkl6ojm5gugtjnv50j",
    kind: "calendar#event",
    location: "East 99th Street, E 99th St, Cleveland, OH 44108, USA",
    organizer: {email: "srg23q1tm95o05u36lec0ilkt4@group.calendar.google.com", displayName: "Demo Calendar", self: true},
    recurrence: ["RRULE:FREQ=MONTHLY"],
    sequence: 0,
    start: {dateTime: "2017-10-01T10:00:00-04:00", timeZone: "America/New_York"},
    status: "confirmed",
    summary: "First of the month",
    transparency: "transparent",
    updated: "2017-10-10T14:27:26.976Z"
  },
  {
    created: "2017-10-10T14:40:30.000Z",
    creator: {email: "example@gmail.com", displayName: "example name"},
    end: {dateTime: "2017-10-15T17:00:00-04:00", timeZone: "America/New_York"},
    etag: "3025042178718000",
    htmlLink: "https://www.google.com/calendar/event?eid=MmgwbWlqcmdkaHZsaWxmdW12bDAzYm1ja3VfMjAxNzEwMTVUMjAwMDAwWiBzcmcyM3ExdG05NW8wNXUzNmxlYzBpbGt0NEBn",
    iCalUID: "2h0mijrgdhvlilfumvl03bmcku@google.com",
    id: "2h0mijrgdhvlilfumvl03bmcku",
    kind: "calendar#event",
    organizer: {email: "srg23q1tm95o05u36lec0ilkt4@group.calendar.google.com", displayName: "Demo Calendar", self: true},
    recurrence: ["RRULE:FREQ=DAILY;UNTIL=20171204T210000Z"],
    sequence: 0,
    start: {dateTime: "2017-10-15T16:00:00-04:00", timeZone: "America/New_York"},
    status: "confirmed",
    summary: "Reoccur every day",
    transparency: "transparent",
    updated: "2017-12-06T00:44:49.359Z"
  },
  {
    created: "2017-10-10T14:45:41.000Z",
    creator: {email: "example@gmail.com", displayName: "example name"},
    end: {dateTime: "2017-10-15T11:00:00-04:00", timeZone: "America/New_York"},
    etag: "3025042312604000",
    htmlLink: "https://www.google.com/calendar/event?eid=NmxmNmYzdW0yZW82Y3ZydHBwdHAzYnFpM3JfMjAxNzEwMTVUMTQwMDAwWiBzcmcyM3ExdG05NW8wNXUzNmxlYzBpbGt0NEBn",
    iCalUID: "6lf6f3um2eo6cvrtpptp3bqi3r@google.com",
    id: "6lf6f3um2eo6cvrtpptp3bqi3r",
    kind: "calendar#event",
    organizer: {email: "srg23q1tm95o05u36lec0ilkt4@group.calendar.google.com", displayName: "Demo Calendar", self: true},
    recurrence: ["RRULE:FREQ=DAILY;UNTIL=20171204T150000Z;INTERVAL=5"],
    sequence: 0,
    start: {dateTime: "2017-10-15T10:00:00-04:00", timeZone: "America/New_York"},
    status: "confirmed",
    summary: "Recoccur every 5 days",
    transparency: "transparent",
    updated: "2017-12-06T00:45:56.302Z"
  },
  {
    created: "2018-10-17T17:54:34.000Z",
    creator: {email: "example@gmail.com", displayName: "example name"},
    description: "This event repeats every day.",
    end: {dateTime: "2018-10-17T15:00:00-04:00", timeZone: "America/New_York"},
    etag: "3079597748792000",
    htmlLink: "https://www.google.com/calendar/event?eid=NWVwbWRsajkxOWhzNHVhdTZ0YTZxb2lrNWpfMjAxODEwMTdUMTgwMDAwWiBzcmcyM3ExdG05NW8wNXUzNmxlYzBpbGt0NEBn",
    iCalUID: "5epmdlj919hs4uau6ta6qoik5j@google.com",
    id: "5epmdlj919hs4uau6ta6qoik5j",
    kind: "calendar#event",
    organizer: {email: "srg23q1tm95o05u36lec0ilkt4@group.calendar.google.com", displayName: "Demo Calendar", self: true},
    recurrence: ["RRULE:FREQ=DAILY"],
    sequence: 0,
    start: {dateTime: "2018-10-17T14:00:00-04:00", timeZone: "America/New_York"},
    status: "confirmed",
    summary: "Daily Event",
    updated: "2018-10-17T17:54:34.396Z"
  },
  {
    created: "2018-10-17T17:58:27.000Z",
    creator: {email: "example@gmail.com", displayName: "example name"},
    description: "This event repeats every 5 days.",
    end: {dateTime: "2018-10-17T10:30:00-04:00", timeZone: "America/New_York"},
    etag: "3079598214840000",
    htmlLink: "https://www.google.com/calendar/event?eid=NG0wb3FzdHRlNXBrYTFxNXZpdGZ2dTA3dnBfMjAxODEwMTdUMTQwMDAwWiBzcmcyM3ExdG05NW8wNXUzNmxlYzBpbGt0NEBn",
    iCalUID: "4m0oqstte5pka1q5vitfvu07vp@google.com",
    id: "4m0oqstte5pka1q5vitfvu07vp",
    kind: "calendar#event",
    organizer: {email: "srg23q1tm95o05u36lec0ilkt4@group.calendar.google.com", displayName: "Demo Calendar", self: true},
    recurrence: ["RRULE:FREQ=DAILY;INTERVAL=5"],
    sequence: 0,
    start: {dateTime: "2018-10-17T10:00:00-04:00", timeZone: "America/New_York"},
    status: "confirmed",
    summary: "Repeat every 5 days",
    updated: "2018-10-17T17:58:27.420Z"
  },
  {
    created: "2018-10-17T17:58:27.000Z",
    creator: {email: "example@gmail.com", displayName: "example name"},
    description: "This event repeats every week.",
    end: {dateTime: "2018-10-17T10:30:00-04:00", timeZone: "America/New_York"},
    etag: "3079598214840000",
    htmlLink: "https://www.google.com/calendar/event?eid=NG0wb3FzdHRlNXBrYTFxNXZpdGZ2dTA3dnBfMjAxODEwMTdUMTQwMDAwWiBzcmcyM3ExdG05NW8wNXUzNmxlYzBpbGt0NEBn",
    iCalUID: "4m0oqstte5pka1q5vitfvu07vp@google.com",
    id: "4m0oqstte5pka1q5vitfvu07vp",
    kind: "calendar#event",
    organizer: {email: "srg23q1tm95o05u36lec0ilkt4@group.calendar.google.com", displayName: "Demo Calendar", self: true},
    recurrence: ["RRULE:FREQ=WEEKLY"],
    sequence: 0,
    start: {dateTime: "2018-10-17T10:00:00-04:00", timeZone: "America/New_York"},
    status: "confirmed",
    summary: "Repeat every week",
    updated: "2018-10-17T17:58:27.420Z"
  },
  {
    created: "2018-10-17T17:58:27.000Z",
    creator: {email: "example@gmail.com", displayName: "example name"},
    description: "This event repeats everyother week.",
    end: {dateTime: "2018-10-17T10:30:00-04:00", timeZone: "America/New_York"},
    etag: "3079598214840000",
    htmlLink: "https://www.google.com/calendar/event?eid=NG0wb3FzdHRlNXBrYTFxNXZpdGZ2dTA3dnBfMjAxODEwMTdUMTQwMDAwWiBzcmcyM3ExdG05NW8wNXUzNmxlYzBpbGt0NEBn",
    iCalUID: "4m0oqstte5pka1q5vitfvu07vp@google.com",
    id: "4m0oqstte5pka1q5vitfvu07vp",
    kind: "calendar#event",
    organizer: {email: "srg23q1tm95o05u36lec0ilkt4@group.calendar.google.com", displayName: "Demo Calendar", self: true},
    recurrence: ["RRULE:FREQ=WEEKLY;INTERVAL=2"],
    sequence: 0,
    start: {dateTime: "2018-10-17T10:00:00-04:00", timeZone: "America/New_York"},
    status: "confirmed",
    summary: "Repeat every other week",
    updated: "2018-10-17T17:58:27.420Z"
  },
  {
    created: "2018-10-17T18:32:55.000Z",
    creator: {email: "example@gmail.com", displayName: "example name"},
    end: {date: "2018-11-01"},
    etag: "3079602350716000",
    htmlLink: "https://www.google.com/calendar/event?eid=MWkyNGl2Nmh0bzUxYzY0ZzNkbjMyZDFjaG4gc3JnMjNxMXRtOTVvMDV1MzZsZWMwaWxrdDRAZw",
    iCalUID: "1i24iv6hto51c64g3dn32d1chn@google.com",
    id: "1i24iv6hto51c64g3dn32d1chn",
    kind: "calendar#event",
    organizer: {email: "srg23q1tm95o05u36lec0ilkt4@group.calendar.google.com", displayName: "Demo Calendar", self: true},
    sequence: 0,
    start: {date: "2018-10-31"},
    status: "confirmed",
    summary: "One-Time Event (All Day)",
    transparency: "transparent",
    updated: "2018-10-17T18:32:55.358Z"
  }
]