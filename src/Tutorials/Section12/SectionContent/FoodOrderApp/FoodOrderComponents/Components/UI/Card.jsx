import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='cardChildren'>{props.children}</div>
  )
}

export default Card