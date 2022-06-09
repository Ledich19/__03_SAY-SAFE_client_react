import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCheckMail } from '../../reducers/mailsDeleteREducer'

const MailItem = ({ mail }) => {
  const dispatch = useDispatch()
  const id = useSelector(state => state.user.id)
  const mailsChecked = useSelector(state => state.mailsDelete)

  const { ownerPhoto, ownerName, text, owner } = mail

  const unread = {
    fontWeight: 'bold',
    background: 'lightgrey',
  }

  return (

    <div
      style={mail.isReaded ? {} : unread}
      className="mails-body__ietm mails-item">

      <input
        checked={mailsChecked.includes(mail.id)}
        onChange={() => dispatch(toggleCheckMail(mail.id))}
        type="checkbox"
        className="mails-item__check-btn "></input>

      <div className="mails-item_photo">
        <img src={ownerPhoto} alt="image description" />
      </div>
      <div className={owner === id ? 'mails-item__indicate _out' : 'mails-item__indicate _in'}>
      </div>
      <div className="mails-item__name">{ownerName}</div>
      <div className="mails-item__text"><span>{text}</span></div>

    </div>
  )
}
export default MailItem