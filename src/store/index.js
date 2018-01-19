import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import history from '../history'

const enhancer = applyMiddleware(thunk, routerMiddleware(history), randomId, api)

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), enhancer)

/**
 * @default dev only
 */

window.store = store

export default store
