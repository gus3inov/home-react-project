import { normalizedArticles as defaultArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS, LOAD_ARTICLE } from '../constance'
import { arrToMap, ReducerState } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const articleRecord = Record({
    title: '',
    text: undefined,
    id: undefined,
    comments: []
})

const defaultState = new ReducerState()

export default (articlesState = defaultState, action) => {
    const { type, payload, response, randomId } = action

    switch(type){
        case DELETE_ARTICLE:
           return articlesState.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            return articlesState.updateIn(
                [
                    'entities',
                     payload.articleId, 
                     'comments'
                ], 
                     comments =>  comments.concat(randomId))

        case LOAD_ALL_ARTICLES + START:
                return articlesState.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articlesState
                .set('entities', arrToMap(response, articleRecord))
                .set('loading', false)
                .set('loaded', true)
        
        case LOAD_ALL_ARTICLES + START: 
                return articlesState.setIn([
                    'entities',
                    payload.id,
                    'loading'
                ], true)

        case LOAD_ARTICLE + SUCCESS:
                return articleState.setIn(['entities', payload.id], new articleRecord(payload.response))
    }

    return articlesState
}