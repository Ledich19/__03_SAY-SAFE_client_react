const initialState = []

const peoplesReducer = (state = initialState, action) => {
  // console.log(action)

  switch (action.type) {
  case 'SET_PEOPLES':
    return action.peoples
  case 'NEW_MESSAGE':
    return state

  default:
    return state
  }

}

export const setPeoples = (peoples) => {
  return {
    type: 'SET_PEOPLES',
    peoples,
  }
}

export const addMessage = (text) => {
  return {
    type: 'NEW_MESSAGE',
    text,
  }
}



export default peoplesReducer