import React from 'react';
import Home from './home';
import Footer from './footer/Footer';
import Projects from './projects/Projects';
import About from './about/About';
import Menu from './menu/Menu';
import Articles from './articles';
import './app.css';

const App = () => (
  <div className="main-container">
    <Menu />
    <Home />
    <About />
    <Articles />
    <Projects />
    <Footer />
  </div>
);

export default App;
