import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserForm from './UserForm'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { DateUtils } from "react-day-picker"
import Moment from 'react-moment'


export default class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };  

    state = { 
      selection: null,
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
      const { articles } = this.props
      const { from, to } = this.state
      const fromDate = new Date(from)
      const toDate = new Date(to)
      const options = articles.map(artilce =>({
        label: artilce.title,
        value: artilce.id
      }))

    return (
      <div>
        <UserForm />
          <Select options       = { options } value = { this.state.selection } onChange = { this.changeSelection } multi = { true } />
        <div className = "main">
        <div className= "right-bar">
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
        <ArticleList articles = { articles } defaultOpenId = { articles[0].id }/>
        </div>
      
      </div>
    )
  }

  changeSelection = selection => this.setState({ selection })

}
