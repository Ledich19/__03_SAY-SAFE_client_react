import React from 'react'
import Button from '../Button'
import nonAvatar from '../../img/userPhoto.png'
import { useState } from 'react'
import {
  Link
} from 'react-router-dom'
import LogoutBtn from '../LogoutBtn'
import { useSelector } from 'react-redux'

const User = () => {
  const { avatar } = useSelector(state => state.user)
  const userPhoto = avatar ? avatar : nonAvatar

  const [userMenuShow, setUserMenuShow] = useState(false)
  const handleShowMenu = () => {
    userMenuShow ? setUserMenuShow(false) : setUserMenuShow(true)
  }

  return (
    <div className='work-platform__user '>
      <div className='work-platform__user-photo'>
        <img src={userPhoto} alt='image description' />
      </div>
      <Button onClick={handleShowMenu} className='work-platform__user-button' text='' />
      <div className={`work-platform__user-menu ${userMenuShow ? '_active' : ''}`}>
        <ul className='work-platform__user-list'>
          <Link className='work-platform__user-item' to='/pfofile' >My pfofile</Link>
          <Link className='work-platform__user-item' to='/setting' >Profile setting</Link>
          <Link className='work-platform__user-item' to='/payment' >My payment</Link>
          <LogoutBtn
            className='work-platform__user-item'
          />
        </ul>
      </div>
    </div>
  )
}

export default User