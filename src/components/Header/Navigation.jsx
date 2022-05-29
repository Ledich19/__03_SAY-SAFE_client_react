import React from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

const Navigation = () => {


  return (
    <nav className="work-platform__menu platform-menu">
      <ul className="platform-menu__list">
      <Link className="platform-menu__item _active" to="/" >FACES</Link>
      <Link className="platform-menu__item _active" to="/messages" >MESSAGE</Link>
      <Link className="platform-menu__item _active" to="/mail" >MAIL</Link>
      <Link className="platform-menu__item _active" to="/credits" >CREDITS</Link>
      </ul>






    </nav>
  )
}

export default Navigation




