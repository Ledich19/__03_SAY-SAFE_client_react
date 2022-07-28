
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import StartPage from './components/StartPage/StartPage'
import Header from './components/Header/Header'
import WorkPanel from './components/WorkPanel'
import Workplace from './components/Workplace'
import { setUser } from './reducers/userReducer'
import peoplesService from './services/personal'
import dialodsService from './services/dialogs'
import userService from './services/user'
import { useNavigate } from 'react-router-dom'

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
  const getMyInfo = async () => {
    const userData = await userService.getMe()
    console.log('userData', userData)
    dispatch(setUser(userData))
  }
  const navigate = useNavigate()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
      { navigate('/personal') }
      peoplesService.setToken(user.token)
      dialodsService.setToken(user.token)
      userService.setToken(user.token)
      getMyInfo()
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
    return  <div className="App work-platform">
      <StartPage/>
    </div>
  }
}

export default App
