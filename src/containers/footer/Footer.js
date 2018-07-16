import React from 'react';
import SocialIcons from './../../components/SocialIcons';
import './footer.css';

const Footer = () => (
  <div id="Contact">
    <div className="container">
      <h1 className="cursive text-center">Contact</h1>
      <h3 className="text-center">
        If you are interested in talking to me, here are ways to get in touch:
      </h3>
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
