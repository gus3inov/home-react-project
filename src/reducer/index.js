import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filters from './filters'
import comments from './comments'
import { routerReducer } from 'react-router-redux'
import { reduxForm } from 'redux-form'


export default combineReducers({
    count: counterReducer,
    articles,
    filters,
    comments,
    router: routerReducer,
    form: reduxForm
})
