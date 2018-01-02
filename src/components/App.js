import React, { Component } from 'react'
import MyInput from './Filters/MyInput'
import MySelect from './Filters/MySelect'
import ArticleList from './ArticleList'
import MyDatePicker from './Filters/MyDatePicker'
import Counter from './Counter'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'


export default class App extends Component {
    
  render() {
    return (
      <Router>
        <div>
          <div>
            <h2>Main Menu</h2>
              <nav>
                  <ul>
                    <li><NavLink activeStyle = {{ color: 'red' }} to = "/counter">Counter</NavLink></li>
                    <li><NavLink activeStyle = {{ color: 'red' }} to = "/select">Select Filter</NavLink></li>
                    <li><NavLink activeStyle = {{ color: 'red' }} to = "/date-picker">Date Picker Filter</NavLink></li>
                    <li><NavLink activeStyle = {{ color: 'red' }} to = "/articles">Articles</NavLink></li>
                    </ul>
              </nav>
          </div>
        <MyInput />
          <Route path = "/counter" component = { Counter }/>
          <Route path = "/select" component = { MySelect }/>
          <div className = "main">
            <div className= "right-bar">
            <Route path = "/date-picker" component = { MyDatePicker }/>
            </div>
              <Route path = "/articles" component = { ArticleList }/>
          </div>
        </div>
      </Router>
    )
  }

}
