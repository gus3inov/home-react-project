import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filters from './filters'
import comments from './comments'
import formUserReducer  from './form'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
    count: counterReducer,
    articles,
    filters,
    comments,
    formUserReducer,
    router: routerReducer,
    form: formReducer
})
