import { normalizedArticles as defaultArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constance'
import { arrToMap } from '../helpers'

const articleMap = arrToMap(defaultArticles)

export default (articlesState = articleMap, action) => {
    const { type, payload, randomId } = action

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
    }

    return articlesState
}