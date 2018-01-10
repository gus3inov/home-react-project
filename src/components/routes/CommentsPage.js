import React from 'react'
import CommentPagination from '../Comments/CommentPagination'

export default function CommentsPage ({ match }){
    return <CommentPagination page = { match.params.page }/>
}