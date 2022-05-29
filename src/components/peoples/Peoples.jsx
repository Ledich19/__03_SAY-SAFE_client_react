import React from 'react'
import { useState, useEffect } from 'react'
import PeoplesFuter from './PeoplesFooter'
import Person from './Person'
import Select from './Select'
import peopleService from '../../services/peoples'
import {
  useMatch
} from 'react-router-dom'


const Peoples = () => {
  const [peoplesSort, setPeoplesSort] = useState('all')
  const [peoplesRaitingFrom, setPeoplesRaitingFrom] = useState('0')
  const [peoplesRaitingTo, setPeoplesRaitingTo] = useState('100')

  const [showPersons, setShowPersons] = useState([])



  useEffect(() => {
    peopleService
      .getAll()
      .then(persons => {
        setShowPersons(persons)
      })
  }, [])

  const match = useMatch('/persons/:id')
  const person = match
    ? showPersons.find(p => p.id === Number(match.params.id))
    : null


  const togleFavirite = (id) => {
    const person = showPersons.find(p => p.id === id)
    const changedPerson = { ...person, follow: !person.follow }
    peopleService
      .update(id, changedPerson)
      .then(response => {
        setShowPersons(showPersons.map(person => person.id !== id ? person : response))
      })
      .catch(error => {
        alert(
          `the person '${person.mname}' was already deleted from server`
        )
        setTimeout(() => {
          console.log('setErrorMessage(null)')
        }, 5000)
        setShowPersons(showPersons.filter(p => p.id !== id))
      })
  }

  const filterSelected = (value) => {
    console.log(value)
  }

  let personsSortGender = peoplesSort === 'all' ?
    showPersons
    : showPersons.filter(person => (person.gender === peoplesSort))

  let personsShow = personsSortGender.filter(person =>
    person.raiting >= peoplesRaitingFrom && person.raiting <= peoplesRaitingTo
  )

  return (
    <div className='work-platform__peoples peoples'>

      <div className='peoples__sort '>
        <div className='peoples__sort-sex'>
          <div className='peoples__sort-text'>Show:</div>

          <label className='peoples__checkbox' htmlFor='man'>
            <input
              onChange={() => filterSelected('man')}
              id='man' name='sex'
              value='man'
              type='radio' />
            <span>
              Man
            </span>
          </label>

          <label className='peoples__checkbox' htmlFor='woman'>
            <input
              onChange={() => filterSelected('woman')}
              id='woman'
              name='sex'
              value='woman'
              type='radio' />
            <span>
              Woman
            </span>
          </label>

          <label  className='peoples__checkbox' htmlFor='all'>
            <input
              onChange={() => filterSelected('all')}
              id='all'
              name='sex'
              value='all'
              type='radio'
              defaultChecked />
            <span>
              All
            </span>
          </label>

        </div>

        <div className='peoples__rating rating-people'>
          <span> Show by rating from </span>
          < Select
            emount={100}
            value={peoplesRaitingFrom}
            onChange={(e) => setPeoplesRaitingFrom(e.target.value)}
            className='rating-people__item'
          />
          <span>to</span>
          < Select
            emount={100}
            value={peoplesRaitingTo}
            onChange={(e) => setPeoplesRaitingTo(e.target.value)}
            className='rating-people__item'
          />
        </div>
      </div>

      <div className='peoples__body'>
        {personsShow.map(person => {
          return (<Person key={person.id} togleFavirite={() => togleFavirite(person.id)} person={person} />)
        })}
      </div>

      <PeoplesFuter persons={showPersons} />
    </div>
  )
}

export default Peoples