import React from 'react'


const PersonFace = ({ person }) => {
  const{ avatar , isOnline , id , raiting , name } = person

  return (
    <div className='workplace__info'>
      <div className='workplace__photo'>
        <img src={avatar} alt='face' />
        {isOnline
          ? <div className='workplace__label _online'>online</div>
          : <div className='workplace__label _ofline'>ofline</div>
        }
      </div>
      <div>
        <div className='workplace__name'>{name}</div>
        <div className='workplace__profile-id'> Member&#39;s profile ID: {id}</div>
        <div className='workplace__rating'> Member rating<span>{raiting}</span></div>
      </div>
    </div>
  )
}

export default PersonFace



