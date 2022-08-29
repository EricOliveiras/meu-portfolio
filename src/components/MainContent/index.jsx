import React from 'react'
import About from '../About'
import Skills from '../Skills/indx'
import SubTitle from '../SubTitle'
import Title from '../Title'
import Projects from '../Projects'
import Contacts from '../Contacts'
import './style.css'

const MainContent = (props) => {
  return (
    <div className='main-content'>
      <Title title={'ERIC OLIVEIRA'} />
      <SubTitle subTitle={'DESENVOLVEDOR WEB'}/>
      <Contacts />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default MainContent