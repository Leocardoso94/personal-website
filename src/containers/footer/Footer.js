import React from 'react';
import SocialIcons from './../../components/SocialIcons';
import './footer.css';

const Footer = () => (
  <div id="Contato">
    <div className="container">
      <h1 className="cursive text-center">Contato</h1>
      <h3 className="text-center">Caso tenha interrese em trabalhar comigo, aqui estão as formas de entrar em contato:</h3>
      <div className="infos">
        <SocialIcons />
      </div>
    </div>
    <footer>
      <span className="cursive">Leonardo Cardoso</span>
    </footer>
  </div>
);

export default Footer;
