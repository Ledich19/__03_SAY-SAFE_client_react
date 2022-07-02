import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMail } from '../../reducers/mailsReducer'
import SendBlock from '../SendBlock/SendBlock'

const MailsText = () => {
  const[text , setText ] = useState('')
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(sendMail(text,user))
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="mails-body__taxtarea">
      <textarea value={text} name="message" onChange={(e) => setText(e.target.value)} placeholder="Type your message here...."></textarea>
      <SendBlock />
    </form>
  )
}
export default MailsText