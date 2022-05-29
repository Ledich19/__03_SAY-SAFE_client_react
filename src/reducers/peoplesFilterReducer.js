const initialState = {
  gender: 'all',
  ratingFrom: 0,
  ratingTo: 100,
}

const counterReducer = (state = initialState, action) => {
  // console.log(action)

  switch (action.type) {
  case 'SET_GENDER':
    console.log(state)
    return { ...state, gender: action.gender }
  case 'SET_RATING_FROM':
    console.log(state)
    return { ...state, ratingFrom: action.ratingFrom }
  case 'SET_RATING_TO':
    console.log(state)
    return { ...state, ratingTo: action.ratingTo }
  default:
    return state
  }

}

export const genderChange = gender => {
  return {
    type: 'SET_FILTER',
    gender,
  }
}

export const ratingFromChange = ratingFrom => {
  return {
    type: 'SET_FILTER',
    ratingFrom,
  }
}

export const ratingToChange = ratingTo => {
  return {
    type: 'SET_FILTER',
    ratingTo,
  }
}

export default counterReducer