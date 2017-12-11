import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'

function CommentList ({ article, isOpen, toggleOpen }) {
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div className="article-comments">
                <button className="article-button__comment" onClick = {toggleOpen}>{text}</button>
                {getBody({ article, isOpen })}
            </div>
        )
    }

    function getBody({article: {comments = [], id}, isOpen}) {
        if (!isOpen) return null
        if (!comments.length) {
            return (
            <div>
                <p>No comments yet</p>
                <CommentForm articleId = {id} />
            </div>
        )
    }
        return (
            <div>
                <ul>
                    {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
                </ul>
                <CommentForm articleId = {id} />
            </div>
        )
    }

CommentList.propTypes = {
    comment: PropTypes.array,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
}

export default toggleOpen(CommentList)