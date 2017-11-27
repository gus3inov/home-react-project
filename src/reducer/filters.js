import { articles as defaultArticles } from '../fixtures'
import { SELECT_ARTICLE } from '../constance'

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch(type){
        case SELECT_ARTICLE: return articlesState.filter(article => article.id !== payload.id)
    }

    return articlesState
}