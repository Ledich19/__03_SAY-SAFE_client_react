import React from 'react'
import './NotifyComponent.scss'
import { FaExclamationTriangle, FaCheckCircle, FaInfoCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const NotifyComponent   = ({ className }) => {

  const notifyMessage = useSelector(state => state.notify)
  if (!notifyMessage) {
    return null
  }

  return (
    <div className={`notifi notifi-${notifyMessage.type} ${className}`}>
      <i className={`notifi__triengle notifi-${notifyMessage.type}`}>
        {notifyMessage.type !== 'error' || <FaExclamationTriangle />}
        {notifyMessage.type !== 'success' || <FaCheckCircle/>}
        {notifyMessage.type !== 'info' || <FaInfoCircle/>}
        {notifyMessage.type !== 'warning' || <FaExclamationTriangle/>}
      </i>
      <div className={`notifi__text notifi-${notifyMessage.type}`}>
        <span>{notifyMessage.title}</span>
        <span>{notifyMessage.text}</span>
      </div>
    </div>
  )
}

export default NotifyComponent