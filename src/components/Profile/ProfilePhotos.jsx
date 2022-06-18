import React from 'react'
import ProfilePhotosHeader from './ProfilePhotosHeader'
import ProfilePhotosList from './ProfilePhotosList'


const ProfilePhotos = () => {
  return (
    <div className="my-profile__photos profile-photos">
      <ProfilePhotosHeader/>
      <ProfilePhotosList />
    </div>
  )
}
export default ProfilePhotos