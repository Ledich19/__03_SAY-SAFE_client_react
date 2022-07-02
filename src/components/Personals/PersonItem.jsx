import React from 'react'
import Button from '../Button'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFollow } from '../../reducers/userReducer'
import userService from '../../services/user'



const Person = ({ person }) => {
  const dispatch = useDispatch()
  const userMembers = useSelector(state => state.user.members)
  const members = userMembers ? userMembers : []

  const togglePersonFollow = (id) => {
    userService.follow(id)
      .then(person => {
        console.log('person', person)
        dispatch(toggleFollow(person))
      })
  }

  useEffect(() => {
    let divs = document.querySelectorAll('.peoples__item'), timer, pause = 1
    function resizeDivs() {
      const width = divs[0].offsetWidth * 1;
      [].forEach.call(divs, function (el) {
        el.style.height = width + 'px'
      })
    }
    window.addEventListener('resize', function () {
      window.clearTimeout(timer)
      timer = window.setTimeout(resizeDivs, pause)
    })
    resizeDivs()
  })

  return (
    <div className='peoples__item item-person'>
      <div className='item-person__photo'>
        <img src={person.avatar} alt='face' />
      </div>
      <div className='item-person__name'>{person.name}{person.lastname}{person.patronymic}</div>
      <div className='item-person__statistic'>statistic<span>{person.raiting}</span></div>
      <div className='item-person__buttons'>
        <Link to={`/persons/${person.id}`} className='item-person__start'>
          start talk
        </Link>

        <Button
          onClick={() => togglePersonFollow(person.id)}
          className='item-person__add'
          text={members.includes(person.id) ? 'unfollow' : 'follow'} />
      </div>
    </div>
  )

}

export default Person