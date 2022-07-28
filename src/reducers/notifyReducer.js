const initialState = null

const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_MESSAGE':
    return action.notifyMessage
  default:
    return state
  }
}

export const  setNotifyMessage  = (notifyMessage) => {
  return {
    type: 'SET_MESSAGE',
    notifyMessage,
  }
}



export default notifyReducer