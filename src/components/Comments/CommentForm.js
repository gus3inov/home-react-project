import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../../AC/index'
import TextField from 'material-ui/TextField'
import { orange500, blue500, red500 } from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton';

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

   styles = {
        errorStyle: {
            color: red500,
        },
        underlineStyle: {
            borderColor: blue500,
        },
        errorUnderlineStyle: {
            borderColor: red500
        },
        floatingLabelStyle: {
            color: blue500,
        },
        floatingLabelFocusStyle: {
            color: blue500,
        },
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
          <TextField
              floatingLabelText="Username"
              floatingLabelStyle={ this.state.isInputWrite ? this.styles.floatingLabelStyle:this.styles.errorStyle }
              floatingLabelFocusStyle={ this.state.isInputWrite ? this.styles.floatingLabelStyle : this.styles.errorStyle }
              underlineFocusStyle={ this.state.isInputWrite ? this.styles.underlineStyle : this.styles.errorUnderlineStyle}
              value = { this.state.user }
              type = "text"
              className = { this.state.isInputWrite ? "form-comment__input black" : "form-comment__input red" }
              onChange = { this.handleInputChange }
          />
       <div>
           <TextField
               floatingLabelText="Text"
               multiLine={true}
               rows={2}
               rowsMax={3}
               value = { this.state.text }
               onChange = { this.handleTextAreaChange }
               className = { this.state.isTextAreaWrite ? "form-comment__textarea black" : "form-comment__textarea red" }
               underlineFocusStyle={ this.state.isTextAreaWrite ? this.styles.underlineStyle : this.styles.errorUnderlineStyle}
               floatingLabelStyle={ this.state.isTextAreaWrite ? this.styles.floatingLabelStyle:this.styles.errorStyle }
               floatingLabelFocusStyle={ this.state.isTextAreaWrite ? this.styles.floatingLabelStyle : this.styles.errorStyle }
           />

           <RaisedButton type = "submit" label="Добавить коментарий" primary={true} />
       </div>
      </form>
    )
  }
}

export default connect(null, (dispatch, ownProps) => ({
  addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
}))(CommentForm)