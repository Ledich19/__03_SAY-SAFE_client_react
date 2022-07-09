import React, { useState } from 'react'
import SendBlock from '../SendBlock/SendBlock'

import { useDispatch } from 'react-redux'


const ChatTextBlock = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addMassage = (event) => {


    event.preventDefault()
    const newText = text
    setText('')
    dispatch((newText))
  }

  return (

    <div className='chat-space__footer'>
      <form onSubmit={addMassage} className='chat-body__footer chat-footer'>
        <div className='chat-footer__taxtera-block'>
          <textarea value={text}
            className='chat-footer__taxtarea'
            placeholder='Type your message here....'
            onChange={(e) => { setText(e.target.value) }}>
          </textarea>
        </div>
        <SendBlock />
      </form>
    </div>
  )

}

export default ChatTextBlock