import React, { Component as ReactComponent} from 'react'
import PropTypes from 'prop-types'

export default ( OriginalComponent ) => class WrappedComponent extends ReactComponent {

    static propTypes = {
        isOpen: PropTypes.bool,
    }

    state = {
        isOpen: false
    }

    render(){
        return (
        <OriginalComponent 
            { ...this.props } 
            { ...this.state }
            toggleOpen = { this.toggleOpen }
        />
        )
       
    }

    toggleOpen = ( ev ) => {
        ev && ev.preventDefault && ev.preventDefault()
            this.setState({
                isOpen: !this.state.isOpen
            })
    }
}