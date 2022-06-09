import React from 'react'

const Select = (props) => {
  return (

    <select className={props.className}
      onChange={props.onChange}
      value={props.value}>

      {new Array(props.emount).fill('').map((e, i) => {
        return (
          <option key={i} value={i + 1}> {i + 1} </option>
        )
      })}
    </select>
  )
}


export default Select