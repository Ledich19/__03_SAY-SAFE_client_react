const initialState = [

  {
    id: 5427625,
    ovnerId: 3567345567,
    text: '1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet',
    data: '12/04/12:50'
  },
  {
    id: 542285,
    ovnerId: 35673400384,
    text: '1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet',
    data: '12/04/12:50'
  },
  {
    id: 542235,
    ovnerId: 3567345567,
    text: '1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet',
    data: '12/04/12:50'
  },
  {
    id: 5463225,
    ovnerId: 35673400384,
    text: '1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet',
    data: '12/04/12:50'
  },
  {
    id: 5426925,
    ovnerId: 3567345567,
    text: '1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet',
    data: '12/04/12:50'
  },
  {
    id: 54442235,
    ovnerId: 35673400384,
    text: '1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet',
    data: '12/04/12:50'
  },
  {
    id: 5426625,
    ovnerId: 3567345567,
    text: '1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet',
    data: '12/04/12:50'
  }
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