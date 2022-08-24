import React from 'react'
import Card from '../Card'
import './style.css'

const Projects = () => {
  return (
    <>
      <h2 className='project-title'>PROJETOS</h2>
      <div  className='project'>
        <Card 
          title='Proejto 1'
          p='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga soluta dolor distinctio eveniet consectetur'
        />
        <Card 
          title='Proejto 2'
          p='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga soluta dolor distinctio eveniet consectetur'
        />
        <Card 
          title='Proejto 3'
          p='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga soluta dolor distinctio eveniet consectetur '
        />
      </div>
      <hr />
    </>
  )
}

export default Projects