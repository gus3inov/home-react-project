import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyInput from './Filters/MyInput'
import MySelect from './Filters/MySelect'
import ArticleList from './ArticleList'
import MyDatePicker from './Filters/MyDatePicker'
import Counter from './Counter'


export default class App extends Component {
    
  render() {
    return (
      <div>
        <Counter />
        <MyInput />
        <MySelect />
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
