import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeMail } from '../../reducers/mailsReducer'
import { unreadChange } from '../../reducers/mailsFilterReducer'

import Button from '../Button'
import { checkAllMail, uncheckAllMail } from '../../reducers/mailsDeleteREducer'

const MailFilter = ({ visibleMails }) => {
  const dispatch = useDispatch()
  const unread = useSelector(state => state.mailsFilter.unread)
  const mailsDelete = useSelector(state => state.mailsDelete)

  const handleDelete = () => {
    dispatch(removeMail(mailsDelete))
  }

  const handleCheckAll = () => {

    if (equalArrays()) {
      dispatch(uncheckAllMail(visibleMails))
    } else {
      dispatch(checkAllMail(visibleMails))
    }
  }

  function equalArrays() {

    if (visibleMails.length === 0 || mailsDelete.length === 0) return false
    if (visibleMails.length !== mailsDelete.length) return false // Мас­си­вы раз­ной дли­ны не рав­ны

    for (var i = 0; i < visibleMails.length; i++) // Цикл по всем эле­мен­там
      if (!mailsDelete.includes(visibleMails[i])) return false// Ес­ли хоть один эле­мент от­ли­ча­ет­ся, мас­си­вы не рав­ны

    return true // Ина­че они рав­ны
  }

  return (
    <div className="mails-body__header mails-body-header">
      <div className="mails-body-header__list">

        <input
          checked={equalArrays()}
          onChange={() => handleCheckAll()}
          type="checkbox"
          className="mails-body-header__check" />

        <Button
          onClick={() => dispatch(unreadChange())}
          className={`mails-body-header__item ${!unread ? '_active' : ''}`}
          text="All" />
        <Button
          onClick={() => dispatch(unreadChange())}
          className={` mails-body-header__item ${unread ? '_active' : ''}`}
          text="Unread" />
      </div>
      <Button
        onClick={handleDelete}
        className="mails-body-header__btn _icon-delete"
        text="Delet selected" />
    </div>
  )
}
export default MailFilter