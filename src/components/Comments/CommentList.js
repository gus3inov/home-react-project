import React, { PureComponent } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../../decorators/toggleOpen'
import CommentForm from './CommentForm'
import { loadComments } from "../../AC/index";
import Loader from '../Loader'
import { connect } from 'react-redux'
import { RaisedButton } from 'material-ui'
import { ru, en } from '../../description'

class CommentList extends PureComponent {
    static propTypes = {
        comment: PropTypes.array,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static contextTypes = {
        language: PropTypes.bool.isRequired
    }

    words = {
        show_comments: this.context.language ? ru.show_comments : en.show_comments,
        hide_comments: this.context.language ? ru.hide_comments : en.hide_comments
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
                <CommentForm articleId = {id} />
                <p>No comments yet</p>
            </div>
        )
        
        return (
            <div>
                <CommentForm articleId = {id} />
                <ul>
                    {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
                </ul>
            </div>
        )
    }

    render(){
        const { isOpen, toggleOpen, article } = this.props
        const text = isOpen ? this.words.hide_comments : this.words.show_comments
        console.log(this.context)
        return (
            <div className="article-comments">
                <RaisedButton className = "button" onClick = {toggleOpen}>{text}</RaisedButton>
                {this.getBody({ article, isOpen })}
            </div>
        )
    }
}

export default connect(null, { loadComments })(toggleOpen(CommentList))