import { INCREMENT, DECREMENT, RESET, DELETE_ARTICLE } from '../constance'

export function increment (){
    return {
        type: INCREMENT
    }
}

export function decrement (){
    return {
        type: DECREMENT
    }
}

export function reset (){
    return {
        type: RESET
    }
}

export function deleteArticle (id){
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}