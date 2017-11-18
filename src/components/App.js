import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserForm from './UserForm'
import MySelect from './Filters/MySelect'
import ArticleList from './ArticleList'
import MyDatePicker from './Filters/MyDatePicker'
import Counter from './Counter'


export default class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

  
  render() {
    const { articles } = this.props

    return (
      <div>
        <Counter />
        <UserForm />
        <MySelect articles = { articles }/>
        <div className = "main">
        <div className= "right-bar">
        <MyDatePicker />
        </div>
        <ArticleList articles = { articles } defaultOpenId = { articles[0].id }/>
      </div>
      </div>
    )
  }

}
