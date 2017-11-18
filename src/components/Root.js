import React from 'react'
import PropTypes from 'prop-types'
import App from './App'
import  { Provider } from 'react-redux'

const Root = () => {
  return (
    <div>
        <Provider store = { store}>
            <App/>
        </Provider>
    </div>
  )
}

Root.propTypes = {

}

export default Root
