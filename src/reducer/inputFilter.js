import { articles as defaultArticles } from '../fixtures'
import {  INPUT_ARTICLE } from '../constance'

export default (articlesState = '', action) => {
    const { type, payload } = action

    switch(type){
        case INPUT_ARTICLE : return articlesState.filter(article => {
            article.title === payload.title
        })
    }

    return articlesState
}