import React from 'react'
import LoginForm from './LoginForm'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import RegistrationForm from './RegistrationForm'
import Product from './Product'
import Price from './Price'
import StartHeader from './StartHeader'
import './StartPage.scss'
import ErrorMessage from '../NotifyComponent'
import RenderTextInfo from './RenderTextInfo'

const StartPage = () => {
  return (
    <div className='start-body _container'>
      <StartHeader />
      <ErrorMessage className='start-body__error' />

      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/registration' element={<RegistrationForm />} />
        <Route path='/product' element={<Product />} />
        <Route path='/prices' element={<Price />} />
        <Route path='/verify' element={<RenderTextInfo /> } />

        {/* <Route path='/home' element={<LoginForm />} /> */}
      </Routes>
    </div>
  )
}

export default StartPage