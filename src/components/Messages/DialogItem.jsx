
import { useDispatch } from 'react-redux'
import { setWisiblePerson } from '../../reducers/personReducer'
import './DialogItem.scss'
import PropTypes from 'prop-types'
import noAvatar from '../../img/userPhoto.png'
import Time from './Time'

const DialogItem = ( { date, person , username, className, avatar, isOnline, newMessages }) => {

  const dispatch = useDispatch()
  const setPerson = () => dispatch(setWisiblePerson(person))

  return (
    <div onClick={setPerson} className={`dialogs-item ${className}`}>
      <div className='dialogs-item__photo'>
        <img src={avatar ? avatar : noAvatar} alt={`${username} avatar`} />
        <span className={isOnline ? 'dialogs-item__online' : 'dialogs-item__ofline'}></span>
      </div>
      <div className='dialogs-item__text'>
        <div className='dialogs-item__name'>
          {username}
        </div>
        <div className='dialogs-item__rating'>Member rating
          <span>{person.rating}</span>
        </div>
        <Time date={date} className='dialogs-item__data'/>
      </div>
      <div className='dialogs-item__new-messages'>
        <span>{(newMessages > 99) ? '99+' : newMessages}</span>
      </div>
    </div>
  )
}

DialogItem.defaultProps = {
  username: '',
  rating: 0,
  date: '',
}

DialogItem.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  date: PropTypes.string,
  rating: PropTypes.number,
  isOnline: PropTypes.bool
}

export default DialogItem