
import {  useSelector } from 'react-redux'

import MailFilter from './MailFilter'
import MailMenu from './MailMenu'
import MailList from './MailsList'
import MailsText from './MailText'

const Mails = () => {
  const mails = useSelector(({ mails, mailsFilter, user }) => {
    const newMails =  mailsFilter.unread
      ? mails.filter(m => !m.isReaded)
      : mails

    switch (mailsFilter.type) {
    case 'all':
      return newMails
    case 'inbox':
      return newMails.filter(mail =>
        mail.owner !== user.id
      )
    case 'outbox':
      return newMails.filter(mail =>
        mail.owner === user.id
      )
    default:
      return  newMails.filter(mail => mail.type === mailsFilter.type )
    }
  })
  let visibleMails = mails.map( m => m.id)
  return (
    <div className="worcplatform__mails mails">
      <MailMenu />
      <div className="mails__body mails-body">
        <MailFilter visibleMails={visibleMails}/>
        <MailList mails={mails} />
        <MailsText />
      </div>
    </div>
  )
}
export default Mails