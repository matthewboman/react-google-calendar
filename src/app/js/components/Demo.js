import React, { Component } from 'react'

import { GOOGLE_API_KEY } from '../config.js'
import Calendar from './Calendar'
import Docs1 from './Docs1'
import Docs2 from './Docs2'
import styles from './Demo.scss'

const calendar_configuration = {
  api_key: GOOGLE_API_KEY,
  calendars: [
    {
      name: 'demo',
      url: 'srg23q1tm95o05u36lec0ilkt4@group.calendar.google.com'
    }
  ],
  dailyRecurrence: 700,
  weeklyRecurrence: 500,
  monthlyRecurrence: 20
}

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [{title: 'party'}]
    }
  }

  render = () =>
    <div>
      <div className={styles['title']}>React Google Calendar</div>
      <div className={styles['calendar-container']}>
        <Calendar
          events={this.state.events}
          config={calendar_configuration}
        />
      </div>
      <Docs2 />
    </div>
}
