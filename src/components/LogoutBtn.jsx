import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../reducers/loginReducer'


const LogoutBtn = ({ className }) => {
  const dispatch = useDispatch()

  const handleLogoun = async (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedNoteappUser')
    //window.localStorage.clear()
    dispatch(setUser({}))
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