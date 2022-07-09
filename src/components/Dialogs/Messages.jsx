import React from 'react'
import ChatSpace from './ChatSpace'
import ChatTextBlock from '../personPage/ChatTextBlock'
import ChatInfo from './ChatInfo'
import DialogsList from './DialogsList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import dialogsService from '../../services/dialogs'
import { setDialogs, setIsLoading, setMessages } from '../../reducers/dialogsReducer'
import { setErrorMessage } from '../../reducers/errorReducer'


const Messages = () => {
  // const match = useMatch('/messages/:id')
  // const person = match
  //   ? persons.find(p => p.id === match.params.id)
  //   : null
  const dispatch = useDispatch()
  const currentDialog = useSelector(state => state.currentDialog)
  const dialogByID = useSelector(state => state.dialogs.items.find((d) => d.id === currentDialog))

  useEffect(() => {
    async function getDialogs() {
      try {
        const dialogs = await dialogsService.getAll()
        dispatch(setDialogs(dialogs))
      }
      catch (exception) {
        dispatch(setErrorMessage('Wrong credentials'))
        setTimeout(() => {
          dispatch(setErrorMessage(null))
        }, 5000)
      }
    }
    getDialogs()
  }, [])

  useEffect(() => {
    async function getMessages() {
      try {
        dispatch(setIsLoading(true))
        const dialogs = await dialogsService.getAllMessagesByID(currentDialog)
        dispatch(setMessages(dialogs))
        dispatch(setIsLoading(false))
      }
      catch (exception) {
        dispatch(setIsLoading(false))
        dispatch(setErrorMessage('Wrong credentials'))
        setTimeout(() => {
          dispatch(setErrorMessage(null))
        }, 5000)
      }
    }
    getMessages()
  }, [currentDialog])

  // useEffect(() => {
  //   async function getMessages() {
  //     console.log('getDialoghgy')
  //     try {
  //       const dialog = await dialogsService.getAllMessagesByID ()
  //       dispatch(setCurrentDialog(dialog))
  //     }
  //     catch (exception) {
  //       dispatch(setErrorMessage('Wrong credentials'))
  //       setTimeout(() => {
  //         dispatch(setErrorMessage(null))
  //       }, 5000)
  //     }
  //   }
  //   getMessages()
  // }, [currentDialog])

  return (
    <div className='worcplatform__chats chats'>
      <DialogsList />
      <div className='chats__chat-space chat-space'>
        <ChatInfo
          isOnline ={ dialogByID ? dialogByID.personal.isOnline : false }
          avatar={ dialogByID ? dialogByID.personal.avatar : '' }
          username={ dialogByID ? dialogByID.personal.username : '' }
          id={ dialogByID ? dialogByID.id : '' }
        />
        <ChatSpace
          messages={dialogByID ? dialogByID.messages : [] }
          dialogId={ dialogByID ? dialogByID.id : '' }
          isLoadid={true}
        />
        <ChatTextBlock
        />
      </div>
    </div>
  )
}

export default Messages