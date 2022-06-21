
import React from 'react'
import { useSelector } from 'react-redux'

const ChatSpace = () => {

  const chat = useSelector(state => state.chat)
  const photo = useSelector(state => state.visibleUser.photo)

  const userId = useSelector(state => state.user.id)
  const userPhoto = useSelector(state => state.user.photo)

  console.log(chat)
  return (
    <div className='chats__chat-space chat-body'>
      {chat.map(i => {
        return (
          <div key={i.id} className={`chat-body__item item-massege ${(i.ovnerId === userId) ? '_my-massege' : ''}`}>
            <div className='item-massege__photo'>
              <img src={(i.ovnerId === userId) ? userPhoto : photo} alt='image description' />
            </div>
            <div className='item-massege__text'>{i.text}</div>
            <div className='item-massege__data'>{i.data}</div>
          </div>
        )
      })
      }

    </div>
  )
}

export default ChatSpace


