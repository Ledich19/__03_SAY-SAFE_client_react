const initialState = {
  type: 'all',
  unread: false,
}

const mailsFilterReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_TYPE_MAIL':
    return {
      ...state, type: action.typeMail
    }
  case 'CHANGE_UNREAD':{
    console.log('state.unread', state.unread)

    const unread = !state.unread
    return {
      ...state, unread: unread
    }}
  default:
    return state
  }

}

export const typeMailChange = typeMail => {
  return {
    type: 'SET_TYPE_MAIL',
    typeMail,
  }
}

export const unreadChange = () => {
  return {
    type: 'CHANGE_UNREAD',

  }
}


export default mailsFilterReducer