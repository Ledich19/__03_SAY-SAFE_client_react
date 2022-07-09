import React from 'react'
import { useSelector } from 'react-redux'
import DialogItem from './DialogItem'
import './DialogsList.scss'
import orderBy from 'lodash/orderBy'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import noResult from '../../img/no-search-results.svg'


const dialogsList = () => {
  const [filter, setFilter] = useState('')
  const dialogs = useSelector(state => state.dialogs.items
    .filter((d) => d.personal.username.toLowerCase().indexOf(filter.toLowerCase()) >= 0 ))
  const activeID = useSelector(state => state.currentDialog)

  return (
    <div className='chats__dialogs dialogs'>
      <form action='#' className=' dialogs__search search'>
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className=' search__input'
          type='search'
          name='search'
          autoComplete='off'
          placeholder='Search contact'
        />
        <button type='submit' className=' search__button'>
          <BsSearch />
        </button>
      </form>

      <div className='dialogs__list'>
        {dialogs.length === 0 ? <img src={noResult} className=' search__no-search' alt='no result' /> : null}
        {orderBy(dialogs, (a) => new Date(a.date), ['desc'])
          .map(dialog =>
            <DialogItem
              dialog={dialog}
              className={dialog.id === activeID ? '_active' : ''}
              key={dialog.id}
            />
          )
        }
      </div>
      <div className='dialogs__footer'></div>
    </div>
  )
}

DialogItem.defaultProps = {

}

DialogItem.propTypes = {


}

export default dialogsList