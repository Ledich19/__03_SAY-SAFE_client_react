const initialState = {
  typeMassage: 'errorMessage',
  errorMessage: null,
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_ERROR_MESSAGE':
    return { ...state, errorMessage: action.errorMessage }
  default:
    return state
  }
}

export const  setErrorMessage = (errorMessage) => {
  return {
    type: 'SET_ERROR_MESSAGE',
    errorMessage,
  }
}



export default errorReducer