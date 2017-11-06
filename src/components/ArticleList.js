import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

export default class ArticleList extends Component{
    state = {
        openArticleId: null
    }
    
    render() {
        const articleRender = this.props.articles.map(value => 
        <li key={value.id}>
            <Article 
                article = { value }
                isOpen = { value.id === this.state.openArticleId }
                toggleOpen = { this.toggleOpenArticle.bind(this, value.id) }
                />
        </li>)

    return (
        <ul>
            {articleRender}
        </ul>
      )
    }

    toggleOpenArticle = (openArticleId) => {
        this.setState({
            openArticleId
        })
    }

}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}