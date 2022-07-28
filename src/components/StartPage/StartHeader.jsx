import React from 'react'
import { Link } from 'react-router-dom'
import './StartHeader.scss'

const StartHeader = () => {
  return (
    <header className='start-header'>
      <div className='start-header__container _container'>
        <nav className='start-header__menu'>
          <ul className='start-header__list'>
            {/* <Link className='start-header__link' to='/home' >Home</Link> */}
            <Link className='start-header__link' to='/product' >Product</Link>
            <Link className='start-header__link' to='/prices' >Prices</Link>
            <Link className='start-header__link' to='/' >About us</Link>
          </ul>
        </nav>
        <div className='start-header_buttons'>
          <Link className='start-header__button' to='/login' >login</Link>
          <Link className='start-header__button' to='/registration' >registration</Link>
        </div>
      </div>
    </header>
  )
}
export default StartHeader