import { SUBMIT_FORM } from '../constance'
import { Record } from 'immutable'

const UsersData = Record({
    users: null
})

const defaultState = new UsersData()

export default (state = defaultState, action) => {
    const { payload, type } = action

    switch (type){
        case SUBMIT_FORM:
            console.log('send data')
            return state.set('users', payload)
    }

    return state
}
