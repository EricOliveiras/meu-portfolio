import React from 'react'
import './style.css'

const About = () => {
  const yearCalc = (year, month, day) => {
    let d = new Date(),
      ano_atual = d.getFullYear(),
      mes_atual = d.getMonth() + 1,
      dia_atual = d.getDate(),

      ano_aniversario = +year,
      mes_aniversario = +month,
      dia_aniversario = +day,

    quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
      quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
  }

  return (
    <>
      <h2 className='about-title'>SOBRE MIM</h2>
      <p className='about-paragraph'>
        {`
          Olá, me chamo Eric, tenho ${yearCalc(1988, 8, 23)} anos. Sou formado em Análise e Desenvolvimento de Sistemas pela faculdade UniFael, mas tive meu primeiro contato com programação no curso de Engenharia civil, a linguagem utilizada na matéria do curso era Cobol. Depois desse contato comecei a me interessar mais pelo mundo da programação.
        `} 
      </p>
      <p className='about-paragraph'>
        {`
          O meu foco principal é com o desenvolvimento web Back-end com Node.Js, onde tenho mais conhecimento e já desenvolvi alguns projetos pessoais, porém consigo desenvolver no Front-end também, por exemplo, esta página foi desenvolvida com ReactJs. 
        `} 
      </p>
      <p className='about-paragraph'>
        {`
          Saiba mais sobre mim acessando minhas redes sociais logo acima e/ou fazendo o download do meu currículo.   
        `} 
      </p>
      <hr />
    </>
  )
}

export default About