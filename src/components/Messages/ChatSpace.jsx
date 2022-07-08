
import React from 'react'
import { useSelector } from 'react-redux'
import './ChatSpace.scss'
import Message from './Message'
import noResult from '../../img/no-search-results.svg'

const ChatSpace = () => {

  const chat = useSelector(state => state.chat)
  const avatar = useSelector(state => state.visibleUser.photo)

  // const userId = useSelector(state => state.user.id)
  // const userPhoto = useSelector(state => state.user.photo)

  return (
    <div className='chats__chat-space chat-body'>

      <Message
        className='chat-body__item'
        key={'bn fhf hjv'}
        isMe={false}
        isReaded={false}
        isTyping={true}
        avatar={avatar}

        username='{i.username}'
        id='hiushntu'
      />

      {chat.length === 0 ? <img src={noResult} className=' chat-body__no-search' alt='no result' /> : null}
      {chat.map(i => {

        return (
          <Message
            className='chat-body__item'
            key={i.id}
            id={i.id}
            text={i.text}
            date='Sat Jul 02 2022 19:54:49 GMT+0300'
            isMe={true}
            isReaded={true}
            username={'g'}
            atachments={
              [
                {
                  fileName: 'image',
                  url: 'https://source.unsplash.com/random/300×300'
                },
                {
                  fileName: 'image',
                  url: 'https://source.unsplash.com/random/100×300'
                },
                {
                  fileName: 'image',
                  url: 'https://source.unsplash.com/random/300×200'
                }
              ]
            }
          />

        // <div key={i.id} className={`chat-body__item item-massege ${(i.ovnerId === userId) ? '_my-massege' : ''}`}>
        //   <div className='item-massege__photo'>
        //     <img src={(i.ovnerId === userId) ? userPhoto : photo} alt='image description' />
        //   </div>
        //   <div className='item-massege__text'>{i.text}</div>
        //   <div className='item-massege__data'>{i.data}</div>
        // </div>
        )
      })
      }




    </div>
  )
}

export default ChatSpace


