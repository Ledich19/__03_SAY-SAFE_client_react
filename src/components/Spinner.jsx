import React from 'react'
import PropTypes from 'prop-types'
import './Spinner.scss'

const Spiner = ({ className }) => {
  return (
    <div className={`spinner-container ${className}`}>
      <div className='loading-spinner'>
      </div>
    </div>
  )
}

Spiner.defaultProps = {
  className: '',
}

Spiner.propTypes = {
  className: PropTypes.string,
}


export default Spiner