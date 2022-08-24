import React from 'react'
import './style.css'

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-info'>
        <img className='card-img' src="" alt="" />
        <h3 className='card-title'>{props.title}</h3>
        <p className='card-p'>{props.p}</p>
      </div>
      <button className='card-btn'>Ir</button>
    </div>
  )
}

export default Card