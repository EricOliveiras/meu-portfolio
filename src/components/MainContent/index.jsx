import React from 'react'
import SubTitle from '../SubTitle/SubTitle'
import Title from '../Title/Title'
import './style.css'

const MainContent = (props) => {
  return (
    <div className='main-content'>
      <Title title={'ERIC OLIVEIRA'} />
      <SubTitle subTitle={'DESENVOLVEDOR WEB'}/>
    </div>
  )
}

export default MainContent