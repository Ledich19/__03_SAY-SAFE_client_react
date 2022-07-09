const initialState = null

const currentDialogReducer = (state = initialState, action) => {
  // console.log(action)

  switch (action.type) {
  case 'SET_CURRENT_DIALOG':
    return action.dialog

  default:
    return state
  }

}

// const generateId = () =>
//   Number((Math.random() * 1000000).toFixed(0))

export const setCurrentDialog = (dialog) => {
  return {
    type: 'SET_CURRENT_DIALOG',
    dialog,
  }
}

// export const createMessage = (content) => {
//   return {
//     type: 'NEW_MESSAGE',
//     data: {
//       ovnerId: 3567345567,
//       text: content,
//       id: generateId(),
//       data: '12/04/12:50'
//     }
//   }
// }
export default currentDialogReducer