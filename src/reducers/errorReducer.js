const initialState = {
  errorMessage: '',
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_ERROR_MESSAGE':
    return { errorMessage: action.errorMessage }
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