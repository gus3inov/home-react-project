import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'

export default class App extends Component {
    static propTypes = {
        articles: PropTypes.object.isRequired
    };  

  render() {
    return (
      <div>
          <ArticleList articles = { this.props.articles }/>
      </div>
    )
  }
}
