import React from 'react'
import Select from './Select'
import { useDispatch } from 'react-redux'
import { genderChange, ratingFromChange, ratingToChange } from '../../reducers/peoples/peoplesFilterReducer'
import { useSelector } from 'react-redux'


const PeoplesSort = () => {
  const dispatch = useDispatch()
  const filterSelected = (value) => {
    dispatch(genderChange(value))
  }
  const filterRatingFrom = (value) => {
    dispatch(ratingFromChange(value))

  }
  const filterRatingTo = (value) => {
    dispatch(ratingToChange(value))
  }

  return (
    <div className='peoples__sort '>
      <div className='peoples__sort-sex'>
        <div className='peoples__sort-text'>Show:</div>

        <label className='peoples__checkbox' htmlFor='man'>
          <input
            id='man'
            type='radio'
            name='sex'
            onChange={() => filterSelected('man')}
          />
          <span>Man</span>
        </label>

        <label className='peoples__checkbox' htmlFor='woman'>
          <input
            id='woman'
            type='radio'
            name='sex'
            onChange={() => filterSelected('woman')}
          />
          <span>Woman</span>
        </label>

        <label className='peoples__checkbox' htmlFor='all'>
          <input
            id='all'
            type='radio'
            name='sex'
            onChange={() => filterSelected('all')}
            defaultChecked
          />
          <span>All</span>
        </label>

      </div>

      <div className='peoples__rating rating-people'>
        <span> Show by rating from </span>
        < Select
          emount={100}
          value={useSelector(state => state.filter.ratingFrom)}
          onChange={(e) => filterRatingFrom(e.target.value)}
          className='rating-people__item'
        />
        <span>to</span>
        < Select
          emount={100}
          value={useSelector( state => state.filter.ratingTo)}
          onChange={(e) => filterRatingTo(e.target.value)}
          className='rating-people__item'
        />
      </div>
    </div>
  )
}

export default PeoplesSort