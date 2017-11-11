import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class UserForm extends Component {
  static propTypes = {

  }

  state = {
    username: ''
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.username} onChange={this.handleUserChange}/>
      </div>
    )
  }

  handleUserChange = ev =>{
      this.setState({
          username: ev.target.value
      })
  }
}
