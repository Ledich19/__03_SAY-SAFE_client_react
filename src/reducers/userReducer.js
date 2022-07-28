const initialState = null

const userReducer = (state = initialState, action) => {

  switch (action.type) {
  case 'APDATE_USER_INFO':
    return state
  case 'SET_USER':
    return action.user
  case 'TOGLE_FOLLOW': {
    const id = action.id



    const memebers = state.members.includes(id) ?
      state.members.filter((m) => m !== id) :
      state.members.concat(id)

    return {
      ...state,
      members: memebers
    }

  }
  default:
    return state
  }

}

export const apdateUserInfo = ({
  name,
  lastName,
  age,
  country,
  city,
  education,
  gender,
  myFavoriteThem,
  drink
}) => {
  return {
    type: 'APDATE_USER_INFO',
    data: {
      name,
      lastName,
      age,
      country,
      city,
      education,
      gender,
      myFavoriteThem,
      drink,
    },
  }
}

export const toggleFollow = (id) => {
  return {
    type: 'TOGLE_FOLLOW',
    id,
  }
}

export const setUser = (user) => {

  return {
    type: 'SET_USER',
    user
  }
}

export default userReducer