import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { ru, en } from '../description'

export default class LocalizedText extends Component {
    static propTypes = {}

    static contextTypes = {
        language: PropTypes.bool
    }

    render() {
        return (
            <div>
                {this.context.language ? ru[this.props.children]: en[this.props.children]}
            </div>
        )
    }
}