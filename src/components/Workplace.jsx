import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link, useMatch
} from "react-router-dom"
import peopleService from '../services/peoples'
import Button from './Button'
import Favorite from './Favorite/Favorite'
import Mails from './Mails/Mails'
import Messages from './Message/Message'
import Payment from './Payment/Payment'
import Peoples from './peoples/Peoples'
import PersonPage from './personPage/PersonPage'
import Profile from './Profile/Profile'
import ProfileSetting from './ProfileSetting/ProfileSetting'
import SendBlock from './SendBlock'

const Workplace = (props) => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    peopleService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const match = useMatch('/persons/:id')
  const person = match
    ? persons.find(p => p.id === Number(match.params.id))
    : null

  return (
    <div className="work-platform__workplace">
      <Routes>
        <Route path="/persons/:id" element={<PersonPage store={props.store} person={person} />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/pfofile" element={<Profile />} />
        <Route path="/setting" element={<ProfileSetting />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/mail" element={<Mails />} />
        <Route path="/credits" element={<Payment />} />
        <Route path="/" element={<Peoples />} />
      </Routes>


    </div>
  )
}
export default Workplace