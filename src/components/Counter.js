import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement, reset } from '../AC'

export class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number
  }

  handleIncrement = () =>{
    this.props.increment()
  }

  handleDecrement = () =>{
    this.props.decrement()
  }
  
  Reset = () =>{
    this.props.reset()
  }
  

  render() {
    return (
      <div>
        <h2>{ this.props.counter }</h2>
        <button onClick = { this.handleIncrement }>Increment me</button>
        <button onClick = { this.handleDecrement }>Decrement me</button>
        <button onClick = { this.Reset }>Reset me</button>
      </div>
    )
  }
}

const mapToDispatch = {
    increment,
    decrement,
    reset
}

export default connect((state) => ({ 
    counter: state.count
 }), mapToDispatch)(Counter)
