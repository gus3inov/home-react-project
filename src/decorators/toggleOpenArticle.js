import React, { Component as ReactComponent} from 'react'
import PropTypes from 'prop-types'

export default ( OriginalComponent ) => class WrappedComponent extends ReactComponent {
    state = {
        openArticleId: null
    }

    render(){
        return (
        <OriginalComponent 
            { ...this.props } 
            { ...this.state }
            toggleOpenArticle = { this.toggleOpenArticle }
        />
        )
       
    }

    toggleOpenArticle = openArticleId =>  {
        this.setState({
            openArticleId
        })
    }

}