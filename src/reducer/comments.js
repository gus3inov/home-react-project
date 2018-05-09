import { ADD_COMMENT, LOAD_COMMENTS, LOAD_COMMENTS_PAGE, SUCCESS, START } from '../constance'
import { arrToMap } from '../helpers'
import { Record, OrderedMap, Map } from 'immutable'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    pagination: new Map({}),
    total: null
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
    const { type, payload, randomId, response } = action

    switch(type){
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId }))

        case LOAD_COMMENTS + SUCCESS:
            return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)))

        case LOAD_COMMENTS_PAGE + START:
            return commentsState.setIn(['pagination', payload.offset, 'loading'], true)

        case LOAD_COMMENTS_PAGE + SUCCESS:
            return commentsState
                .set('total', response.total)
                .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
                .setIn(['pagination', payload.offset, 'ids'], response.records.map(comment => comment.id))
                .setIn(['pagination', payload.offset, 'loading'], false)
    }

    return commentsState
}