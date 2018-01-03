import React, { Component } from 'react'
import MyInput from './Filters/MyInput'
import MySelect from './Filters/MySelect'
import Articles from './routes/Articles'
import NewArticle from './routes/NewArticle'
import NotFound from './routes/NotFound'
import MyDatePicker from './Filters/MyDatePicker'
import Counter from './Counter'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'


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
          <Switch>
              <Route path = "/counter" component = { Counter }/>
              <Route path = "/select" component = { MySelect }/>
              <Route path = "/date-picker" component = { MyDatePicker }/>
              <Route path = "/articles/new" component = { NewArticle }/>
              <Route path = "/articles" component = { Articles }/>
              <Route path = "*" component = { NotFound }/>
          </Switch>
          </div>
      </Router>
    )
  }

}