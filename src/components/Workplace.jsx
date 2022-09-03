import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Favorite from './Favorite/Favorite'
import Mails from './Mails/Mails'
import Dialogs from './Dialogs/Dialogs'
import Payment from './Payment/Payment'
import Peoples from './Personals/Peoples'
import PersonPage from './personPage/PersonPage'
import Profile from './Profile/Profile'
import ProfileSetting from './ProfileSetting/ProfileSetting'
import ErrorMessage from './NotifyComponent'

const Workplace = () => {

  return (
    <div className="work-platform__workplace">
      <ErrorMessage/>
      <Routes>
        <Route path="/personal/:id" element={<PersonPage/>} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/pfofile" element={<Profile />} />
        <Route path="/setting" element={<ProfileSetting />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dialogs" element={<Dialogs />} />
        <Route path="/mail" element={<Mails />} />
        <Route path="/credits" element={<Payment />} />
        <Route path="/personal" element={<Peoples />} />
      </Routes>
    </div>
  )
}
export default Workplace