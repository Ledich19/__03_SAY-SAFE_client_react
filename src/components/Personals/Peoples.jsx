import React , { useEffect } from 'react'
import PeoplesFuter from './PeoplesFooter'
import Person from './PersonItem'
import { useSelector , useDispatch } from 'react-redux'
import PeoplesFilter from './PeoplesFilter'
import personalService from '../../services/personal'
import { setPeoples } from '../../reducers/peoples/peoplesReducer'

const Peoples = () => {
  const dispatch = useDispatch()
  const personsShow = useSelector( satate => satate.peoples)
  const filter = useSelector( state => state.filter)
  // const personsShow = useSelector(({ peoples, filter }) => {
  //   if (filter.gender === 'all') {
  //     return peoples.filter(person =>
  //       person.raiting >= filter.ratingFrom && person.raiting <= filter.ratingTo
  //     )
  //   } else {
  //     return peoples.filter(person => (person.gender === filter.gender && person.raiting >= filter.ratingFrom && person.raiting <= filter.ratingTo))
  //   }
  // })
  // useEffect(() => {
  //   peoplesService.getAll().then(persons => dispatch(setPeoples(persons)))
  // }, [])


  useEffect( () => {
    personalService.getAll(filter)
      .then(persons => dispatch(setPeoples(persons)))
  }, [filter])

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