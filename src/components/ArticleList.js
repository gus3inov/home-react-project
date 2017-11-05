import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

export default function ArticleList({ articles }){
    const articleRender = articles.map(value => <li key={value.id}><Article article={value}/></li>)
    return (
        <ul>
            {articleRender}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}