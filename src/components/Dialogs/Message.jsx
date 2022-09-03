
import React from 'react'
import PropTypes from 'prop-types'
import './Message.scss'
import { BsCheckAll } from 'react-icons/bs'
import Time from './Time'
import Avatar from './Avatar'

const Message = ({
  id,
  text,
  date,
  avatar,
  username,
  isMe,
  isReaded,
  className,
  atachments,
  isTyping }) => {

  return (
    <div className={`item-messege ${(isMe) ? '_my-messege' : ''} ${(isTyping) ? '_is-typing' : ''} ${className}`}>
      <Avatar
        id={id}
        avatar={avatar}
        username={username}
        className={'item-messege__photo'}
      />
      <div className='item-message__content'>

        <div className='item-messege__text'>
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>{text}</p>
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
        <Time date={date} className='item-messege__data' />
      </div>
      {!isTyping && isMe && <BsCheckAll className={(isReaded) ? 'item-messege__read _readed' : 'item-messege__read'} />
      }
    </div>
  )
}

Message.defaultProps = {
  text: '',
  data: '',
  username: '',
  isMy: false,
  atachments: []
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  data: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  isMy: PropTypes.bool,
  atachments: PropTypes.array,
  isTyping: PropTypes.bool,
}

export default Message

