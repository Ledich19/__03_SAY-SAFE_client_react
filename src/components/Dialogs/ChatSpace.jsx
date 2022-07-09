
import React, { useEffect } from 'react'
import './ChatSpace.scss'
import Message from './Message'
import noResult from '../../img/no-search-results.svg'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Spinner from '../Spinner'
import { useRef } from 'react'


const ChatSpace = ({ messages, dialogId }) => {

  // const userId = useSelector(state => state.user.id)
  // const userPhoto = useSelector(state => state.user.photo)
  const isLoadid = useSelector(state => state.dialogs.isLoading)
  const scrollDialog = useRef(null)

  useEffect(() => {
    scrollDialog.current.scrollTop = scrollDialog.current.scrollHeight
  }, [messages])
  return (
    <div className='chats__chat-space chat-body'>
      <div ref={scrollDialog} className=' chat-body__wrapper'>

        {/* <Message
  className='chat-body__item'
  key={'bn fhf hjv'}
  isMe={false}
  isReaded={false}
  isTyping={true}
  avatar={avatar}

  username='{i.username}'
  id='hiushntu'
/> */}
        {isLoadid ? <Spinner className={'chat-body__spiner'} /> : null}
        {messages.length === 0 && !isLoadid ? <img src={noResult} className=' chat-body__no-search' alt='no result' /> : null}
        {messages.map(i => {

          return (
            <Message
              className='chat-body__item'
              key={i.id}
              id={dialogId}
              text={i.text}
              date='Sat Jul 02 2022 19:54:49 GMT+0300'
              isMe={i.author === '&' ? true : false}
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
    </div>
  )
}

ChatSpace.defaultProps = {
  messages: []
}

ChatSpace.propTypes = {
  messages: PropTypes.array,
}

export default ChatSpace


