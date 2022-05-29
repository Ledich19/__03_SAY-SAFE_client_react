import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore , combineReducers } from 'redux'

import chatReducer from './reducers/chatReducer'
import peoplesFilterReducer from './reducers/peoplesFilterReducer'
import PeoplesReducer from './reducers/peoplesReducer'

const reducer = combineReducers({
  chat: chatReducer,
  peoples: PeoplesReducer,
  filter: peoplesFilterReducer,
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
