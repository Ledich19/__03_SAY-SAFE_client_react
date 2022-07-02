const initialState = {
  name: '',
  lastname: '',
  patronymic: '',
  avatar: '',
  raiting: 0,
  id: 0,
  gender: '',
  follow: false,
  isOnline: false,
  chat: []
}

const personReducer = (state = initialState, action) => {
  // console.log(action)

  switch (action.type) {
  case 'SET_WISIBLE_PERSON':
    return action.person
  case 'SEND_MAIL':
    console.log('SEND_MAIL', action.mail)
    return state
  case 'NEW_MESSAGE': {
    console.log(state)
    console.log(action.data)
    const chat = state.chat
    const newChat = chat.concat(action.data)
    return {
      ...state, chat: newChat
    }
  }
  default:
    return state
  }

}

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

export const setWisiblePerson = (person, ) => {
  return {
    type: 'SET_WISIBLE_PERSON',
    person,
  }
}
export const createMail = (mail) => {
  return {
    type: 'SEND_MAIL',
    mail,
  }
}

export const createMessage = (content) => {
  return {
    type: 'NEW_MESSAGE',
    data: {
      ovnerId: 3567345567,
      text: content,
      id: generateId(),
      data: '12/04/12:50'
    }
  }
}
export default personReducer