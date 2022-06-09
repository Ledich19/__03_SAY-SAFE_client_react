import React from 'react'
import logo from '../../img/logo.svg'
import Navigation from './Navigation'
import User from './User'


const Header = () => {
  return (
    <div className='work-platform__header'>
      <div className='work-platform__header-efect'>
        <div className='work-platform__header-container _container'>
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