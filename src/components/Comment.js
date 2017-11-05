import React from 'react'
import PropTypes from 'prop-types'

export default function Comment({comment}) {
    return (
        <div className="article-comment__info">
            <p>{comment.text} </p><b className="article-comment__info_user">by {comment.user}</b>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}