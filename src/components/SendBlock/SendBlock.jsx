import React from 'react'
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import { AiOutlinePaperClip } from 'react-icons/ai'
import './SendBlock.scss'

const SendBlock = () => {
  return (
    <div className='send-block'>
      <button type='submit' className='send-block__send-button'>SEND</button>
      <div className='send-block__btn-block'>
        <button type='button'
          className='send-block__smile'>
          <BsFillEmojiSmileFill />
        </button>
        <button type='button'
          className='send-block__add-document'>
          <AiOutlinePaperClip />
        </button>
      </div>
    </div>
  )
}

export default SendBlock