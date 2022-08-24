import React from 'react'
import './style.css'

const Skills = () => {
  return (
    <>
      <h2 className='skill-title'>SKILLS</h2>
      <ul className='list-item'>
        <li className='item'>
          Javascript
          <img src="src/assets/imgs/javascript.png" alt="icone nodejs" />
        </li>
        <li className='item'>
          NodeJs
          <img src="src/assets/imgs/nodejs.png" alt="icone nodejs" />
        </li>
        <li className='item'>
          Typescript
          <img src="src/assets/imgs/typescript.png" alt="icone typescript" />
        </li>
        <li className='item'>
          PostgresSQL
          <img src="src/assets/imgs/postgres.png" alt="icone postgres" />
        </li>
        <li className='item'>
          MongoDB
          <img src="src/assets/imgs/mongodb.png" alt="icone mongodb" />
        </li>
        <li className='item'>
          Docker
          <img src="src/assets/imgs/docker.png" alt="icone docker" />
        </li>
        <li className='item'>
          NestJs
          <img src="src/assets/imgs/nest.png" alt="icone nestjs" />
        </li>
        <li className='item'>
          ReactJs
          <img src="src/assets/imgs/reactjs.png" alt="icone reactjs" />
        </li>
      </ul>
      <hr />
    </>
  )
}

export default Skills