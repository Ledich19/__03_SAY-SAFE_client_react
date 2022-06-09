import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { typeMailChange } from '../../reducers/mailsFilterReducer'
import Button from '../Button'

const MailMenu = () => {
  const dispatch = useDispatch()
  const type = useSelector(state => state.mailsFilter.type)

  return (
    <nav className="mails__nav">
      <ul className="mails__list">
        <Button
          onClick={() => dispatch(typeMailChange('all'))}
          className={`mails__item ${(type === 'all') ? '_active' : ''}`}
          text="Mail Box" />
        <Button
          onClick={() => dispatch(typeMailChange('inbox'))}
          className={`mails__item ${(type === 'inbox') ? '_active' : ''}`}
          text="Inbox" />
        <Button
          onClick={() => dispatch(typeMailChange('outbox'))}
          className={`mails__item ${(type === 'outbox') ? '_active' : ''}`}
          text="Outbox" />
        <Button
          onClick={() => dispatch(typeMailChange('draft'))}
          className={`mails__item ${(type === 'draft') ? '_active' : ''}`}
          text="Drafts" />
      </ul>
    </nav>
  )
}
export default MailMenu