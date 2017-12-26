import React, { PureComponent } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import { loadArticle } from "../AC";
import Loader from './Loader'
import { connect } from 'react-redux'

class CommentList extends PureComponent {
    static propTypes = {
        comment: PropTypes.array,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    getBody = () => {
        const {article: {comments = [], id}, isOpen} = this.props
        if (!isOpen) return null
        if (!comments.length) {
            return (
                <div>
                    <p>No comments yet</p>
                    <CommentForm articleId={id}/>
                </div>
            )
        }else {
            return (
                <div>
                    <ul>
                        {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
                    </ul>
                    <CommentForm articleId = {id} />
                </div>
            )
        }
    }

    render(){
        const { isOpen, toggleOpen, article } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'



        return (
            <div className="article-comments">
                <button className="article-button__comment" onClick = {toggleOpen}>{text}</button>
                {this.getBody({ article, isOpen })}
            </div>
        )
    }
}

export default connect(null, { loadArticle })(toggleOpen(CommentList))