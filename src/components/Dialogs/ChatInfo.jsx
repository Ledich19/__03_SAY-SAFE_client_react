import React from 'react'

import Avatar from './Avatar'
import './ChatInfo.scss'


const ChatInfo = ({ isOnline, avatar, username, id }) => {

  return (
    <div className='chat-info'>
      <Avatar
        username={username}
        avatar={avatar}
        id={id}
        className='chat-info__avatar'
      />
      <div className='chat-info__info'>
        <div className='chat-info__name'>{username}</div>
        <div className='chat-info__online'>
          <span className={`chat-info__indicate ${isOnline ? 'online' : ''}`}></span>
          <span className='chat-info__word'>
            {isOnline ? 'online' : 'ofline'}
          </span>
        </div>
      </div>
      <button className='chat-info__button'>...</button>
    </div>
  )
}

Avatar.defaultProps = {
  id: '',
  username: '',
  avatar: '',
  isOnline: false,
}

export default ChatInfo