import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            id: PropTypes.string
        }).isRequired
    }

    render() {
        const { article, isOpen, toggleOpen } = this.props
        return (
            <div className="article">
                <h2 className="article-title">{article.title}</h2>
                <button className="article-button" onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
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

export default toggleOpen(Article) 