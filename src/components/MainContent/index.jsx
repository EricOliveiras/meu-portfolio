import React from 'react'
import About from '../About'
import SubTitle from '../SubTitle'
import Title from '../Title'
import './style.css'

const MainContent = (props) => {
  return (
    <div className='main-content'>
      <Title title={'ERIC OLIVEIRA'} />
      <SubTitle subTitle={'DESENVOLVEDOR WEB'}/>
      <About />
    </div>
  )
}

export default MainContent