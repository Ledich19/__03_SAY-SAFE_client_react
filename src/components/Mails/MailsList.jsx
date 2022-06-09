import React from 'react'
import MailItem from './MailItem'

const MailList = ({ mails }) => {

  return (
    <div  className="mails-body__mails">
      {mails.map(m => <MailItem key={m.id} mail={m} />)}
    </div>
  )
}
export default MailList