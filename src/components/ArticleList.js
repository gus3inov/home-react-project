import React from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpenArticle from '../decorators/toggleOpenArticle'

function ArticleList({ openArticleId, articles }) {

    const articleRender = articles.map(value => 
        <li key={ value.id }>
            <Article 
                article = { value }
                isOpen = { value.id === value.id }
                toggleOpen = { toggleOpenArticle }
            />
        </li>);


    return (
        <ul>
            { articleRender }
        </ul>
      )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    toggleOpenArticle: PropTypes.func.isRequired
}

export default toggleOpenArticle( ArticleList )