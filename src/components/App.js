import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserForm from './UserForm.js'
import ArticleList from './ArticleList'


export default class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };  

  render() {
    return (
      <div>
          <UserForm />
          <ArticleList articles = { this.props.articles }/>
      </div>
    )
  }
}
