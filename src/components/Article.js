import React, { Component, PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import CommentList from './CommentList'


class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            id: PropTypes.string
        }).isRequired
    }

    // shouldComponentUpdate ( nextProps, nextState ){
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    render() {
        const { article, isOpen, toggleOpen } = this.props
        console.log('---', 'update article')
        return (
            <div className="article" ref = {this.setContainerRef}>
                <h2 className="article-title">{article.title}</h2>
                <button className="article-button" onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                { this.getBody() }
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props

        if (!isOpen) return null
        return (
            <section className="article-text">
               {article.text}
               <CommentList comments = {article.comments}/>
            </section>
        )
    }
}

export default Article