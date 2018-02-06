import React, { Component } from 'react';
import PropTypes from 'prop-types';

const projetos = [
	{
		nome: "FreeCourses",
		link: "https://freecourses.github.io/",
		imagem: require("./../../img/free-courses.jpg"),
		description: "Cursos grátis sobre desenvolvimento"
	},
	{
		nome: "Netflix Skipper",
		imagem: require("./../../img/netflix-skipper.jpg"),
		description: "Projeto feito durante o curso do FreeCodeCamp, o intuito da aplicação é gerar frases aleatórias",
		link: "https://chrome.google.com/webstore/detail/netflix-skipper/llindiogmjfoecgpomeikmlfkjlknjef"
	},
	{
		nome: "World Evolution",
		link: "https://leocardoso94.github.io/WorldEvolution/",
		imagem: require("./../../img/worldevolution.jpg"),
		description: "Site feito para o TCC do curso técnico de informártica"
	},
	{
		nome: "Voting App",
		link: "https://voting-app-leo.herokuapp.com/",
		imagem: require("./../../img/voting-app.jpg"),
		description: "Site feito para o TCC do curso técnico de informártica"
	},
	{
		nome: "FiuzaLizz",
		link: "http://fiuzalizz.rf.gd/",
		imagem: require("./../../img/fiuzalizz.jpg"),
		description: "Este projeto foi feito para a matéria de Desenvolvimento WEB do Curso de Análise e Desenvolvimento de Sistemas da Faculdade Impacta."
	},
	{
		nome: "Tinyone",
		link: "https://leocardoso94.github.io/tinyone/",
		imagem: require("./../../img/tinyone.jpg"),
		description: "Este site foi feito para um teste para à vaga do meu atual emprego."
	},
	{
		nome: "Biblioteca Impacta",
		link: "https://github.com/Leocardoso94/biblioteca-impacta",
		imagem: require("./../../img/impacta.jpg"),
		description: "Aplicação feita para gerenciar uma biblioteca.Este projeto foi feito para a disciplina de Linguagem de Programação da Faculdade Impacta. O link para o projeto consiste no seu código fonte"
	}
];

projetos.sort(function () {
	return .5 - Math.random();
});

class BoxItem extends Component {
	render() {
		return (
			<li>
				<h3 className='title text-center cursive'>{this.props.nome}</h3>
				<a href={this.props.link} target="_blank">
					<img src={this.props.imagem} alt={this.props.nome} className="project-icon" />
				</a>
			</li>
		);
	}
}


BoxItem.propTypes = {
	nome: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	imagem: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};


class BoxProject extends Component {

	render() {
		return (
			<div id="box-project">
				<ul className='box-project'>
					{projetos.map(function (projeto) {
						return (
							<BoxItem
								key={projeto.nome}
								nome={projeto.nome}
								imagem={projeto.imagem}
								link={projeto.link}
								description={projeto.description}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

module.exports = BoxProject;
