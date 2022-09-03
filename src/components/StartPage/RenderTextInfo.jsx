import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import userService from '../../services/user'
import './RenderTextInfo.scss'

const RenderTextInfo = () => {
  const [verified, setVerified] = useState()
  useEffect(() => {
    const hash = location.search.substring(6)
    console.log(hash)
    if (hash) {
      const getVerify = async () => {
        try {
          await userService.verify(hash)
          setVerified(true)
        } catch (exception) {
          setVerified(false)
        }
      }
      getVerify()
    }

  }, [])
  if (verified) {
    return (
      <div>Account successfully verified</div>
    )
  } else {
    return (
      <div>Account wrong verified</div>
    )
  }

}

export default RenderTextInfo