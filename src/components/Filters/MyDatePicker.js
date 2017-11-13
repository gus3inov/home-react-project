import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { DateUtils } from "react-day-picker"
import Moment from 'react-moment'


export default class MyDatePicker extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };  

    state = { 
      from: null,
      to: null
    }

    handleDayClick = (day) => {
      const range = DateUtils.addDayToRange(day, this.state);
      this.setState(range);
    }

    handleResetClick = e => {
      e.preventDefault();
      this.setState({
        from: null,
        to: null,
      });
    }

  render() {
      const { from, to } = this.state
      const fromDate = new Date(from)
      const toDate = new Date(to)
  
    return (
      <div>
          <DayPicker
          numberOfMonths={1}
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
          fixedWeeks
        />
        <div>
        {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
        {from && !to && <p>Please select the <strong>last day</strong>.</p>}
        {from &&
          to &&
          <p className = "date-result">
            You chose from 
            {' '}
            <span className="red">
            {  <Moment format="DD/MM/YYYY" date={fromDate} /> }
            </span>
            {' '}
            to
            {' '}
            <span className="red">
           {   <Moment format="DD/MM/YYYY" date={toDate} />  }
           </span>
          .
            {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
          </p>}
          </div>
          </div>
    )
  }

  changeSelection = selection => this.setState({ selection })

}
