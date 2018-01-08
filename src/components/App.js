import React, { Component } from 'react'
import MyInput from './Filters/MyInput'
import MySelect from './Filters/MySelect'
import Articles from './routes/Articles'
import NewArticle from './routes/NewArticle'
import NotFound from './routes/NotFound'
import Counter from './Counter'
import MyDatePicker from './Filters/MyDatePicker'
import Comments from './routes/Comments'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Header from './Header/index'

export default class App extends Component {

  render() {
    return (
      <Router>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <Header className="alt-header" title="React Blog" />
                  <div className="alt-wrapper">
                  <MyInput />
                  <Switch>
                      <Route path = "/counter" component = { Counter }/>
                      <Route path = "/select" component = { MySelect }/>
                      <Route path = "/date-picker" component = { MyDatePicker }/>
                      <Route path = "/articles/new" component = { NewArticle }/>
                      <Route path = "/articles" component = { Articles }/>
                      <Route path = "*" component = { NotFound }/>
                      <Route path = "comment/:page" componentn = { Comments }/>
                  </Switch>
                  </div>
                </div>
          </MuiThemeProvider>
      </Router>
    )
  }

}