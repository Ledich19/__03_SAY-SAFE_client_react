const initialState = []

const peoplesReducer = (state = initialState, action) => {
  // console.log(action)

  switch (action.type) {
  case 'SET_PEOPLES':
    return action.peoples
  case 'NEW_MESSAGE':
    return state
  case 'TOGLE_FOLLOW':
  {
    console.log(state)
    const id = action.id
    const personToChange = state.find( p => p.id === action.id)
    const changedPerson = {
      ...personToChange,
      follow: !personToChange.follow
    }
    return state.map(person =>
      person.id !== id ? person : changedPerson
    )
  }
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

export const toggleFollow = (id) => {
  console.log('toge')
  return {
    type: 'TOGLE_FOLLOW',
    id,
  }
}

export default peoplesReducer