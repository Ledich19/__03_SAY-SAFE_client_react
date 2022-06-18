import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeUsername, changePassword } from '../../reducers/loginReducer'
import logo from '../../img/logo.svg'


const RegistrationForm = () => {
  const { password, username } = useSelector(state => state.login)
  const dispatch = useDispatch()


  const handleRegistration = async (event) => {
    event.preventDefault()
    console.log('handleRegistration')
  }

  return (
    <div className="registration">

      <div className="info-page__logo">
        <img src={logo} alt="image description" />
      </div>


      <form onSubmit={handleRegistration} className='registration__form'>
        <input
          value={username}
          onChange={(e) => dispatch(changeUsername(e.target.value))}
          name='login'
          type='text'
          className='registration__item'
          placeholder='login' />
        <input
          value={username}
          onChange={(e) => dispatch(changeUsername(e.target.value))}
          name='mail'
          type='text'
          className='registration__item'
          placeholder='email' />

        <input
          value={password}
          onChange={(e) => dispatch(changePassword(e.target.value))}
          name='password'
          type='text'
          className='registration__item'

          placeholder='password' />
        <input
          value={password}
          onChange={(e) => dispatch(changePassword(e.target.value))}
          name='password2'
          type='text'
          className='registration__item'

          placeholder='password2' />


        <button type='submit' className='registration__btn registration__item'>registration</button>

      </form>

    </div>

  )
}

export default RegistrationForm