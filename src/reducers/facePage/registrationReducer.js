const initialState = {
  username: '',
  email: '',
  password: '',
  repeatPassword: '',

}

const registrationReducer = (state = initialState, action) => {


  switch (action.type) {
  case 'CHANGE_REGISTRATION_USERNAME':
    return { ...state, username: action.username }
  case 'CHANGE_REGISTRATION_EMAIL':
    return { ...state, email: action.email }
  case 'CHANGE_REGISTRATION_PASSWORD':
    return { ...state, password: action.password }
  case 'CHANGE_REGISTRATION_REPEAT_PASSWORD':
    return { ...state, repeatPassword: action.repeatPassword }
  default:
    return state
  }

}



export const changeRegistrationUsername = (username) => {
  return {
    type: 'CHANGE_REGISTRATION_USERNAME',
    username,
  }
}
export const changeRegistrationEmail = (email) => {
  return {
    type: 'CHANGE_REGISTRATION_EMAIL',
    email,
  }
}
export const changeRegistrationRassword = (password) => {
  return {
    type: 'CHANGE_REGISTRATION_PASSWORD',
    password,
  }
}
export const changeRegistrationRepeadPassword = (repeatPassword) => {
  return {
    type: 'CHANGE_REGISTRATION_REPEAT_PASSWORD',
    repeatPassword,
  }
}



export default registrationReducer