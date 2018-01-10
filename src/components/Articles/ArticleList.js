import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filtrateArticlesSelector } from '../../selectors/index'
import { loadAllArticles } from '../../AC/index'
import Loader from '../Loader'
import { NavLink } from 'react-router-dom'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    componentDidMount(){
        const { loaded, loading, loadAllArticles } = this.props
        if(!loading || !loaded) loadAllArticles()
    }

    render(){
        const { articles, loading } = this.props 
        if(loading) return <Loader />
        const articleRender = articles.map(article =>
                <NavLink  key={ article.id } to = { `/articles/${article.id}` } >
                    <GridTile
                        key={ article.id }
                        title={article.title}
                        subtitle={article.author ? <span>by <b>{article.author}</b></span> : <span>by <b>{'noname'}</b></span>}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    >
                        {article.img ? <img src={article.img} /> : <img src="https://facebook.github.io/react-vr/img/opengraph.png" />}
                    </GridTile>
                </NavLink>

            )

        return (
            <div className = "article-list">
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                { articleRender }
                </GridList>
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
})(ArticleList)