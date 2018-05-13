import React from 'react';
import Icon from './../../components/Icon';
import './about.css';

const birthday = new Date('10/20/1994');
const today = new Date();
let years = today.getFullYear() - birthday.getFullYear();

// Reset birthday to the current year.
birthday.setFullYear(today.getFullYear());

// If the user's birthday has not occurred yet this year, subtract 1.
if (today < birthday) years -= 1;
const About = () => (
  <div id="Sobre" >
    <div className="container">
      <h1 className="text-center cursive">      Um resuminho sobre mim        </h1>
      <p className="center-block section-description">
       Meu nome é Leonardo Cardoso, tenho { years } anos e moro
	   em São Paulo.Sou apaixonado por esportes(especialmente por futebol),
	 viciado em café e <b > amo desenvolver </b>.
      </p >
      <p className="center-block section-description" >
      Vou contar um pouco de como fui parar nesse mundo de tecnologia:
	   em 2013, por não saber bem qual carreira seguir, optei por começar o curso de Engenharia Elétrica,
	  pois sempre gostei de Matemática.Após uma semana cursando fui chamado
	   para servir no Exército e tive que trancar a faculdade.
      </p>
      <p className="center-block section-description">
      Com o tempo que passei lá me dei conta que Engenharia Elétrica não era pra mim, então, escolhi fazer Técnico em Informática. <br />
      Foi em 2014 que acabei me apaixonando pela área da programação, onde estou atualmente.
      </p>
      <p className="center-block section-description">
       Com isso, decidi cursar Análise e Desenvolvimento de Sistemas e, em 2016, consegui meu primeiro estágio como Desenvolvedor Front - End.
      </p>
    </div >
  </div >
);


export default About;
