import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'


export default class MySelect extends Component {
    static propTypes = {
        
    }

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
            <Select options       = { options } value = { this.state.selection } onChange = { this.changeSelection } multi = { true } />
        </div>
        )
    }
}
