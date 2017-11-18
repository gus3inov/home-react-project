import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number
  }

  handleIncrement = () =>{
    this.props.dispatch({
        type: 'INCREMENT'
    })
  }

  handleDecrement = () =>{
    this.props.dispatch({
        type: 'DECREMENT'
    })
  }
  
  Reset = () =>{
    this.props.dispatch({
        type: 'RESET'
    })
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

function mapStateToProps(state){
    return {
        counter: state.count
    }
}

const decorator = connect(mapStateToProps)

export default decorator(Counter)
