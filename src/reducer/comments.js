import { normalizedComments as defaultComments } from '../fixtures'
import { ADD_COMMENT, LOAD_COMMENT, START, FAIL, SUCCESS } from '../constance'
import { arrToMap } from '../helpers'
import {Map, Record, OrderedMap} from 'immutable'

const commentRecord = Record({

})

export default (commentsState = commentMap, action) => {
    const { type, payload, randomId } = action

    switch(type){
        case ADD_COMMENT:
            return {...commentsState, [randomId]: payload.comment}

        case LOAD_COMMENT + START:
                return
    }

    return commentsState
}