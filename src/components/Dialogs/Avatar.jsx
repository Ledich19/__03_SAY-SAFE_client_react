
import './Avatar.scss'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'

const Avatar = ({ username, avatar, isOnline, className, id }) => {
  const [colorStyle, setColorStyle] = useState('')

  useEffect(() => {
    if (!avatar) {
      const [r, g, b] = id
        .toString()
        .substr(-3)
        .split('')
        .map((e) => e.charCodeAt().toString().substr(-2))
      const color = `rgb(${r * 1.5}, ${g * 1.5}, ${b * 1.5})`
      const color2 = `rgb(${r * 3}, ${g * 3}, ${b * 3})`
      setColorStyle({
        background: `linear-gradient(137deg, ${color} 21%, ${color2} 97%)`,
        content: ''
      })
    }
  }, [id])

  return (
    <div style={colorStyle || { colorStyle }} className={`avatar ${className}`}>
      {
        avatar
          ? <img src={avatar} alt={`${username} avatar`} />
          : <div className='avatar__letter'>{username[0]}</div>
      }
      <span className={isOnline ? 'avatar__online' : 'avatar__ofline'}></span>
    </div >
  )
}

Avatar.defaultProps = {
  id: '',
  className: '',
  username: '',
  isOnline: false,
  avatar: '',
}

Avatar.propTypes = {
  avatar: PropTypes.string,
  className: PropTypes.string,
  username: PropTypes.string,
  isOnline: PropTypes.bool
}

export default Avatar