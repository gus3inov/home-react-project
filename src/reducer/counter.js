import { INCREMENT, DECREMENT, RESET } from '../constance'

export default (state = 0, action) => {
    const { type } = action

    switch ( type ){
        case INCREMENT: return state + 1
        case DECREMENT: return state - 1
        case RESET    : return state = 0
    }

    return state;
}