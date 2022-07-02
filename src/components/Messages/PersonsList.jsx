import React from 'react'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'

const PersonsList = () => {
  const persons = useSelector(state => state.peoplesWithChat)
  const activeID = useSelector(state => state.visibleUser.id)
  return (
    <div className='chats__peoples-chats peoples-chats'>

      <form action='#' className=' peoples-chats__search search'>
        <input autoComplete='off' type='text' name='search' placeholder='Search...' className=' search__input' />
        <button type='submit' className=' search__button _icon-search'></button>
      </form>
      <div className='peoples-chats__list'>
        {persons.map(person =>
          <ListItem
            className={ person.id === activeID ? '_active' : ''}
            key={person.id}
            person={person} />

        )}

      </div>
      <div className='peoples-chats__footer'></div>
    </div>


  )
}

export default PersonsList