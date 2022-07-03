import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../../img/logo.svg'
import { setErrorMessage } from '../../reducers/errorReducer'
// import { changeRegistrationEmail, changeRegistrationRassword, changeRegistrationRepeadPassword, changeRegistrationUsername } from '../../reducers/facePage/registrationReducer'
import registrationService from '../../services/registration'
import './RegistrationForm.scss'
import { Formik } from 'formik'



const RegistrationForm = () => {
  const { repeatPassword, } = useSelector(state => state.registration)
  const { typeMassage, errorMessage } = useSelector(state => state.error)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const handleRegistration = async (event) => {
  //   event.preventDefault()

  //   // if (password !== repeatPassword) {
  //   //   dispatch(setErrorMessage('should be the same should be the same password'))
  //   //   setTimeout(() => {
  //   //     dispatch(setErrorMessage(null))
  //   //     console.log(errorMessage)
  //   //   }, 3000)
  //   //   return
  //   // }

  //   try {
  //     await registrationService.registration({
  //       username, password,
  //     })
  //     dispatch(changeRegistrationUsername(''))
  //     dispatch(changeRegistrationEmail(''))
  //     dispatch(changeRegistrationRassword(''))
  //     dispatch(changeRegistrationRepeadPassword(''))
  //     { navigate('/login') }
  //   } catch (exception) {
  //     dispatch(setErrorMessage('Wrong credentials'))
  //     setTimeout(() => {
  //       dispatch(setErrorMessage(null))
  //     }, 5000)
  //   }

  //   console.log('handleRegistration')
  // }



  return (



    <div className="registration">

      <div className="info-page__logo">
        <img src={logo} alt="image description" />
      </div>

      <Formik
        initialValues={{ email: '', password: '', username: '' }}
        validate={values => {
          const errors = {}

          if (!values.username) {
            errors.username = 'Required'
          } else if (
            !/^(?=.*[A-Za-z])[A-Za-z\d]{3,}$/i.test(values.username)
          ) {
            errors.username = 'Invalid name'
          }

          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }

          if (!values.password) {
            errors.password = 'Required'
          } else if (
            !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i.test(values.password)
          ) {
            errors.password = 'only latin letters and numbers can be used'
          }


          return errors
        }}
        onSubmit={ async (values, { setSubmitting }) => {
          const { username, password, email } = values
          try {
            await registrationService.registration({
              username, password, email
            })
            { navigate('/login') }
          } catch (exception) {
            dispatch(setErrorMessage('Wrong credentials'))
            setTimeout(() => {
              dispatch(setErrorMessage(null))
            }, 5000)
          }

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 5000)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className='registration__form'>
            {errorMessage !== null && <div className={` registration__item ${typeMassage}`}>{errorMessage}</div>}


            <div>
              <div className='registration__error'>
                {errors.username && touched.username && errors.username}
              </div>
              <input
                id='username'
                type='text'
                name='username'
                className='registration__item'
                placeholder='username'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
              />
            </div>

            <div>
              <div className='registration__error'>
                {errors.email && touched.email && errors.email}
              </div>
              <input
                id='email'
                type='email'
                name='email'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                className='registration__item'
                placeholder='email' />
            </div>

            <div>
              <div className='registration__error'>
                {errors.password && touched.password && errors.password}
              </div>
              <input
                id='password'
                name='password'
                type='password'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                className='registration__item'
                placeholder='password' />
            </div>


            <input
              value={repeatPassword}
              onChange={() => console.log()}
              name='repeat-password'
              type='password'
              className='registration__item'

              placeholder='repeat password' />


            <button type='submit' disabled={isSubmitting} className='registration__btn registration__item'>registration</button>
          </form >

        )}
      </Formik>



    </div >

  )
}

export default RegistrationForm