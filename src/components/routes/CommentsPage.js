import React from 'react'
import CommentPagination from '../Comments/CommentPagination'
import { Redirect, Route } from 'react-router-dom'

export default function CommentsPage ({ match }){
    if(match.isExact) return <Redirect to = "/comments/1" />
    return <Route path = "/comments/:page" render = {getCommentsPaginator}/>
}

function getCommentsPaginator ({ match }){
    return <CommentPagination page = {match.params.page}/>
}

