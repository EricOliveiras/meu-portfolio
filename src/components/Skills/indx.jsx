import React from 'react'
import './style.css'

const Skills = () => {
  return (
    <>
      <h2 className='skill-title'>TECNOLOGIAS</h2>
      <ul className='list-item'>
        <li className='item'>
          Javascript
          <img src="/imgs/javascript.png" alt="icone nodejs" />
        </li>
        <li className='item'>
          NodeJs
          <img src="/imgs/nodejs.png" alt="icone nodejs" />
        </li>
        <li className='item'>
          Typescript
          <img src="/imgs/typescript.png" alt="icone typescript" />
        </li>
        <li className='item'>
          PostgresSQL
          <img src="/imgs/postgres.png" alt="icone postgres" />
        </li>
        <li className='item'>
          MongoDB
          <img src="/imgs/mongodb.png" alt="icone mongodb" />
        </li>
        <li className='item'>
          Docker
          <img src="/imgs/docker.png" alt="icone docker" />
        </li>
        <li className='item'>
          NestJs
          <img src="/imgs/nest.png" alt="icone nestjs" />
        </li>
        <li className='item'>
          ReactJs
          <img src="/imgs/reactjs.png" alt="icone reactjs" />
        </li>
      </ul>
      <hr />
    </>
  )
}

export default Skills