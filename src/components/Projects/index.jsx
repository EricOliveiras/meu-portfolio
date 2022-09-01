import React from 'react'
import Card from '../Card'
import './style.css'

const Projects = () => {
  return (
    <>
      <h2 className='project-title'>PROJETOS</h2>
      <div  className='project'>
        <Card
          img={'src/assets/imgs/crud.png'} 
          title='CRUD'
          p='Um CRUD simples uutilizando Javascript, Sequelize, Postgres e Docker.'
          link='https://github.com/EricOliveiras/sistema-de-entrada-hospital'
        />
        <Card 
          img={'src/assets/imgs/discord.png'}
          title='Bot Alerta de Lives [Twitch]'
          p='Um bot para discord que alerta quando suas lives favoritas estiverem online.'
          link='https://discord.gg/qBEyXE8Y3k'
        />
        <Card 
          img={'src/assets/imgs/lista.png'}
          title='To Do List'
          p='Uma lista de tarefas feita com ReactJs e Typescript'
          link='https://lista-de-tarefas-silk.vercel.app/'
        />
      </div>
      <hr />
    </>
  )
}

export default Projects