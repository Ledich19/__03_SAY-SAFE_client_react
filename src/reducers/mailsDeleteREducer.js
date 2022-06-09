const initialState = []
const mailsDeleteREducer = (state = initialState, action) => {
  switch (action.type) {

  case 'TOGGLE_CHEC_MAIL': {
    const newState = state.includes(action.id)
      ? state.filter(mailId => mailId !== action.id)
      : state.concat(action.id)
    return newState
  }
  case 'CHEC_ALL_MAIL':
  {
    return action.mailsId}
  case 'UNCHEC_ALL_MAIL':
  {
    const newState = []
    return newState}
  default:
    return state
  }

}


export const toggleCheckMail = (id) => {
  return {
    type: 'TOGGLE_CHEC_MAIL',
    id,
  }
}

export const checkAllMail = (mailsId) => {
  return {
    type: 'CHEC_ALL_MAIL',
    mailsId,
  }
}
export const uncheckAllMail = (mailsId) => {
  return {
    type: 'UNCHEC_ALL_MAIL',
    mailsId,
  }
}

export default mailsDeleteREducer