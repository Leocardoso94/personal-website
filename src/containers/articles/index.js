import React from 'react';
import './articles.css';
import artigosData from './artigos-data';

const ArtigosList = () =>
  artigosData.map(({ title, url, image }) => (
    <li key={url} className="articles__list__item">
      <a href={url} target="_blank">
        <img src={image} alt={title} />
        <h3 className="articles__list__item--title">{title}</h3>
      </a>
    </li>
  ));

export default () => (
  <div id="Artigos">
    <div className="container">
      <h1 className="text-center cursive">Artigos</h1>
      <h4 className="text-center">Alguns artigos já publicados:</h4>
      <br />
      <ul className="articles__list">
        <ArtigosList />
      </ul>
    </div>
  </div>
);
