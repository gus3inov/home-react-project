import { articles } from '../fixtures'
import { 
    DATE_ARTICLE, 
    SELECT_ARTICLE, 
    INPUT_ARTICLE } from '../constance'

export default (articlesState = articles, action) => {
    const { type, payload } = action

    switch(type){
        case SELECT_ARTICLE: return articlesState.filter(article => article.id !== payload.id)
    }

    return articlesState
}