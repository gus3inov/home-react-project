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
    return (
      <div>
        <Counter />
        <UserForm />
        <MySelect articles = { [] }/>
        <div className = "main">
        <div className= "right-bar">
        <MyDatePicker />
        </div>
        <ArticleList />
      </div>
      </div>
    )
  }

}
