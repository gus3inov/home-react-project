import {
    INCREMENT, 
    DECREMENT, 
    RESET, 
    DELETE_ARTICLE, 
    DATE_FILTER, 
    INPUT_FILTER, 
    ELECT_FILTER } from '../constance'

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

export function selectFilter (id) {
    return {
        type: SELECT_FILTER,
        payload: { id }
    }
}

export function dateFilter (id) {
    return {
        type: DATE_FILTER,
        payload: { id }
    }
}

export function inputFilter (id) {
    return {
        type: INPUT_FILTER,
        payload: { id }
    }
}