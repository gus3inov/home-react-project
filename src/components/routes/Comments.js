import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import CommentPlagination from '../Comments/CommentPlagination'

export class componentName extends Component {
  static propTypes = {

  }

  render() {
      console.log(this.props.match)
    return (
      <div>
          <CommentPlagination />
      </div>
    )
  }
}

export default componentName
