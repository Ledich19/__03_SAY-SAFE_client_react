import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from './Avatar'
import './ChatInfo.scss'


const ChatInfo = () => {

  const person = useSelector(state => state.dialogs)
  const { personal, id } = person[0]
  const { username, isOnline, avatar } = personal

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

export default ChatInfo