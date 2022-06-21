import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../../img/logo.svg'
import { setErrorMessage } from '../../reducers/errorReducer'
import { changeRegistrationEmail, changeRegistrationRassword, changeRegistrationRepeadPassword, changeRegistrationUsername } from '../../reducers/facePage/registrationReducer'
import registrationService from '../../services/registration'


const RegistrationForm = () => {
  const { username, email, password, repeatPassword, } = useSelector(state => state.registration)
  const { typeMassage, errorMessage } = useSelector(state => state.error)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegistration = async (event) => {
    event.preventDefault()

    if (password !== repeatPassword) {
      dispatch(setErrorMessage('should be the same should be the same password'))
      setTimeout(() => {
        dispatch(setErrorMessage(null))
        console.log(errorMessage)
      }, 3000)
      return
    }

    try {
      await registrationService.registration({
        username, password,
      })
      dispatch(changeRegistrationUsername(''))
      dispatch(changeRegistrationEmail(''))
      dispatch(changeRegistrationRassword(''))
      dispatch(changeRegistrationRepeadPassword(''))
      { navigate('/login') }
    } catch (exception) {
      dispatch(setErrorMessage('Wrong credentials'))
      setTimeout(() => {
        dispatch(setErrorMessage(null))
      }, 5000)
    }

    console.log('handleRegistration')
  }


  return (
    <div className="registration">

      <div className="info-page__logo">
        <img src={logo} alt="image description" />
      </div>


      <form onSubmit={handleRegistration} className='registration__form'>
        {errorMessage !== null && <div className={` registration__item ${typeMassage}`}>{errorMessage}</div>}
        <input
          value={username}
          onChange={(e) => dispatch(changeRegistrationUsername(e.target.value))}
          name='username'
          type='text'
          className='registration__item'
          placeholder='username' />
        <input
          value={email}
          onChange={(e) => dispatch(changeRegistrationEmail(e.target.value))}
          name='email'
          type='text'
          className='registration__item'
          placeholder='mail' />

        <input
          value={password}
          onChange={(e) => dispatch(changeRegistrationRassword(e.target.value))}
          name='password'
          type='password'
          className='registration__item'

          placeholder='password' />
        <input
          value={repeatPassword}
          onChange={(e) => dispatch(changeRegistrationRepeadPassword(e.target.value))}
          name='repeat-password'
          type='password'
          className='registration__item'

          placeholder='repeat password' />


        <button type='submit' className='registration__btn registration__item'>registration</button>

      </form >

    </div >

  )
}

export default RegistrationForm