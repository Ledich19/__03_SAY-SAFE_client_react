import React from 'react'
import PeoplesFuter from './PeoplesFooter'
import Person from './Person'
import { useSelector } from 'react-redux'
import PeoplesFilter from './PeoplesFilter'



const Peoples = () => {

  const personsShow = useSelector(({ peoples, filter }) => {
    if (filter.gender === 'all') {
      return peoples.filter(person =>
        person.raiting >= filter.ratingFrom && person.raiting <= filter.ratingTo
      )
    } else {
      return peoples.filter(person => (person.gender === filter.gender && person.raiting >= filter.ratingFrom && person.raiting <= filter.ratingTo))
    }
  })

  return (
    <div className='work-platform__peoples peoples'>

      <PeoplesFilter />

      <div className='peoples__body'>
        {personsShow.map(person => {
          return (<Person key={person.id}
            person={person} />)
        })}
      </div>

      <PeoplesFuter persons={personsShow} />
    </div>
  )
}

export default Peoples
// const togleFavirite = (id) => {
//   const person = showPersons.find(p => p.id === id)
//   const changedPerson = { ...person, follow: !person.follow }
//   peopleService
//     .update(id, changedPerson)
//     .then(response => {
//       // setShowPersons(showPersons.map(person => person.id !== id ? person : response))
//     })
//     .catch(error => {
//       alert(
//         `the person '${person.mname}' was already deleted from server`
//       )
//       setTimeout(() => {
//         console.log('setErrorMessage(null)')
//       }, 5000)
//       // setShowPersons(showPersons.filter(p => p.id !== id))
//     })
// }