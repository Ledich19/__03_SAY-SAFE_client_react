import React, { useState } from 'react'
import SendBlock from '../SendBlock/SendBlock'
import './ChatTextBlock.scss'
// import { useDispatch } from 'react-redux'
import { FiSend } from 'react-icons/fi'
import messageService from '../../services/messages'
import { useSelector } from 'react-redux'

const ChatTextBlock = () => {
  const [text, setText] = useState('')
  const dialogId = useSelector(state => state.currentDialog)

  const addMassage = async (event) => {
    console.log('jhjgfhjg')
    event.preventDefault()
    const message = {
      dialogId,
      text: text,
      atachments: [],
      type: 'text'
    }
    console.log(message)
    await messageService.create(message)
    setText('')
  }

  return (
    <div className=''>
      <form onSubmit={addMassage} className=' chat-footer'>
        <div className='chat-footer__taxtera-block'>
          <textarea value={text}
            className='chat-footer__taxtarea'
            placeholder='Type your message here....'
            onChange={(e) => { setText(e.target.value) }}>
          </textarea>

          <button className='chat-footer__send'>
            <FiSend className='chat-footer__send-icon' />
          </button>
        </div>
        <SendBlock />
      </form>
    </div>
  )

}

export default ChatTextBlock