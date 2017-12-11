import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inputFilter } from '../../AC'
import { connect } from 'react-redux'
import { mapToArr } from '../../helpers'

class MyInput extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="article-search">
        <input placeholder="Search" className="article-search__input" type="text"  onChange={ this.handleUserChange }/>
      </div>
    )
  }

  handleUserChange = ev =>{
    const { articles, title } = this.props
    let value = ev.target.value.toLowerCase()
    articles.filter(article => article.title === this.props.inputFilter(value))

  }
}

export default connect(
 state => ({
    title: state.filters.title,
    articles: mapToArr(state.articles)
  }), {
    inputFilter
  }
)(MyInput)

