import React, { PureComponent } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import { loadComments } from "../AC";
import Loader from './Loader'
import { connect } from 'react-redux'
import {mapToArr} from '../helpers'

class CommentList extends PureComponent {
    static propTypes = {
        comment: PropTypes.array,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    componentDidMount(){
        const { loaded, loading, loadComments, isOpen, articleId } = this.props
        if(!loading || !loaded) loadComments(articleId)
    }

    getBody = () => {
        const { articleId, loading, comments, isOpen } = this.props
        
        if(loading) return <Loader/>
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
                        {comments.map(value => <li key={value.id}><Comment id = {value.id}/></li>)}
                    </ul>
                    <CommentForm articleId = { articleId} />
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

export default connect(state => {
   return {
       loading: state.comments.loading,
       loaded: state.comments.loaded,
       comments: mapToArr(state.comments.entities)
   }
}, { loadComments })(toggleOpen(CommentList))