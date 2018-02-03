import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class LanguageProvider extends Component {
    static propTypes = {}

    static childContextTypes = {
        language: PropTypes.bool.isRequired
    }

    getChildContext () {
        return {
            language: this.props.language
        };
    }


    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}