import React from 'react'
import PropTypes from 'prop-types'
import App from './App'
import  { Provider } from 'react-redux'

const Root = (props) => {
  return (
    <div>
        <Provider store = { store}>
            <App {...props} />
        </Provider>
    </div>
  )
}

Root.propTypes = {

}

export default Root
