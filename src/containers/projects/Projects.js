import React from 'react';
import BoxProject from './BoxProject';
import './Projetos.scss';

const Projects = () => {
	return (
		<div id="Projetos">
			<div className="container">
				<h1 className="text-center cursive">Projetos</h1>
				<h3 className="text-center">Alguns projetos já realizados:</h3>
				<BoxProject />
			</div>
		</div>
	);
};

export default Projects;
