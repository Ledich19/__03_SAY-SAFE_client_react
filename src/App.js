import './App.css'
import Header from './components/Header/Header'
import WorkPanel from './components/WorkPanel'
import Workplace from './components/Workplace'

import axios from 'axios'


axios
  .get('http://localhost:3001/user')
  .then(response => {
    console.log(response)
  })

axios
  .get('http://localhost:3001/persons')
  .then(response => {
    console.log(response)
  })


function App({ store }) {

  const user = {
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

  return (
    <div className="App work-platform">
      <Header />
      <div className="work-platform__body ">
        <div className="work-platform__body-container _container">
          <Workplace store={store} />
          <WorkPanel notifications={user.notifications} />
        </div>
      </div>
    </div>
  )
}

export default App
