import React, { Component, PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CommentList from '../Comments/CommentList'
import { CSSTransitionGroup } from 'react-transition-group'
import { deleteArticle } from '../../AC/index'
import { loadArticle } from '../../AC/index'
import Loader from '../Loader'
import '../../css/animation.css'

import ArticleHeader from './ArticleHeader'

class Article extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    static contextTypes = {
            language: PropTypes.bool.isRequired
    }

    state = {
        updateIndex: 0
    }

    componentDidMount(){
        const { loadArticle, article, id } = this.props
        if(!article || (!article.text && !article.loading)) loadArticle(id);
    }
    
    render() {
        const { article, isOpen, toggleOpen } = this.props
        if(!article) return null
        console.log(this.context.language)
        return (
            <div className="article" ref = {this.setContainerRef}>
                <h2 className="article-title">{ article.title }</h2>
                <ArticleHeader className = "article-options" handleDelete = { this.handleDelete }/>
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
      }

      getBody() {
        const { article, isOpen} = this.props
        
        if ( !isOpen ) return null
        if (article.loading) return <Loader/>
        return (
            <section className="article-text">
               { article.text }
               <CommentList article = { article } ref = {this.setCommentsRef} key = {this.state.updateIndex}/>
            </section>
        )
    }
}

export default connect((state, ownProps) => ({
    article: state.articles.entities.get(ownProps.id)
}), { loadArticle, deleteArticle })(Article)