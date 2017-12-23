import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { DateUtils } from "react-day-picker"
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { dateFilter } from '../../AC'


class MyDatePicker extends Component {
    state = {
        dateOpen: false
    }

    handleDayClick = (day) => {
        const { dateFilter, range } = this.props
        dateFilter(DateUtils.addDayToRange(day, range))
    }

    toggleDate = () => {
        this.setState({
            dateOpen: !this.state.dateOpen
        })
    }

    render() {
      const { from, to } = this.props.range;
      const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
      return (
          <div className={'wrapper-date'}>
              <button onClick={this.toggleDate} id="openDate"><i className="fa fa-calendar" aria-hidden="true"></i>
              </button>
              <div className={`date-picker ${this.state.dateOpen ? 'open' : 'close'}`}>
                  <DayPicker
                      ref="daypicker"
                      selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                      onDayClick={ this.handleDayClick }
                  />
                  {selectedRange}
              </div>
          </div>
      );
  }

}

export default connect(state => ({
  range: state.filters.dateRange
}), { dateFilter })(MyDatePicker)