import React from 'react'
import './style.css'

const SubTitle = (props) => {
  return (
    <>
      <p className='subTitle'>
        {props.subTitle}
      </p>
    </>
  )
}

export default SubTitle