import React from 'react'
import { ImLinkedin, ImGithub } from 'react-icons/im'
import { AiTwotoneMail } from 'react-icons/ai'
import './style.css'

const Contacts = () => {
  return (
    <>
      <div className="contacts">
        <ul className='social'>
          <li className='github'>
            <a href="https://github.com/EricOliveiras" target="_blank" rel="github">
              <ImGithub color='#faca66' />
            </a>
          </li>
          <li className='linkedin'>
            <a href="https://www.linkedin.com/in/eric-oliveira-588379204/" target="_blank" rel="noopener noreferrer">
              <ImLinkedin color='#faca66' />
            </a>
          </li>
          <li className='email'>
            <a href="mailto:eriicdiiego@hotmail.com">
              <AiTwotoneMail color='#faca66' size={20}/>
            </a>
          </li>
        </ul>
        <button className='btn-cv'>
          <a href="src/assets/Eric_Oliveira_curriculo.pdf" download>
            Baixe meu currículo
          </a>
        </button>
      </div>
      <hr />
    </>
  )
}

export default Contacts