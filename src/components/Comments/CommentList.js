import React, { PureComponent } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import { loadComments } from "../AC";
import Loader from './Loader'
import { connect } from 'react-redux'
import { RaisedButton } from 'material-ui'

class CommentList extends PureComponent {
    static propTypes = {
        comment: PropTypes.array,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    componentWillReceiveProps({ isOpen, article, loadComments }) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) loadComments(article.id)    
    }

    getBody = () => {
        const {article: {comments = [], id, commentsLoaded, commentsLoading}, isOpen} = this.props
            
        if (!isOpen) return null
        if (commentsLoading) return <Loader />
        if (!commentsLoaded) return null
        
        if (!comments.length) return (
            <div>
                <p>No comments yet</p>
                <CommentForm articleId = {id} />
            </div>
        )
        
        return (
            <div>
                <ul>
                    {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
                </ul>
                <CommentForm articleId = {id} />
            </div>
        )
    }

    render(){
        const { isOpen, toggleOpen, article } = this.props
        const text = isOpen ? 'Hide comments' : 'Show comments'
        
        return (
            <div className="article-comments">
                <RaisedButton onClick = {toggleOpen}>{text}</RaisedButton>
                {this.getBody({ article, isOpen })}
            </div>
        )
    }
}

export default connect(null, { loadComments })(toggleOpen(CommentList))