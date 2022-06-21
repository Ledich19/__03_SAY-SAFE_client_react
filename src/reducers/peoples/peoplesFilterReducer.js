const initialState = {
  gender: 'all',
  ratingFrom: '0',
  ratingTo: '100',
  page: 1,
}

const peoplesFilterReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_FILTER':
    return { ...state, gender: action.gender }
  case 'SET_RATING_FROM':
    return { ...state, ratingFrom: action.ratingFrom }
  case 'SET_RATING_TO':
    return { ...state, ratingTo: action.ratingTo }
  case 'SET_ACTIVE_PAGE':
    return { ...state, page: action.page }
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
    type: 'SET_RATING_FROM',
    ratingFrom,
  }
}

export const ratingToChange = ratingTo => {
  return {
    type: 'SET_RATING_TO',
    ratingTo,
  }
}

export const activePageChenge = page => {
  return {
    type: 'SET_ACTIVE_PAGE',
    page,
  }
}

export default peoplesFilterReducer