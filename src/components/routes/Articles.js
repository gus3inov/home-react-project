import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from '../ArticleList'
import Article from '../Article'
import { Route } from 'react-router-dom'

class Articles extends Component {
    static propTypes = {
        
    }

    render(){
        return(
           <div>
               <ArticleList />
               <Route path = "/articles/:id" render = { this.getArticle }/>
        </div>
        )
    }
    
    getArticle = ({ match }) => {
        const { id } = match.params
        return <Article id = { id } isOpen />
    }
       
}

export default Articles