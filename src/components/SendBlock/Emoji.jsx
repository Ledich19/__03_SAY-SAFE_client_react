import React, { useState } from 'react'
import Picker from 'emoji-picker-react'
import './Emoji.scss'
import { BsFillEmojiSmileFill } from 'react-icons/bs'

const Emoji = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null)
  const [emojiVisiblePicker, setEmojiVisiblePicker] = useState(false)

  const showEmojiWhenVisible = { display: emojiVisiblePicker ? '' : 'none' }

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject)
  }
  const toggleEmojiPicker = () => {
    setEmojiVisiblePicker(!emojiVisiblePicker)
  }

  return (
    <div className='emoji'>
      <button
        type='button'
        className={`emoji__smile ${emojiVisiblePicker ? '_active' : ''}`}
        onClick={toggleEmojiPicker}
      >
        <BsFillEmojiSmileFill className='emoji__smile-icon' />
      </button>

      <div style={showEmojiWhenVisible} className='emoji__block'>
        {chosenEmoji ? (
          <span>You chose: {chosenEmoji.emoji}</span>
        ) : (
          <span>No emoji Chosen</span>
        )}
        <Picker className='emoji__picker' onEmojiClick={onEmojiClick} />
      </div>
    </div>
  )

}
// const con =document.querySelector('#picker')
// const root = createRoot(con)
// root.render(<Emoji onEmojiSelect={console.log} />)

// <div ref={ref} className='emoji'/>

export default Emoji