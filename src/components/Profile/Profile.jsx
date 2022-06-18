import React from 'react'
import ProfilePhotos from './ProfilePhotos'
import ProfileInfo from './ProfileInfo'
import ProfilePhoto from './ProfilePhoto'


const Profile = () => {

  return (
    <div className="work-platform__my-profile my-profile">
      <ProfilePhoto />
      <ProfileInfo />
      <ProfilePhotos />
    </div>
  )
}


export default Profile