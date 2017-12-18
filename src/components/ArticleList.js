import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpenArticle from '../decorators/toggleOpenArticle'
import { connect } from 'react-redux'
import { filtrateArticlesSelector } from '../selectors'
import { loadAllArticles } from '../AC'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        toggleOpenArticle: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.loadAllArticles()
    }

    render(){
        const { articles, openArticleId, toggleOpenArticle } = this.props 

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

}

export default connect((state) => {
    return {
        articles: filtrateArticlesSelector(state)
    }
}, {
    loadAllArticles
})(toggleOpenArticle(ArticleList))