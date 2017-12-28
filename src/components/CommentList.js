import React, { PureComponent } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import { loadComments } from "../AC";
import Loader from './Loader'
import { connect } from 'react-redux'

class CommentList extends PureComponent {
    static propTypes = {
        comment: PropTypes.array,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    componentDidMount(){
        const { loaded, loading, loadComments } = this.props
        if(!loading || !loaded) loadComments()
    }

    getBody = () => {
        const { articleId, comments, isOpen } = this.props

        console.log(comments)

        if (!isOpen) return null
        if (!comments.length) {
            return (
                <div>
                    <p>No comments yet</p>
                    <CommentForm articleId={ articleId }/>
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
        const { isOpen, toggleOpen, loading, article } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'

        if(loading) return <Loader/>
        return (
            <div className="article-comments">
                <button className="article-button__comment" onClick = {toggleOpen}>{text}</button>
                {this.getBody({ article, isOpen })}
            </div>
        )
    }
}

export default connect(state => {
   return {
       loading: state.comments.loading,
       loaded: state.comments.loaded,
       comments: state.comments
   }
}, { loadComments })(toggleOpen(CommentList))