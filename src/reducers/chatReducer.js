const initialState = [

]

const counterReducer = (state = initialState, action) => {
  // console.log(action)

  switch (action.type) {
  case 'NEW_MESSAGE':
    console.log(state)
    console.log(action.data)
    return state.concat(action.data)
  default:
    return state
  }

}
const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

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

export default counterReducer