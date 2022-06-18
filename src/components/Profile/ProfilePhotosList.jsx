import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCheckPhoto } from '../../reducers/profileReducers/photoCheckReducer'

const ProfilePhotosList = () => {
  const { photos } = useSelector(state => state)
  const { checkedPhoto } = useSelector(state => state)
  const dispatch = useDispatch()

  return (

    <div className="profile-photos__wrapper">
      {photos.map(p => {
        return (
          <div key={p.id} className="profile-photos__photo-item">
            <img src={p.photoMin} alt="image description" />
            <input
              checked={checkedPhoto.includes(p.id)}
              onChange={() => dispatch(toggleCheckPhoto(p.id))}
              type='checkbox'
              className="profile-photos__photo-chacbox"
            ></input>
          </div>
        )
      })}
    </div>

  )
}
export default ProfilePhotosList