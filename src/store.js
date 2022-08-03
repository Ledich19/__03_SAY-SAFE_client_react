import peoplesFilterReducer from './reducers/peoples/peoplesFilterReducer'
import PeoplesReducer from './reducers/peoples/peoplesReducer'

import dialogsReducer from './reducers/dialogsReducer'
import currentDialogReducer from './reducers/currentDialogReducer'
import messageReducer from './reducers/messagesReducer'

import userReducer from './reducers/userReducer'
import mailsReducer from './reducers/mailsReducer'
import mailsFilterReducer from './reducers/mailsFilterReducer'
import mailsDeleteREducer from './reducers/mailsDeleteREducer'
import mailsVisibleReducer from './reducers/mailsVisibleReducer'
import userInfoReducer from './reducers/userInfoReducer'
import photoListReducer from './reducers/profileReducers/photoListReducer'
import photoCheckReducer from './reducers/profileReducers/photoCheckReducer'
import loginReducer from './reducers/loginReducer'
import registrationReducer from './reducers/facePage/registrationReducer'
import notifyReducer from './reducers/notifyReducer'


import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    registration: registrationReducer,

    notify: notifyReducer, // уведомления

    dialogs: dialogsReducer,
    currentDialog: currentDialogReducer,
    messages: messageReducer,

    userInfo: userInfoReducer,
    photos: photoListReducer,
    checkedPhoto: photoCheckReducer,

    peoples: PeoplesReducer,
    filter: peoplesFilterReducer,

    mails: mailsReducer,
    mailsFilter: mailsFilterReducer,
    mailsDelete: mailsDeleteREducer,
    mailsVicible: mailsVisibleReducer,
  }
})
