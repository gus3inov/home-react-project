import React, { Component, PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import { CSSTransitionGroup } from 'react-transition-group'
import '../css/animation.css'


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
                <h2 className="article-title">{ article.title }</h2>
                <button className="article-button" onClick = { toggleOpen }>
                    { isOpen ? 'close' : 'open' }
                </button>
                <CSSTransitionGroup
                    transitionName = 'article'
                    transitionEnterTimeout = { 300 }
                    transitionLeaveTimeout = { 300 }
                >
                { this.getBody() }
                </CSSTransitionGroup>
            </div>
        )
    }

    getBody() {
        const { article, isOpen } = this.props

        if ( !isOpen ) return null
        return (
            <section className="article-text">
               { article.text }
               <CommentList comments = { article.comments }/>
            </section>
        )
    }
}

export default Article