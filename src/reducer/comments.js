import { normalizedComments as defaultComments } from '../fixtures'
import { ADD_COMMENT, LOAD_COMMENTS, START, FAIL, SUCCESS } from '../constance'
import { arrToMap, ReducerState } from '../helpers'
import {Map, Record, OrderedMap} from 'immutable'

const commentRecord = Record({
    id: undefined,
    title: '',
    text: undefined
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
    const { type, payload, randomId } = action


    switch(type){
        case ADD_COMMENT:
            return { ...commentsState, [randomId]: payload.comment }

        case LOAD_COMMENTS + START:
                return commentsState.setIn(['entities', payload.id], new commentRecord(payload.response))
                    console.log(payload.response)

    }

    return commentsState
}