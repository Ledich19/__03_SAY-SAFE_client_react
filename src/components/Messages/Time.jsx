
import React from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import ruLocale from 'date-fns/locale/ru'
import { BsCheckAll } from 'react-icons/bs'

const Time = ({ date , className }) => {
  BsCheckAll
  return (
    <time className={`${className}`}>
      {date && <span>{formatDistanceToNow(new Date(date), { addSuffix: true, locale: ruLocale })}</span>}
    </time>
  )
}

Time.defaultProps = {
  data: '',
}

Time.propTypes = {
  data: PropTypes.string
}

export default Time

