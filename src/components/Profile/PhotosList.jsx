import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCheckPhoto } from '../../reducers/profileReducers/photoCheckReducer'
import {  removePhoto } from '../../reducers/profileReducers/photoListReducer'


const PhotosList = () => {
  const { photos } = useSelector(state => state)
  const { checkedPhoto } = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className="my-profile__photos profile-photos">
      <div className="profile-photos__title">MY PHOTOS:
        <div>
          <button className="profile-photos__btn"
            onClick={() => console.log()}
          >add</button>
          <button className="profile-photos__btn"
            onClick={() => dispatch(removePhoto(checkedPhoto))}
          >remove</button>
        </div>
      </div>

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
    </div>
  )
}
export default PhotosList