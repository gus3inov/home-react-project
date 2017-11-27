import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { selectFilter } from '../../AC'
import { connect } from 'react-redux'


class MySelect extends Component {
    static propTypes = {
        
    }

    changeSelection = () => {
        const { deleteArticle, testScore } = this.props
        console.log(testScore.map(article =>  article.value))
        selectFilter(testScore.map(article =>  article.value))
    }

    render() {
          console.log(this.props.testScore)
        return (
        <div>
            <Select options = { this.props.testScore } value = { null } onChange = { this.changeSelection } multi = { true } />
        </div>
        )
    }
}

export default connect(
    state => ({
        testScore: state.articles.map(artilce =>({
            label: artilce.title,
            value: artilce.id
          }))
    }),
    { selectFilter }
)(MySelect)