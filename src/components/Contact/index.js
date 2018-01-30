import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Form from './Form'
import { connect } from 'react-redux'
import { submitForm } from '../../AC'

class Contact extends Component {
    static propTypes = {}

    submit = (values) => {

        this.props.submitForm(values)
        console.log(this.props.userData)
    }

    render() {
        return (
            <div>
                <Form onSubmit={ this.submit }/>
            </div>
        )
    }
}

export default connect((state, ownProps) => ({
    userData: state.form.users
}), { submitForm })(Contact)
