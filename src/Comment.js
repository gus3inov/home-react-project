import React from 'react'

export default function Comment({comment}) {
    return (
        <div className="article-comment__info">
            <p>{comment.text} </p><b className="article-comment__info_user">by {comment.user}</b>
        </div>
    )
}