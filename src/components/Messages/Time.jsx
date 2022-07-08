
import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

const Time = ({ date, className }) => {

  if (!date) {
    return null
  }
  const dateOb = new Date(date)
  console.log(dateOb)

  const wisibleDate = (format(dateOb, 'PP') === format(new Date(), 'PP'))
    ? format(dateOb, 'H:m')
    : format(dateOb, 'd LLL y')


  return (
    <time className={`${className}`}>
      <span>
        {wisibleDate}
      </span>
    </time>
  )
}

Time.defaultProps = {
  date: '',
}

Time.propTypes = {
  data: PropTypes.string
}

export default Time

