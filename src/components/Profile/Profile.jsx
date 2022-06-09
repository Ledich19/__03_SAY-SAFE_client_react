import React from 'react'
import PhotosList from './PhotosList'
import ProfileInfo from './ProfileInfo'
import ProfilePhoto from './ProfilePhoto'


const Profile = () => {

  return (
    <div className="work-platform__my-profile my-profile">
      <ProfilePhoto />
      <ProfileInfo />
      <PhotosList />
    </div>
  )
}


export default Profile