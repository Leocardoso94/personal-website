import React from 'react';
import './index.scss';



setTimeout(function () {
	window.addEventListener('scroll', (event) => {
		event.stopPropagation();

		const navBar = document.getElementById('navbar');
		const topOfWindow = window.pageYOffset;
		const avatarTop = document.querySelector('.myphoto').offsetTop;

		topOfWindow > avatarTop ? navBar.classList.add('active') : navBar.classList.remove('active');
	});
}, 1);

class Menu extends React.Component {

	handleClick() {
		var list = document.getElementById('list');
		var menuButton = document.getElementById('menuButton');

		if (list.className === 'list swing-in-top-fwd') {
			list.className = 'list swing-out-top-bck';
			menuButton.className = 'button';
		} else {
			menuButton.className = 'button menuActive';
			list.className = 'list swing-in-top-fwd';
		}

	}
	render() {

		return (
			<nav id='navbar'>
				<ul className="menu">
					<li >
						<a href="#Sobre" >Sobre</a>
					</li>
					<li>
						<a href="#Habilidades" >Habilidades</a>
					</li>
					<li>
						<a className="icon cursive" href="#home" >Léo</a>
					</li>
					<li>
						<a href="#Projetos" >Projetos</a>
					</li>
					<li>
						<a href="#Contato" >Contato</a>
					</li>
				</ul >

				<div className="menu-hamburguer">

					<div className="button" id="menuButton" onClick={this.handleClick}>
						<span className="bar" id="bar1" ></span>
						<span className="bar" id="bar2" ></span>
						<span className="bar" id="bar3" ></span>
					</div>

					<a className="icon cursive text-center" href="#home" onClick={() => scrollTo("home", 600)} >Léo</a>
				</div>
				<ul id="list" className="list swing-out-top-bck">
					<li >
						<a href="#Sobre"  >Sobre</a>
					</li>
					<li>
						<a href="#Habilidades"  >Habilidades</a>
					</li >

					<li>
						<a href="#Projetos"  >Projetos</a>
					</li >
					<li>
						<a href="#Contato" >Contato</a>
					</li >
				</ul >
			</nav >
		);
	}
}

export default Menu;
