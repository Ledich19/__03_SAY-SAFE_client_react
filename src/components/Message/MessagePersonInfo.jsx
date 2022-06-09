import React from 'react'
import { useSelector } from 'react-redux'

const MessagePersonInfo = () => {

  const person = useSelector(state => state.visibleUser)
  const { Lastname, patronymic, name , photo , rating } = person

  return (
    <div className='chat-space__header header-chat'>
      <div className='header-chat__item people-item'>
        <div className='people-item__photo'>
          <img src={photo} alt='image description' />
        </div>

        
          <div className='people-item__name'>{name}{Lastname}{patronymic}</div>
          <div className='people-item__rating'>rating
            <span>{rating}</span>
          </div>
        

        <div className='chat-space__go-to-mail-button _icon-mail '>GO TO MAIL</div>
      </div>
    </div>
  )
}

export default MessagePersonInfo