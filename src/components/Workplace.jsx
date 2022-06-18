import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Favorite from './Favorite/Favorite'
import Mails from './Mails/Mails'
import Messages from './Message/Message'
import Payment from './Payment/Payment'
import Peoples from './peoples/Peoples'
import PersonPage from './personPage/PersonPage'
import Profile from './Profile/Profile'
import ProfileSetting from './ProfileSetting/ProfileSetting'

const Workplace = () => {

  return (
    <div className="work-platform__workplace">
      <Routes>
        <Route path="/persons/:id" element={<PersonPage/>} />
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