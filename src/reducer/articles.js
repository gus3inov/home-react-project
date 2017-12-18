import { normalizedArticles as defaultArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES } from '../constance'
import { arrToMap } from '../helpers'

const articleMap = arrToMap(defaultArticles)

export default (articlesState = {  }, action) => {
    const { type, payload, response, randomId } = action

    switch(type){
        case DELETE_ARTICLE:
            const tmpState = articlesState
            delete tmpState[payload.id]
            return tmpState

        case ADD_COMMENT:
            const article = articlesState[payload.articleId]
            return {
                ...articlesState,
                [payload.articleId]: {
                    ...article,
                    comments: (article.comments || []).concat(randomId)
                }
            }
            
        case LOAD_ALL_ARTICLES:
            return arrToMap(response)
    }

    return articlesState
}