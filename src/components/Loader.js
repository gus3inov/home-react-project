import React from 'react'
import CircularProgress from 'material-ui/CircularProgress';

const Loader = () => {
  return (
      <div className="alt-loader">
          <CircularProgress size={80} thickness={5} />
      </div>
  )
}

Loader.propTypes = {

}

export default Loader
