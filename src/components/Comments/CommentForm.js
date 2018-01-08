import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../AC'

export class CommentForm extends Component {
  static propTypes = {
    articleId: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired
  };

  state = {
    isInputWrite: false,
    isTextAreaWrite: false,
    user: '',
    text: ''
  }


    handleSubmit = ev => {
      ev.preventDefault()

      if(!this.state.isInputWrite || !this.state.isTextAreaWrite) return false

      this.props.addComment(this.state)
      this.setState({
          user: '',
          text: ''
      })    
    }

  handleInputChange = ev => {
    this.setState({
        user: ev.target.value,
        isInputWrite: ev.target.value.length >= 5 && ev.target.value.length <= 15 ? true : false
    })
    }
  
  handleTextAreaChange = ev => {
    this.setState({
        text: ev.target.value,
        isTextAreaWrite: ev.target.value.length >= 20 && ev.target.value.length <= 200 ? true : false
    })
   }

  render() {
    return (
      <form onSubmit = { this.handleSubmit } className = "form-comment">
        <input 
          value = { this.state.user }
          type = "text" 
          className = "form-comment__input" 
          style = { this.state.isInputWrite ? { color: '#fff' } : { color: 'red' } } 
          placeholder="Введите username"
          onChange = { this.handleInputChange }
         />
       <div>
       <textarea   
         value = { this.state.text } 
         className = "form-comment__textarea" 
         style = { this.state.isTextAreaWrite ? { color: '#fff' } : { color: 'red' } }
         onChange = { this.handleTextAreaChange }
       />
       <input className = "form-comment__button" type = "submit" value = "Добавить коментарий"/>
       </div>
      </form>
    )
  }
}

export default connect(null, (dispatch, ownProps) => ({
  addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
}))(CommentForm)