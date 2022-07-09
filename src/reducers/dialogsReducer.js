

const initialState = {
  items:[],
  isLoading: null,
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_DIALOGS':{
    const newState = { ...state,items: action.dialogs , isLoading: false }
    return newState}
  case 'SET_MESSAGES':{
    const newItems = state.items.map((d) => d.id === action.dialog.id ? action.dialog : d)
    const newState = { ...state,items: newItems , isLoading: false }
    return newState}
  case 'SET_IS_LOADING':{
    const newState = { ...state, isLoading: action.payload }
    return newState}

  default:
    return state
  }

}

export const setDialogs = dialogs => {
  return {
    type: 'SET_DIALOGS',
    dialogs
  }
}

export const setMessages = (dialog) => {
  return {
    type: 'SET_MESSAGES',
    dialog,
  }
}

export const setIsLoading = (payload) => {
  return {
    type: 'SET_IS_LOADING',
    payload,
  }
}


export default dialogsReducer