import React, { Component as ReactComponent} from 'react'
import PropTypes from 'prop-types'

export default ( Component ) => class Accordion extends ReactComponent {
    constructor(props){
        super(props)
        this.state = {
            openArticleId: props.defaultOpenId
        }
    }

    render(){
        return (
        <Component 
            { ...this.props } 
            { ...this.state }
            toggleOpenArticle = { this.toggleOpenArticle }
        />
        )
       
    }

    toggleOpenArticle = openArticleId =>  ev => {
        this.setState({
            openArticleId: openArticleId === this.state.openArticleId ? null : openArticleId,
        })
    }

}