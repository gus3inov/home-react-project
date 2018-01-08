import { ADD_COMMENT, LOAD_COMMENTS, LOAD_COMMENTS_PAGE, SUCCESS } from '../constance'
import { arrToMap } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
})

const ReducerState = Record({
    entities: new OrderedMap({}).sort((a, b) => {
        if (a < b) { return -1; }
        if (a > b) { return 1; }
        if (a === b) { return 0; }
    })
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
    const { type, payload, randomId, response } = action

    switch(type){
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId }))

        case LOAD_COMMENTS + SUCCESS:
            return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)))

        case LOAD_COMMENTS_PAGE:
            return commentsState.setIn(['entities', ''])
    }

    return commentsState
}