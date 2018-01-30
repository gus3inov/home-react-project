import {
    INCREMENT, 
    DECREMENT, 
    RESET, 
    DELETE_ARTICLE, 
    DATE_ARTICLE, 
    INPUT_ARTICLE, 
    SELECT_ARTICLE,
    ADD_COMMENT,
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE,
    START,
    FAIL,
    SUCCESS,
    LOAD_COMMENTS,
    LOAD_COMMENTS_PAGE,
    SUBMIT_FORM
    } from '../constance'

import {push} from 'react-router-redux'

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

export function loadAllArticles (){
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticle(id){
    return dispatch => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

        setTimeout(()=>{
            fetch(`/api/article/${id}`)
                .then(res => {
                    if(res.status >= 400){
                        throw new Error(res.statusText)
                    }

                    return res.json()
                })
                .then(response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: { id, response }
                }))
                .catch(error => {
                    dispatch({
                    type: LOAD_ARTICLE + FAIL,
                    payload: { id, error }
                })
            dispatch(push('/error'))
        })
        }, 500)
    }
}

export function loadComments (id){
    return {
        type: LOAD_COMMENTS,
        payload: { id },
        callAPI: `/api/comment?article=${id}`
    }

}

export function checkAndLoadCommentsForPage(offset){
    return (dispatch, getState) => {
        const {comments: {pagination}} = getState()
        if (pagination.getIn([offset, 'loading']) || pagination.getIn([offset, 'ids'])) return

        dispatch({
            type: LOAD_COMMENTS_PAGE,
            payload: { offset },
            callAPI: `/api/comment?limit=5&offset=${(offset - 1) * 5}`
        })
    }
}

export function submitForm (value){
   return dispatch => {
        fetch('api/contact', {
            method: 'POST',
            body: value
        }).then((response) => {

            if(!response.ok){
                throw Error(response.statusText)
            }

            console.log(response)

            dispatch({
                type: SUBMIT_FORM,
                payload: value
            })
        }).catch(err => {
            console.error(err)
        })
    }
}