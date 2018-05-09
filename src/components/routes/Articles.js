import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from '../Articles/ArticleList'
import Article from '../Articles/Article'
import { Route } from 'react-router-dom'

class Articles extends Component {
    static propTypes = {
        
    }

    render(){
        return(
           <div>
                <Route path = "/articles" render = { this.getIndex } exact/>
                <ArticleList />
                <Route path = "/articles/:id" render = { this.getArticle }/>
        </div>
        )
    }

    getIndex = () => {
        return <h2>Please select article</h2>
    }
    
    getArticle = ({ match }) => {
        const { id } = match.params
        return <Article id = { id } isOpen key = { id } />
    }
       
}

export default Articles