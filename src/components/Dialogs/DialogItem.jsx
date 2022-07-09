
import { useDispatch } from 'react-redux'
import { setCurrentDialog } from '../../reducers/currentDialogReducer'
import './DialogItem.scss'
import PropTypes from 'prop-types'
import Time from './Time'
import Avatar from './Avatar'

const DialogItem = ({
  dialog, className
}) => {
  // const dialog = useSelector(state => state.dialogs.find(d => d.id === id))
  const dispatch = useDispatch()
  const onSelectDialog = () => dispatch(setCurrentDialog(dialog.id))

  return (
    <div onClick={onSelectDialog} className={`dialogs-item ${className}`}>

      <Avatar
        id={dialog.id}
        avatar={dialog.personal.avatar}
        className={'dialogs-item__avatar'}
        username={dialog.personal.username}
        isOnline={dialog.personal.isOnline}
      />

      <div className='dialogs-item__text'>
        <Time date={dialog.date} className='dialogs-item__data' />
        <div className='dialogs-item__name'>
          {dialog.personal.username}
        </div>
        <div className='dialogs-item__rating'>Member rating
          <span>{dialog.rating}</span>
        </div>
      </div>
      <div className='dialogs-item__new-messages'>
        <span>{(dialog.newMessages > 99) ? '99+' : dialog.newMessages}</span>
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