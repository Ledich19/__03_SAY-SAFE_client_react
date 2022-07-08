
import { useDispatch } from 'react-redux'
import { setWisiblePerson } from '../../reducers/personReducer'
import './DialogItem.scss'
import PropTypes from 'prop-types'
import Time from './Time'
import Avatar from './Avatar'

const DialogItem = ({
  id,
  date,
  person,
  username,
  className,
  avatar,
  isOnline,
  newMessages,
  rating,
}) => {

  const dispatch = useDispatch()
  const setPerson = () => dispatch(setWisiblePerson(person))

  return (
    <div onClick={setPerson} className={`dialogs-item ${className}`}>

      <Avatar
        id={id}
        avatar={avatar}
        className={'dialogs-item__avatar'}
        username={username}
        isOnline={isOnline}
      />

      <div className='dialogs-item__text'>
        <Time date={date} className='dialogs-item__data' />
        <div className='dialogs-item__name'>
          {username}
        </div>
        <div className='dialogs-item__rating'>Member rating
          <span>{rating}</span>
        </div>
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