import React from 'react'

import Avatar from './Avatar'
import './ChatInfo.scss'


const ChatInfo = ({ isOnline, avatar, username, id }) => {

  return (
    <div className='chat-info'>
      <Avatar
        username={username}
        avatar={avatar}
        isOnline={isOnline}
        id={id}
        className={'chat-info__avatar'}
      />

      {/* <div className='people-item__photo'>
          <img src={photo} alt='image description' />
        </div> */}

      <button className='chat-info__go-to-mail-button'>GO TO MAIL</button>
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