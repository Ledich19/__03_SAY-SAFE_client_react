import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setNotifyMessage } from '../../reducers/notifyReducer'
import { changeUsername, changePassword } from '../../reducers/loginReducer'
import loginService from '../../services/login'
import logo from '../../img/logo.svg'
import { setUser } from '../../reducers/userReducer'
import peoplesService from '../../services/personal'
import userService from '../../services/user'
import './LoginForm.scss'

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
      peoplesService.setToken(user.token)
      userService.setToken(user.token)

      dispatch(setNotifyMessage({
        type: 'success',
        title: 'authorization successful',
        text: '',
      }))
      setTimeout(() => {
        dispatch(setNotifyMessage(null))
      }, 5000)


      const userData = await userService.getMe()
      console.log('userData', userData)
      dispatch(setUser(userData))


      { navigate('/personal') }
    } catch (exception) {
      dispatch(setNotifyMessage({
        type: 'error',
        title: exception.request.responseText,
        text: exception.message,
      }))
      setTimeout(() => {
        dispatch(setNotifyMessage(null))
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
          placeholder='login'
        />

        <div className='login-form__password-block login-form__item'>
          <input
            value={password}
            onChange={(e) => dispatch(changePassword(e.target.value))}
            name='password'
            type='password'
            autoComplete='off'
            className='login-form__password'
            placeholder='password' />
          <button type='button' className='login-form__forgot-button'>forgot<br /> password</button>
        </div>

        <button type='submit' className='login-form__submit'>Login</button>
        <div className='login-form__registration'>
          <div className='login-form__text'>YOU STILL ARENT WITH US?</div>
          <Link  to='/registration' >
            <button className='login-form__to-registration' type='button' >Register</button>
          </Link>
        </div>

      </form>


    </div>

  )
}

export default LoginForm