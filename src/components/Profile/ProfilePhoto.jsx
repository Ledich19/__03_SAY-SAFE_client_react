import React from 'react'
import { useSelector } from 'react-redux'

const ProfilePhoto = () => {
  const { photo } = useSelector(state => state.user)

  return (
    <div className="my-profile__photo profile-photo">
      <img src={photo} alt="image description" />
    </div>
  )
}


export default ProfilePhoto