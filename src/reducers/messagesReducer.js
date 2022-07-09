const initialState = []

const messagesReducer = (state = initialState, action) => {
  // console.log(action)

  switch (action.type) {
  case 'SET_MESSAGES':
    return state.concat(action.data)

  case 'FETCH_MESSAGES':
    return state.concat(action.data)

  default:
    return state
  }

}




export const fetchMessages = (dialogId) => {
  return {
    type: 'FETCH_MESSAGES',
    dialogId,
  }
}
export default messagesReducer