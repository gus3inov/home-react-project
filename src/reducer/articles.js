import { normalizedArticles as defaultArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES } from '../constance'
import { arrToMap } from '../helpers'
import {Map, Record} from 'immutable'

const defaultState = new Map({})
const articleRecord = Record({
    text: undefined,
    title: 'Some Blog',
    id: undefined,
    comments: []
})

export default (articlesState = defaultState, action) => {
    const { type, payload, response, randomId } = action

    switch(type){
        case DELETE_ARTICLE:
            articlesState.delete(payload.id)

        case ADD_COMMENT:
            return articlesState.updateIn([payload.articleId, 'comments'], comments =>  comments.concat(randomId))

        case LOAD_ALL_ARTICLES:
            return arrToMap(response, articleRecord)
    }

    return articlesState
}