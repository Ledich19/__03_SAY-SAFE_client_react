import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../reducers/userReducer'
import { useNavigate } from 'react-router-dom'



const LogoutBtn = ({ className }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogoun = async (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedNoteappUser')
    //window.localStorage.clear()
    dispatch(setUser(null))
    navigate('/')
  }


  return (
    <button
      type='button'
      onClick={handleLogoun}
      className={className}
    >Log out</button>
  )
}

export default LogoutBtn