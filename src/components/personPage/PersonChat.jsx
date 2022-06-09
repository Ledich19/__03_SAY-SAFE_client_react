import React from 'react'
import ChatSpace from '../ChatSpace'
import ChatTextBlock from './ChatTextBlock'

const PersonChat = () => {

  return (
    <div id="tab_01" className="workplace__tabs-block chat-space">
      <ChatSpace />
      <ChatTextBlock />
    </div>
  )

}

export default PersonChat