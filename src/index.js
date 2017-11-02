import React from 'react'
import {render} from 'react-dom'
import Article from './Article'
import {articles} from './fixtures'

const article = articles[0]

function HelloWorld(){
    return (
        <div>
        <Article article={article}/>
        </div>
    );
}
render(<HelloWorld />, document.getElementById('container'))