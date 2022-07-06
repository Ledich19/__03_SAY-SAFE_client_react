
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import FacePage from './components/FacePage/FacePage'
import Header from './components/Header/Header'
import WorkPanel from './components/WorkPanel'
import Workplace from './components/Workplace'
import { setUser } from './reducers/userReducer'
import peoplesService from './services/personal'
import userService from './services/user'

// import axios from 'axios'


// axios
//   .get('http://localhost:3001/user')
//   .then(response => {
//     console.log(response)
//   })

// axios
//   .get('http://localhost:3001/persons')
//   .then(response => {
//     console.log(response)
//   })

function App({ store }) {
  const  user = useSelector(state => state.user)

  const dispatch = useDispatch()
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
      peoplesService.setToken(user.token)
      userService.setToken(user.token)
    }
  }, [])


  const userN = {
    notifications: [
      {
        name: 'Messages',
        id: 'qw346',
        amount: 1,
      },
      {
        name: 'Mail',
        id: 'rther ',
        amount: 155,
      },{
        name:'Favorite' ,
        id: 'rethet',
        amount:0 ,
      },
    ]
  }

  if ( user ) {
    return (
      <div className="App work-platform">
        <Header />
        <div className="work-platform__body ">
          <div className="work-platform__body-container _container">
            <Workplace store={store} />
            <WorkPanel notifications={userN.notifications} />
          </div>
        </div>
      </div>
    )
  } else {
    return <FacePage />
  }


}

export default App
