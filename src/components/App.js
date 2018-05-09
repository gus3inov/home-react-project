import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyInput from './Filters/MyInput'
import Articles from './routes/Articles'
import NewArticle from './routes/NewArticle'
import NotFound from './routes/NotFound'
import Counter from './Counter'
import CommentsPage from './routes/CommentsPage'
import { Switch, Route } from 'react-router-dom'
import history from '../history'
import { ConnectedRouter } from 'react-router-redux'
import { ru, en } from '../description'
import Contact from "./Contact"
import MainPage from './MainPage'
import LanguageProvider from './LanguageProvider'

/**
 * @import style from Material UI
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './Header/index'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'
import Toggle from 'material-ui/Toggle'

const styles = {
    block: {
        maxWidth: 250,
    },
    toggle: {
        marginBottom: 16,
    },
    thumbOff: {
        backgroundColor: '#ffcccc',
    },
    trackOff: {
        backgroundColor: '#ff9d9d',
    },
    thumbSwitched: {
        backgroundColor: 'red',
    },
    trackSwitched: {
        backgroundColor: '#ff9d9d',
    },
    labelStyle: {
        color: 'red',
    },
};

const getTheme = () => {
    let overwrites = {
        "palette": {
            "shadowColor": "#000000",
            "primary1Color": "#651fff",
            "textColor": "#ffffff",
            "primary2Color": "#303f9f",
            "accent2Color": "#f50057",
            "accent3Color": "#ff80ab",
            "borderColor": "#ffffff",
            "accent1Color": "#651fff"
        },
        "appBar": {
            "textColor": "#ffffff"
        },
        "raisedButton": {
            "color": "#2196f3",
            "textColor": "#fff",
            "padding": "0 10px"
        }
    };
    return getMuiTheme(baseTheme, overwrites);
}

export default class App extends Component {

    state = {
        language: true
    }

    changeLanguage = () => {
        this.setState({
            language: !this.state.language
        })
    }

  render() {
    return (
      <ConnectedRouter history = {history}>
          <MuiThemeProvider muiTheme={getTheme()}>
              <LanguageProvider language={this.state.language}>
                <div>
                    <Header className="alt-header" title="React Blog" />
                    <Toggle
                        thumbStyle={styles.thumbOff}
                        trackStyle={styles.trackOff}
                        thumbSwitchedStyle={styles.thumbSwitched}
                        trackSwitchedStyle={styles.trackSwitched}
                        labelStyle={styles.labelStyle}
                        onToggle={this.changeLanguage}
                    />
                  <div className="alt-wrapper">
                  <MyInput />
                  <Switch>
                      <Route path = "/counter" component = { Counter }/>
                      <Route path = "/comments" component = { CommentsPage }/>
                      <Route path = "/contact" component = { Contact }/>
                      <Route path = "/articles/new" component = { NewArticle }/>
                      <Route path = "/articles" component = { Articles }/>
                      <Route path = "/" component = { MainPage }/>
                      {/*<Redirect from="/comments" to="/comments/1" />*/}
                      <Route path = "*" component = { NotFound }/>
                  </Switch>
                  </div>
                </div>
              </LanguageProvider>
          </MuiThemeProvider>
      </ConnectedRouter>
    )
  }

}
