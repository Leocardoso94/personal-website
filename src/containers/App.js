
import Home from './home';
import Footer from './footer/Footer';
import Projects from './projects/Projects';
import About from "./about/About";
import Menu from "./menu/Menu";
import Skills from './skills/Skills';
import Video from './../components/Video';
import React from 'react';

const App = () => {
	return (

		<div className='main-container'>
			<Menu />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Footer />
			<Video />
		</div>

	);
};



export default App;