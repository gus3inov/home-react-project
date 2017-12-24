import React, { Component, PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import { CSSTransitionGroup } from 'react-transition-group'
import { deleteArticle } from '../AC'
import { loadArticle } from '../AC'
import '../css/animation.css'


class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    state = {
        updateIndex: 0
    }

    componentWillReceiveProps({ isOpen, loadArticle, article }){
        if(isOpen && !article.text && !article.loading) loadArticle(article.id)
    }

    // shouldComponentUpdate ( nextProps, nextState ){
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    render() {
        const { article, isOpen, toggleOpen } = this.props
        return (
            <div className="article" ref = {this.setContainerRef}>
                <h2 className="article-title">{ article.title }</h2>
                <button className="article-button left" onClick = { toggleOpen }>
                    { isOpen ? 'close' : 'open' }
                </button>
                <button className="article-button right" onClick = { this.handleDelete }>
                   Delete
                </button>
                <CSSTransitionGroup
                    transitionName = 'article'
                    transitionEnterTimeout = { 300 }
                    transitionLeaveTimeout = { 500 }
                    transitionAppear
                    transitionAppearTimeout = { 500 }
                >
                { this.getBody() }
                </CSSTransitionGroup>
            </div>
        )
    }

    handleDelete = () =>{
        const { deleteArticle, article } = this.props
        deleteArticle(article.id)
        console.log( deleteArticle(article.id))
    }

    setCommentsRef = ref => {
        //        console.log('---', ref)
    }

    getBody() {
        const { article, isOpen } = this.props

        if ( !isOpen ) return null
        return (
            <section className="article-text">
                  <button onClick = {() => this.setState({updateIndex: this.state.updateIndex + 1})}>update</button>
               { article.text }
               <CommentList article = {article} ref = {this.setCommentsRef} key = {this.state.updateIndex}/>
            </section>
        )
    }
}

export default connect(null, { loadArticle, deleteArticle })(Article)