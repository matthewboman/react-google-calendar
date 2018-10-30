import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import googleAPI from '../utils/googleAPI'

// use Moment.js to localize react-big-calendar
BigCalendar.momentLocalizer(moment)

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount = () => {
    this.setState({ events: [...this.state.events, ...this.props.events] })
    this.getGoogleCalendarEvents()
  }

  getGoogleCalendarEvents = () => {
    googleAPI.getAllCalendars(this.props.config)
      .then(events => {
        this.setState({ events: [...this.state.events, ...events] })
      })
      .catch(err => { throw new Error(err) })
  }

  render = () => <BigCalendar events={this.state.events} />
}
