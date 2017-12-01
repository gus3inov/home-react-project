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
      <div className="article-search">
        <input placeholder="Search" className="article-search__input" type="text"  onChange={this.handleUserChange}/>
      </div>
    )
  }

  handleUserChange = ev =>{
    let value = ev.target.value.toLowerCase();
    console.log(this.props.inputFilter(value))
    this.props.inputFilter(value)
  }
}

export default connect(
 state => ( {
    testScore: state.articles
  }), {
    inputFilter
  }
)(MyInput)

