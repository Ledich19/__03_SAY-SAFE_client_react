import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore , combineReducers } from 'redux'

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

const reducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  registration: registrationReducer,

  notify: notifyReducer,

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
})


const store = createStore(reducer)
console.log(store.getState())









const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)
