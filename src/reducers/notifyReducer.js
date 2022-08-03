const initialState = null

const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_NOTIFY':
    return action.notifyMessage
  default:
    return state
  }
}

export const  setNotifyMessage  = (notifyMessage) => {
  return {
    type: 'SET_NOTIFY',
    notifyMessage,
  }
}

export default notifyReducer