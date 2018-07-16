import React from 'react';
import BoxProject from './BoxProject';
import './Projetos.css';

const Projects = () => (
  <div id="Projetos">
    <div className="container">
      <h1 className="text-center cursive">Projects</h1>
      <h3 className="text-center">Some projects I've done</h3>
      <BoxProject />
    </div>
  </div>
);

export default Projects;
