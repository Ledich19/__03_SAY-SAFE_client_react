
import { useDispatch } from 'react-redux'
import { setWisiblePerson } from '../../reducers/personReducer'
import './listItem.scss'

const ListItem = ( { person , className }) => {

  const dispatch = useDispatch()
  const setPerson = () => dispatch(setWisiblePerson(person))

  return (
    <div onClick={setPerson} className={`people-item ${className}`}>
      <div className='people-item__photo'>
        <img src={person.photo} alt='image description' />
      </div>
      <div className='people-item__text'>
        <div className='people-item__name'>{person.name}{ person.Lastname }{person.patronymic}</div>
        <div className='people-item__rating'>Member rating
          <span>{person.rating}</span>
        </div>
      </div>
      <div className='people-item__new-messages'>
        99+
      </div>
    </div>
  )
}

export default ListItem