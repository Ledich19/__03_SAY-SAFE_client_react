import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from './Avatar'
import './MessagePersonInfo.scss'


const MessagePersonInfo = () => {

  const person = useSelector(state => state.dialogs)
  const { personal, id } = person[0]
  const { username, isOnline, avatar } = personal

  return (
    <div className='chat-space__header header-chat'>
      <div className='header-chat__item'>
        <Avatar
          username={username}
          avatar={avatar}
          isOnline={isOnline}
          id={id}
          className={'header-chat__avatar'}
        />

        {/* <div className='people-item__photo'>
          <img src={photo} alt='image description' />
        </div> */}

        <div className='chat-space__go-to-mail-button _icon-mail '>GO TO MAIL</div>
      </div>
    </div>
  )
}

export default MessagePersonInfo