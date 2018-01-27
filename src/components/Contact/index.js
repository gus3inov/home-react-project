import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Form from './Form'

export default class Contact extends Component {
    static propTypes = {}

    handleSubmit = (values) => {
        console.log(values)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}