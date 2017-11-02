import React from 'react'
import {render} from 'react-dom'
import ArticleList from './ArticleList'
import {articles} from './fixtures'

function App(){
    return (
        <div>
        <ArticleList articles={articles}/>
        </div>
    );
}
render(<App />, document.getElementById('container'))