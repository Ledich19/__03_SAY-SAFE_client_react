
import React from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow, format } from 'date-fns'
import ruLocale from 'date-fns/locale/ru'

const Time = ({ date, className }) => {

  if (!date) {
    return null
  }
  const dateOb = new Date(date)
  console.log(dateOb)

  const wisibleDate = (format(dateOb, 'PP') === format(new Date(), 'PP'))
    ? format(dateOb, 'H:m')
    : formatDistanceToNow(dateOb, { addSuffix: true, locale: ruLocale })


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

