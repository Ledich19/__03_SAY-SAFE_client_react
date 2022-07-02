import React from 'react'
import Button from './Button'
import SendBlock from './SendBlock/SendBlock'

import { Link } from 'react-router-dom'

const WorkPanel = ({ notifications }) => {

  return (
    <div className="work-platform__panel work-panel">
      <div className="work-panel__wrapper">
        <Button onClick={() => console.log('text')} className="work-panel__credit" text="GET CREDIT" />
        <div className="work-panel__list">
          <Button onClick={() => console.log('text')} className="work-panel__list-title" text="my work place" />
          {notifications.map(notification => {
            return (

              <Link key={notification.id} className="work-panel__item" to={`/${notification.name.toLowerCase()}`} >{notification.name}
                <span>
                  {notification.amount <= 99 ? notification.amount : '99+'}
                </span>
              </Link>
            )
          })}

        </div>
      </div>
      <SendBlock />
    </div>
  )
}

export default WorkPanel