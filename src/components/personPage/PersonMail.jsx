import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createMail } from '../../reducers/personReducer'
import SendBlock from '../SendBlock/SendBlock'



const PersonMail = () => {
  const [mailText, setMailText] = useState('')
  const dispatch = useDispatch()

  const setMail = (event) => {
    event.preventDefault()
    const newText = mailText
    setMailText('')
    dispatch(createMail(newText))
  }

  return (
    <form onSubmit={setMail} id='tab_02' className='workplace__tabs-block blok-mail'>
      <div className='blok-mail__wrapper'>

        <textarea
          value={mailText}
          onChange={(e => setMailText(e.target.value))}
          name='message-chat'
          className='blok-mail__textarea'
          placeholder='Type your message here....'>
        </textarea>

        <SendBlock />
      </div>
    </form>
  )

}


export default PersonMail