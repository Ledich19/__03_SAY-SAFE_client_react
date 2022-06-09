
import { useDispatch } from 'react-redux'
import { setWisiblePerson } from '../../reducers/personReducer'

const PersonsListItem = ( { person , className }) => {

  const dispatch = useDispatch()
  const setPerson = () => dispatch(setWisiblePerson(person))

  return (
    <div onClick={setPerson} className={`peoples-chats__item people-item ${className}`}>
      <div className='people-item__photo'>
        <img src={person.photo} alt='image description' />
      </div>
      <div className='people-item__text'>
        <div className='people-item__name'>{person.name}{ person.Lastname }{person.patronymic}</div>
        <div className='people-item__rating'>Member rating
          <span>{person.rating}</span>
        </div>
      </div>
      <div className='people-item__stop'></div>
    </div>
  )
}

export default PersonsListItem