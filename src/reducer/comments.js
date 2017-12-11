import { normalizedComments as defaultComments } from '../fixtures'
import { ADD_COMMENT } from '../constance'
import { arrToMap } from '../helpers'

const commentMap = arrToMap(defaultComments)

export default (commentsState = commentMap, action) => {
    const { type, payload, randomId } = action

    switch(type){
        case ADD_COMMENT:
            return {...commentsState, [randomId]: payload.comment}
    }

    return commentsState
}