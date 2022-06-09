const initialState = []
const photoCheckReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'TOGGLE_CHEC_PHOTO': {
    const newState = state.includes(action.id)
      ? state.filter(photoId => photoId !== action.id)
      : state.concat(action.id)
    return newState
  }
  case 'CHEC_ALL_PHOTO':
  {
    return action.mailsId}
  case 'UNCHEC_ALL_PHOTO':
  {
    const newState = []
    return newState}
  default:
    return state
  }

}


export const toggleCheckPhoto = (id) => {
  return {
    type: 'TOGGLE_CHEC_PHOTO',
    id,
  }
}

export const checkAllPhoto = (mailsId) => {
  return {
    type: 'CHEC_ALL_PHOTO',
    mailsId,
  }
}
export const uncheckAllPhoto = (mailsId) => {
  return {
    type: 'UNCHEC_ALL_PHOTO',
    mailsId,
  }
}

export default photoCheckReducer