import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class componentName extends Component {
  static propTypes = {

  }

  state = {
    isInputWrite: false,
    isTextAreaWrite: false,
  }

  handleInputChange = ev => {
    this.setState({
        isInputWrite: ev.target.value.length <= 5 || ev.target.value.length >= 15 ? true : false
    })
  }

  handleTextAreaChange = ev => {
    this.setState({
        isTextAreaWrite: ev.target.value.length <= 20 || ev.target.value.length >= 50 ? true : false
    })
  }

  render() {
    return (
      <div className = "form-comment">
        <input 
          type = "text" 
          className = "form-comment__input" 
          style = { this.state.isInputWrite ? { color: 'red' } : { color: '#fff' } } 
          placeholder="Введите username"
          onChange = { this.handleInputChange }
         />
       <div>
       <textarea    
         className = "form-comment__textarea" 
         style = { this.state.isTextAreaWrite ? { color: 'red' } : { color: '#fff' } }
         onChange = { this.handleTextAreaChange }
       />
        <button className = "form-comment__button">Добавить коментарий</button>
       </div>
      </div>
    )
  }
}

export default componentName