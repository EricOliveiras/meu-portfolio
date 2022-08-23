import React from 'react'
import './style.css'

const SubTitle = (props) => {
  return (
    <>
      <p className='subTitle'>
        {props.subTitle}
      </p>
      <hr />
    </>
  )
}

export default SubTitle