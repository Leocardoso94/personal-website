import React, { Component } from 'react';
import PropTypes from 'prop-types';

const projetos = [
  {
    nome: 'FreeCourses',
    link: 'https://freecourses.github.io/',
    imagem: require('./../../img/free-courses.jpg')
  },
  {
    nome: 'Netflix Skipper',
    imagem: require('./../../img/netflix-skipper.jpg'),
    link:
      'https://chrome.google.com/webstore/detail/netflix-skipper/llindiogmjfoecgpomeikmlfkjlknjef'
  }
];

const BoxItem = ({ nome, link, imagem }) => (
  <li>
    <h3 className="title text-center cursive">{nome}</h3>
    <a href={link} target="_blank">
      <img src={imagem} alt={nome} className="project-icon" />
    </a>
  </li>
);

BoxItem.propTypes = {
  nome: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired
};

const BoxProject = () => (
  <div id="box-project">
    <ul className="box-project">
      {projetos.map(projeto => (
        <BoxItem
          key={projeto.nome}
          nome={projeto.nome}
          imagem={projeto.imagem}
          link={projeto.link}
          description={projeto.description}
        />
      ))}
    </ul>
  </div>
);

module.exports = BoxProject;
