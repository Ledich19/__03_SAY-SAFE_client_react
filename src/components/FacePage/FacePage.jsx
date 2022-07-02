import React from 'react'
import LoginForm from './LoginForm'
import { Routes, Route, Link } from 'react-router-dom'
import About from './About'
import RegistrationForm from './RegistrationForm'
import Product from './Product'
import Price from './Price'

const FacePage = () => {
  return (
    <div className='wrapper'>
      <main className='page'>
        <header className='header'>
          <div className='header__container _container'>
            <div className='header__top top-header'>
              <nav className='top-header__menu'>
                <ul className='top-header__list'>
                  {/* <Link className='top-header__link' to='/home' >Home</Link> */}
                  <Link className='top-header__link' to='/product' >Product</Link>
                  <Link className='top-header__link' to='/prices' >Prices</Link>
                  <Link className='top-header__link' to='/' >About us</Link>
                </ul>
              </nav>
              <div className='top-header_buttons'>
                <Link className='top-header__button' to='/login' >login</Link>
                <Link className='top-header__button' to='/registration' >registration</Link>
              </div>
            </div>
          </div>
        </header>

        <div>
          <div className='_container'>

            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/registration' element={<RegistrationForm />} />
              <Route path='/product' element={<Product />} />
              <Route path='/prices' element={<Price />} />

              {/* <Route path='/home' element={<LoginForm />} /> */}
            </Routes>



          </div>
        </div>
      </main>
    </div>

  )
}

export default FacePage