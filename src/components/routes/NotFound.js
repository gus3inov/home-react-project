import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

class NotFound extends Component {
    static propTypes = {
        
    }

    render(){
        return(
           <div>
                <h1>404 Not Found</h1>
            </div>
        )
    }
}

export default NotFound