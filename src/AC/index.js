import {
    INCREMENT, 
    DECREMENT, 
    RESET, 
    DELETE_ARTICLE, 
    DATE_ARTICLE, 
    INPUT_ARTICLE, 
    SELECT_ARTICLE,
    ADD_COMMENT } from '../constance'

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

export function deleteArticle ( id ){
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectFilter ( id ) {
    return {
        type: SELECT_ARTICLE,
        payload:  { id } 
    }
}

export function dateFilter ( date ) {
    return {
        type: DATE_ARTICLE,
        payload:  { date } 
    }
}

export function inputFilter ( title = '') {
    return {
        type: INPUT_ARTICLE,
        payload: { title  }  
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: { comment, articleId },
        generateId: true
    }
}