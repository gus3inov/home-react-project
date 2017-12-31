import { normalizedComments as defaultComments } from '../fixtures'
import { ADD_COMMENT, LOAD_COMMENTS, START, FAIL, SUCCESS } from '../constance'
import { arrToMap, ReducerState } from '../helpers'
import {Map, Record, OrderedMap} from 'immutable'

const commentRecord = Record({
    id: undefined,
    user: '',
    text: undefined
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
    const { type, payload, randomId, response } = action

    switch(type){
        case ADD_COMMENT:
            return { ...commentsState, [randomId]: payload.comment }

        case LOAD_COMMENTS + START:
                return commentsState
                                .set('loading', true)   

        case LOAD_COMMENTS + SUCCESS:
              return commentsState
                            .set('entities', arrToMap(response, commentRecord))
                            .set('loading', false)   
                            .set('loaded', true)                            

    }

    return commentsState
}