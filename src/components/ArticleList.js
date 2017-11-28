import React from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpenArticle from '../decorators/toggleOpenArticle'
import { connect } from 'react-redux'

function ArticleList({ openArticleId, articles, toggleOpenArticle, isOpen }) {

    const articleRender = articles.map(value => 
        <li key={ value.id }>
            <Article 
                article = { value }
                isOpen = { value.id === openArticleId }
                toggleOpen = { toggleOpenArticle(value.id) }
            />
        </li>);


    return (
        <div className = "article-list">
        <ul>
            { articleRender }
        </ul>
        </div>
      )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    toggleOpenArticle: PropTypes.func.isRequired
}

export default connect(({filters, articles}) => {
    const {selected, dateRange: {from, to}} = filters

    const filteredArticles =  articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })

    return {
        articles: filteredArticles
    }
})(toggleOpenArticle(ArticleList))