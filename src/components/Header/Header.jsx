import React from 'react'
import logo from '../../img/logo.svg'
import Navigation from './Navigation'
import User from './User'
import './Header.scss'


const Header = () => {
  return (
    <div className='header'>
      <div className='header__efect'>
        <div className='header__container _container'>
          <div className='work-platform__logo'>
            <img src={logo} alt='logotipe' />
          </div>
          <div className='work-platform__activiti'>
            <Navigation />
            <User />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header