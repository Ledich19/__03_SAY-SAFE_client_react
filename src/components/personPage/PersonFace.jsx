import React from 'react'
import { useSelector } from 'react-redux'
import noImage from '../../img/no-image.svg'

const PersonFace = () => {
  const{ avatar , isOnline , id , raiting , name } = useSelector(state => state.currentDialogReducer)

  return (
    <div className='workplace__info'>
      <div className='workplace__photo'>
        <img src={avatar ? avatar : noImage} alt='face' />
        {isOnline
          ? <div className='workplace__label _online'>online</div>
          : <div className='workplace__label _ofline'>ofline</div>
        }
      </div>
      <div>
        <div className='workplace__name'>{name ? name : ''}</div>
        <div className='workplace__profile-id'> Member&#39;s profile ID: {id ? id : ''}</div>
        <div className='workplace__rating'> Member rating<span>{raiting ? raiting : ''}</span></div>
      </div>
    </div>
  )
}

export default PersonFace



