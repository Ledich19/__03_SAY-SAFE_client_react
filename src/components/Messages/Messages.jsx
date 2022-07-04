import React from 'react'
import ChatSpace from '../ChatSpace'
import ChatTextBlock from '../personPage/ChatTextBlock'
import MessagePersonInfo from './MessagePersonInfo'
import DialogsList from './DialogsList'

const Messages = () => {
  // const match = useMatch('/messages/:id')
  // const person = match
  //   ? persons.find(p => p.id === match.params.id)
  //   : null

  return (
    <div className='worcplatform__chats chats'>
      <DialogsList />
      <div className='chats__chat-space chat-space'>
        <MessagePersonInfo/>
        <ChatSpace />
        <ChatTextBlock />
      </div>
    </div>
  )
}

export default Messages