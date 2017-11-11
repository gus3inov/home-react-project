import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserForm from './UserForm'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'


export default class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };  

    state = { 
      selection: null
    }

  render() {
      const options = this.props.articles.map(artilce =>({
        label: artilce.title,
        value: artilce.id
      }))

    return (
      <div>
          <UserForm />
          <Select options = { options } value = { this.state.selection } onChange = { this.changeSelection } multi = { true } />
          <ArticleList articles = { this.props.articles }/>
      </div>
    )
  }

  changeSelection = selection => this.setState({ selection })

}
