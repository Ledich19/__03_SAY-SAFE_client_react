import React from 'react'
import ChatSpace from './ChatSpace'
import ChatTextBlock from './ChatTextBlock'

const PersonChat = ({ chat, photo, text , addMassage , setText }) => {

  return (
    <div id="tab_01" className="workplace__tabs-block chat-space">
      <ChatSpace photo={photo}/>
      <ChatTextBlock text={text} addMassage={addMassage} setText={setText} />
    </div>
  )

}

export default PersonChat