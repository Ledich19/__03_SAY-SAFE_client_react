const initialState = {
  name: '',
  age: 0,
  country: '',
  city: '',
  education: '',
  gender: '',
  aboutMe: '',
  thems: '',
  drink: '',
}

const userInfoReducer = (state = initialState, action) => {


  switch (action.type) {
  case 'CHANGE_USER_NAME':
    return { ...state, name: action.name }
  case 'CHANGE_USER_AGE':
    return { ...state, age: action.age }
  case 'CHANGE_USER_COUNTRI':
    return { ...state, country: action.country }
  case 'CHANGE_USER_CITY':
    return { ...state, city: action.city }
  case 'CHANGE_USER_EDUCATION':
    return { ...state, education: action.education }
  case 'CHANGE_USER_GENDER':
    return { ...state, gender: action.gender }
  case 'CHANGE_USER_THEMS':
    return { ...state, thems: action.thems }
  case 'CHANGE_USER_DRINK':
    return { ...state, drink: action.drink }
  case 'SET_USER_INFO':
    return { ... action.userInfo }
  default:
    return state
  }

}

export const setUserInfo = (userInfo) => {
  return {
    type: 'SET_USER_INFO',
    userInfo,
  }
}
export const changeUserName = (name) => {
  return {
    type: 'CHANGE_USER_NAME',
    name,
  }
}
export const changeUserAge= (age) => {
  return {
    type: 'CHANGE_USER_AGE',
    age,
  }
}
export const changeUserCountry = (country) => {
  return {
    type: 'CHANGE_USER_COUNTRI',
    country,
  }
}
export const changeUserCiti= (city) => {
  return {
    type: 'CHANGE_USER_CITY',
    city,
  }
}
export const changeUserEducation = (education) => {
  return {
    type: 'CHANGE_USER_EDUCATION',
    education,
  }
}
export const changeUserGender = (gender) => {
  return {
    type: 'CHANGE_USER_GENDER',
    gender,
  }
}
export const changeUserMyFavoriteThems = (thems) => {
  return {
    type: 'CHANGE_USER_THEMS',
    thems,
  }
}
export const changeUserDrinks = ( drink ) => {
  return {
    type: 'CHANGE_USER_DRINK',
    drink,
  }
}



export default userInfoReducer