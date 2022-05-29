import React, { useState, useEffect } from 'react'
import {} from 'react-router-dom'
import companionService from '../../services/companion'
import Button from '../Button'
import PersonChat from './PersonChat'
import PersonMail from './PersonMail'
import { createStore } from 'redux'
import { useSelector, useDispatch } from 'react-redux'

const PersonPage = (props) => {
  const [tabVisible, setTabVisible] = useState('tab_01')
  // const [chat, setChat] = useState([])
  const [text, setText] = useState('')

  



  // const addMassage = (event) => {
  //   event.preventDefault()
  //   const newMassage = {
  //     id: 54277625,
  //     ovnerId: 3567345567,
  //     text: text,
  //     data: '12/04/12:50',
  //   }
  //   console.log(newMassage)

  //   companionService
  //     .create(newMassage)
  //     .then(response => {
  //       console.log(response)
  //     })
  //   setText('')
  // }

  // useEffect(() => {
  //   companionService
  //     .getAll()
  //     .then(response => {
  //       setChat(response)
  //     })
  // }, [])
  const person = props.person

  const tab = () => {
    if (tabVisible === 'tab_01') {
      return (<PersonChat  photo={person.photo} text={text}
        setText={setText} />)
    } else if (tabVisible === 'tab_02') {
      return (<PersonMail />)
    }
  }
  return (
    <div className='work-platform__workplace workplace'>
      <div className='workplace__info'>
        <div className='workplace__photo'>
          <img src={person.photo} alt='face' />
          {person.isOnline
            ? <div className='workplace__label _online'>online</div>
            : <div className='workplace__label _ofline'>ofline</div>
          }
        </div>
        <div>
          <div className='workplace__name'>{person.name}</div>
          <div className='workplace__profile-id'> Member&#39;s profile ID: {person.id}</div>
          <div className='workplace__rating'> Member rating<span>{person.raiting}</span></div>
        </div>
      </div>
      <div className='workplace__work-space'>
        <nav className='workplace__tabs-items'>
          <Button
            onClick={() => setTabVisible('tab_01')}
            className={`workplace__tab-item _icon-bubble ${(tabVisible === 'tab_01') ? '_active' : ''}`}
            text="Chat" />
          <Button
            onClick={() => setTabVisible('tab_02')}
            className={`workplace__tab-item _icon-mail ${(tabVisible === 'tab_02') ? '_active' : ''}`}
            text="CMail" />
        </nav>
        <div className='workplace__tabs-body'>
          {tab()}
        </div>
      </div>

    </div>
  )
}

export default PersonPage