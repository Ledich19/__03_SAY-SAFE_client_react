
import React from 'react'
import PropTypes from 'prop-types'
import './Message.scss'
import { formatDistanceToNow } from 'date-fns'
import ruLocale from 'date-fns/locale/ru'
import { BsCheckAll } from 'react-icons/bs'

const Message = ({ text, date, avatar, username, isMe, isReaded, className, atachments }) => {
  BsCheckAll
  return (
    <div className={`item-messege ${(isMe) ? '_my-messege' : ''} ${className}`}>
      <div className='item-messege__photo'>
        <img src={avatar} alt={`avatar ${username}`} />
      </div>
      <div className='item-message__content'>

        <div className='item-messege__text'>
          {text}
          <div className='item-messege__attachmens'>
            {atachments.map((item) => {
              return (
                <div key={item.url} className='item-messege__attachmens-item'>
                  <img src={item.url} alt={`${item.fileName}`} />
                </div>
              )
            })}
          </div>
        </div>
        <time className='item-messege__data'>
          <span>{formatDistanceToNow(new Date(date), { addSuffix: true, locale: ruLocale })}</span>
        </time>
      </div>
      <BsCheckAll className={`item-messege__read ${(isMe && isReaded) ? '_readed' : ''}`} />
    </div>
  )
}

Message.defaultProps = {
  text: '',
  data: '',
  avatar: '',
  username: '',
  isMy: '',
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  data: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  isMy: PropTypes.bool,
  atachments: PropTypes.array,
}

export default Message

