import { INCREMENT, DECREMENT, RESET } from '../constance'

export default (state = 0, action) => {
    const { type } = action

    switch ( type ){
        case INCREMENT: return state + 1
        case DECREMENT: 
            if(state === 0){
                return 0
            }else{
                return state - 1
            }
        case RESET    : return state = 0
    }

    return state;
}