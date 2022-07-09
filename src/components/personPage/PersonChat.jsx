import React from 'react'
import { useEffect } from 'react'

import ChatSpace from '../Dialogs/ChatSpace'
import ChatTextBlock from './ChatTextBlock'

const PersonChat = () => {
  // const userChats = useSelector(state => state.user.chats)
  // const personalChats = useSelector(state => state.currentDialogReducer.chats)
  const userChats = [1,2,3,5,6]
  const personalChats = [7,8,4,9,0]


  useEffect(() => {
    let chatId
    userChats.forEach(element => {
      const findObj = personalChats.find((id) => id === element)
      if (findObj) {
        chatId = findObj
      }
    })
    console.log('chatId',chatId)
  }, [])

  return (
    <div id="tab_01" className="workplace__tabs-block chat-space">
      <ChatSpace />
      <ChatTextBlock />
    </div>
  )

}

export default PersonChat