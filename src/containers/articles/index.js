import React from 'react';
import './articles.css';

const artigos = [
  {
    title: 'Utilizando Travis CI para fazer Continuous Deployment de suas aplicações no GitHub Pages',
    url: 'https://medium.com/trainingcenter/utilizando-travis-ci-para-fazer-continuous-deployment-de-suas-aplica%C3%A7%C3%B5es-no-github-pages-e86c6b55cba1',
    image: 'https://cdn-images-1.medium.com/max/800/1*LpvUO04Pm8JBBbsFYCg8RA.png'
  }
];

const ArtigosList = () => artigos.map(({ title, url, image }) => (
  <li key={url} className="articles__list__item" >
    <a href={url} target="_blank" >
      <img src={image} alt={title} />
    </a>
    <h3 title={title}>{title}</h3>
  </li>
));

export default () => (
  <div id="Artigos">
    <div className="container">
      <h1 className="text-center cursive">Artigos</h1>
      <p className="text-center">Alguns artigos já publicados:</p>
      <br />
      <ul className="articles__list">
        <ArtigosList />
      </ul>
    </div>
  </div>
);

