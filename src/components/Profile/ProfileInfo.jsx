import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserAge, changeUserCiti, changeUserCountry, changeUserDrinks, changeUserEducation, changeUserGender, changeUserMyFavoriteThems, changeUserName, setUserInfo } from '../../reducers/userInfoReducer'



const ProfileInfo = () => {
  const { name, age, country, city, education, drink, gender, thems } = useSelector(state => state.userInfo)
  const user = useSelector(state => state.user)
  const { id } = useSelector(state => state.user)
  const [change, setChenge] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('1')
    const { name, age, country, city, education, drink, gender, thems } = user
    const userInfo = {
      name, age, country, city, education, drink, gender, thems,
    }
    dispatch(setUserInfo(userInfo))
  }, [])

  const hendleSubmit = (event) => {
    event.preventDefault()
    console.log('e.target.name', name)
  }

  return (

    <form onSubmit={hendleSubmit} className='my-profile__info profile-info'>
      <div className='profile-info__text'>
        <ProfileInfoNameElement
          age={age}
          name={name}
          chenge={change}
          onChangeName={(e) => dispatch(changeUserName(e.target.value))}
          onChangeAge={(e) => dispatch(changeUserAge(e.target.value))}
        />
        <div className='profile-info__id'>
          Your profile ID:<span>{id}</span>
        </div>
        <div className='profile-info__title _icon-pencil2'>
          <button
            type={change ? 'button' : 'submit'}
            onClick={() => setChenge(!change)}>{change ? 'save change' : 'edit'}
          </button>
          ABOUT ME
        </div>

        <div className='profile-info__element'>
          Country of residence
          {change
            ? <input
              value={country}
              onChange={(e) => dispatch(changeUserCountry(e.target.value))}
              className='profile-info__input'
              type='text'></input>
            : <span>{country}</span>}
        </div>

        <div className='profile-info__element'>
          My city
          {change
            ? <input
              value={city}
              onChange={(e) => dispatch(changeUserCiti(e.target.value))}
              className='profile-info__input'
              type='text'></input>
            : <span>{city}</span>}
        </div>

        <div className='profile-info__element'>
          Education
          {change
            ? <select className='profile-info__element'
              onChange={(e) => dispatch(changeUserEducation(e.target.value))}
              value={education}>
              <option >1</option>
              <option >2</option>
              <option >3</option>
              <option >4</option>
            </select>
            : <span>{education}</span>}
        </div>
        <div className='profile-info__element'>
          Drink
          {change
            ? <select className='profile-info__element'
              onChange={(e) => dispatch(changeUserDrinks(e.target.value))}
              value={drink}>
              <option >yes</option>
              <option >no</option>
              <option >sometimes</option>
            </select>
            : <span>{drink}</span>}
        </div>
        <div className='profile-info__element'>
          My gender
          {change
            ? <select className='profile-info__element'
              onChange={(e) => dispatch(changeUserGender(e.target.value))}
              value={gender}>
              <option >woman</option>
              <option >other</option>
              <option >man</option>
            </select>
            : <span>{gender}</span>}
        </div>

      </div>

      <div className='profile-info__about info-about'>
        <div className='info-about__title _icon-pencil2'>I`d like communicate about</div>
        <div className='info-about__taxtarea'>
          <textarea
            onChange={(e) => dispatch(changeUserMyFavoriteThems(e.target.value))}
            value={thems}
            disabled={!change}
            name='message'
            placeholder='...'></textarea>
        </div>

      </div>


    </form>

  )
}


export default ProfileInfo

const ProfileInfoNameElement = ({ chenge, name, age, onChangeName, onChangeAge }) => {

  if (chenge) {
    return (
      <div className='profile-info__name'>
        <input
          value={name}
          onChange={(e) => onChangeName(e)}
          mane='namesa'
          autoFocus
          className='name-input__name'
          type='text'></input>
        <input
          value={age}
          onChange={(e) => onChangeAge(e)}
          className='name-input__age'
          type='number'></input>
      </div>
    )
  }
  return (
    <div className='profile-info__name'>
      <span>{name} ,</span>
      <span id='profile-info__age'>{age}</span>(age)
    </div>
  )
}




