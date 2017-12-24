import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpenArticle from '../decorators/toggleOpenArticle'
import { connect } from 'react-redux'
import { filtrateArticlesSelector } from '../selectors'
import { loadAllArticles } from '../AC'
import Loader from './Loader'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        toggleOpenArticle: PropTypes.func.isRequired
    }

    componentDidMount(){
        const { loaded, loading, loadAllArticles } = this.props
        if(!loading || !loaded) loadAllArticles()
        console.log(loading, loaded);
    }

    render(){
        const { articles, openArticleId, toggleOpenArticle, loading } = this.props 
        if(loading) return <Loader />
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
        articles: filtrateArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    }
}, {
    loadAllArticles
})(toggleOpenArticle(ArticleList))