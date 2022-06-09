import React from 'react'
import ChatSpace from '../ChatSpace'
import ChatTextBlock from '../personPage/ChatTextBlock'
import MessagePersonInfo from './MessagePersonInfo'
import PersonsList from './PersonsList'

const Messages = () => {


  return (
    <div className='worcplatform__chats chats'>
      <PersonsList />
      <div className='chats__chat-space chat-space'>
        <MessagePersonInfo/>
        <ChatSpace />
        <ChatTextBlock />
      </div>
    </div>
  )
}

export default Messages