import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

function CommentList ({ comments = [], isOpen, toggleOpen }) {
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div className="article-comments">
                <button className="article-button__comment" onClick = {toggleOpen}>{text}</button>
                {getBody({ comments, isOpen })}
            </div>
        )
    }

   const getBody = ({ comments, isOpen }) =>{
        if (!isOpen) return null
        if (!comments.length) return <p>No comments yet</p>

        return (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        )
    }

CommentList.propTypes = {
    comment: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
}

export default toggleOpen(CommentList)