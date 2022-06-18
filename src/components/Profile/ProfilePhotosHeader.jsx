import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removePhoto } from '../../reducers/profileReducers/photoListReducer'


const ProfilePhotosHeader = () => {
  const { checkedPhoto } = useSelector(state => state)
  const dispatch = useDispatch()

  return (

    <div className="profile-photos__title">MY PHOTOS:
      <div>
        <button className="profile-photos__btn"
          onClick={() => dispatch(removePhoto(checkedPhoto))}
        >remove</button>
        <button className="profile-photos__add-photo-btn">
          <label htmlFor='photo_add'
          >add</label>
        </button>
      </div>
      <input
        style={{ display: 'none' }}
        multiple
        type='file'
        name='photo_add'
        id='photo_add'
        accept='.png, .jpg,'
        className="profile-photos__add"
        onClick={() => console.log()}
      ></input>
    </div>
  )
}
export default ProfilePhotosHeader