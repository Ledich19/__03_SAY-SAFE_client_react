const initialState = {
  username: '',
  password: '',
  user: null,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CHANGE_USER_USERNAME':
    return { ...state, username: action.username }
  case 'CHANGE_USER_PASSWORD':
    return { ...state, password: action.password }
  case 'USER_LOGIN':
    return { ...state, password: action.password }

  default:
    return state
  }
}

export const changeUsername = (username) => {
  return {
    type: 'CHANGE_USER_USERNAME',
    username,
  }
}
export const changePassword = (password) => {
  return {
    type: 'CHANGE_USER_PASSWORD',
    password,
  }
}

export const login = (password) => {

  return {
    type: 'USER_LOGIN',
    password,
  }
}


export default loginReducer