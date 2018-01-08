import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { commentSelectorFactory } from '../../selectors/index'

function Comment({comment}) {

    return (
        <div className="article-comment__info">
            <p>{comment.text} </p><b className="article-comment__info_user">by {comment.user}</b>
        </div>
    )
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    //from connect
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory()

    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
}

export default connect(mapStateToProps, null)(Comment)