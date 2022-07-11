import React from 'react'

import Emoji from './Emoji'
import './SendBlock.scss'
import Upload from './Upload'

const SendBlock = () => {
  return (
    <div className='send-block'>
      {/* <button type='submit' className='send-block__send-button'>SEND</button> */}
      <div className='send-block__btn-block'>
        <Emoji onEmojiSelect={console.log} />

        <Upload />
        {/* <button type='button'
          className='send-block__add-document'>
          <AiOutlinePaperClip />
        </button> */}
      </div>
    </div>
  )
}

export default SendBlock