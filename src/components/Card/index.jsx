import React from 'react'
import './style.css'

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-info'>
        <img className='card-img' src={props.img} alt="" />
        <h3 className='card-title'>{props.title}</h3>
        <p className='card-p'>{props.p}</p>
      </div>
      <a className='card-btn' href={props.link} target="_blank">Acessar</a>
    </div>
  )
}

export default Card