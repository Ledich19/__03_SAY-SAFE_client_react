import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch } from 'react-router-dom'
import { setWisiblePerson } from '../../reducers/personReducer'
import Button from '../Button'
import PersonChat from './PersonChat'
import PersonFace from './PersonFace'
import PersonMail from './PersonMail'

const PersonPage = () => {
  const [tabVisible, setTabVisible] = useState('tab_01')
  const persons = useSelector(state => state.peoples)
  const dispatch = useDispatch()
  // useEffect(() => {
  //   peopleService
  //     .getAll()
  //     .then(persons => {
  //       setPersons(persons)
  //     })
  // }, [])
  const match = useMatch('/persons/:id')
  const person = match
    ? persons.find(p => p.id === match.params.id)
    : null
  console.log('persons', persons)
  console.log('person', person)
  useEffect(() => {
    dispatch(setWisiblePerson(person))
  }, [])



  const tab = () => {
    if (tabVisible === 'tab_01') {
      return (
        <PersonChat photo={person.photo}
        />)
    } else if (tabVisible === 'tab_02') {
      return <PersonMail />
    }
  }

  return (
    <div className='work-platform__workplace workplace'>
      <PersonFace person={person} />
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