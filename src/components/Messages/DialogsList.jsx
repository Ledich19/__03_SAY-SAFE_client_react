import React from 'react'
import { useSelector } from 'react-redux'
import DialogItem from './DialogItem'
import './DialogsList.scss'


const PersonsList = () => {
  const persons = useSelector(state => state.peoplesWithChat)
  const activeID = useSelector(state => state.visibleUser.id)

  return (
    <div className='chats__dialogs dialogs'>

      <form action='#' className=' dialogs__search search'>
        <input autoComplete='off' type='text' name='search' placeholder='Search...' className=' search__input' />
        <button type='submit' className=' search__button _icon-search'></button>
      </form>
      <div className='dialogs__list'>
        {persons.map(person =>
          <DialogItem
            username={`${person.name} ${person.lastname}`}
            avatar={person.photo}
            className={ person.id === activeID ? '_active' : ''}
            key={person.id}
            person={person}
            date = {'Sat Jul 02 2022 19:54:49 GMT+0300'}
            isOnline={true}
            newMessages={789}
          />

        )}

      </div>
      <div className='dialogs__footer'></div>
    </div>


  )
}

export default PersonsList