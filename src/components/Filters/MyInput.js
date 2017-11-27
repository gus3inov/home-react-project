import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inputFilter } from '../../AC'
import { connect } from 'react-redux'

class MyInput extends Component {
  static propTypes = {

  }

  render() {
    const { testScore } = this.props
    return (
      <div>
        <input type="text" value={testScore} onChange={this.handleUserChange}/>
      </div>
    )
  }

  handleUserChange = ev =>{
      inputFilter(ev.target.value)
  }
}

export default connect(
  state => ({ 
    testScore: ''
  }), {
  inputFilter
})(MyInput)

