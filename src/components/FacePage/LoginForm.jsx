import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setErrorMessage } from '../../reducers/errorReducer'
import { changeUsername, changePassword, setUser } from '../../reducers/loginReducer'
import loginService from '../../services/login'
import logo from '../../img/logo.svg'


const LoginForm = () => {
  const { password, username } = useSelector(state => state.login)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
      dispatch(changeUsername(''))
      dispatch(changePassword(''))
      dispatch(setUser(user))
      { navigate('/') }

    } catch (exception) {
      dispatch(setErrorMessage('Wrong credentials'))
      setTimeout(() => {
        dispatch(setErrorMessage(null))
      }, 5000)
    }
  }

  return (
    <div className="info-page">

      <div className="info-page__logo">
        <img src={logo} alt="image description" />
      </div>







      <form onSubmit={handleLogin} className='login-form'>
        <input
          value={username}
          onChange={(e) => dispatch(changeUsername(e.target.value))}
          name='login'
          type='text'
          className='login-form__login  login-form__item'
          placeholder='login' />

        <div className='login-form__password-block login-form__item'>
          <input
            value={password}
            onChange={(e) => dispatch(changePassword(e.target.value))}
            name='password'
            type='text'
            className='login-form__password'
            placeholder='password' />
          <button type='button' className='login-form__forgot-button'>forgot<br /> password</button>
        </div>

        <button type='submit' className='login-form__submit login-form__item'>Login</button>
        <div className='login-form__registration'>
          <div className='login-form__text'>YOU STILL ARENT WITH US?</div>
          <Link  to='/registration' >
            <button className='login-form__to-registration' type='button' >CREATE</button>
          </Link>

        </div>
      </form>


    </div>

  )
}

export default LoginForm