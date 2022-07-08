import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore , combineReducers } from 'redux'

import peoplesFilterReducer from './reducers/peoples/peoplesFilterReducer'
import PeoplesReducer from './reducers/peoples/peoplesReducer'

import chatReducer from './reducers/chatReducer'
import userReducer from './reducers/userReducer'
import personReducer from './reducers/personReducer'
import dialogsReducer from './reducers/dialogsReducer'
import mailsReducer from './reducers/mailsReducer'
import mailsFilterReducer from './reducers/mailsFilterReducer'
import mailsDeleteREducer from './reducers/mailsDeleteREducer'
import mailsVisibleReducer from './reducers/mailsVisibleReducer'
import userInfoReducer from './reducers/userInfoReducer'
import photoListReducer from './reducers/profileReducers/photoListReducer'
import photoCheckReducer from './reducers/profileReducers/photoCheckReducer'
import loginReducer from './reducers/loginReducer'
import registrationReducer from './reducers/facePage/registrationReducer'
import errorReducer from './reducers/errorReducer'

const reducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  registration: registrationReducer,

  error: errorReducer,

  userInfo: userInfoReducer,
  photos: photoListReducer,
  checkedPhoto: photoCheckReducer,

  peoples: PeoplesReducer,
  filter: peoplesFilterReducer,

  chat: chatReducer,
  visibleUser: personReducer,

  dialogs: dialogsReducer,

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
