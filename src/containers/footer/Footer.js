import React from 'react';
import SocialIcons from './../../components/SocialIcons';

const Footer = () => {
	return (
		<div id="Contato">
			<div className="container">
				<h1 className="cursive text-center">Contato</h1>
				<h3 className="text-center">Caso tenha interrese em trabalhar comigo, aqui estão as formas de entrar em contato:</h3>
				<Form />
				<Infos />
			</div>
			<footer>
				<span className="cursive">Leonardo Cardoso</span>
			</footer>
		</div>
	);
};

export default Footer;

function handleSubmit() {
	localStorage.setItem('email', 'true');
}

var email = localStorage.getItem('email');

if (email === 'true') {
	alert('E-mail enviado com sucesso');
	localStorage.setItem('email', 'false');
}



function Infos() {
	return (
		<div className="infos">
			<h4 className="text-center">Redes Sociais:</h4>
			<SocialIcons />
		</div>
	);
}


function Form() {
	return (
		<form onSubmit={handleSubmit}
			action="https://send-mail-leocardoso.herokuapp.com/"
			//	action="http://localhost:8080/email"
			method='post' >
			<h4>Me envie uma mensagem!</h4>
			<div className="half left">
				<input type="text" required placeholder="Seu nome" id="input-name" name="name" />
				<input type="text" required placeholder="Assunto" id="input-subject" name="subject" />
				<input type="email" required placeholder="Seu e-mail" id="input-email" name="email" />
			</div>
			<div className="half right">
				<textarea type="text" required placeholder="Sua mensagem" id="input-message" name="message" />
			</div>
			<button className="btn" type="submit">Enviar</button>
		</form >
	);
}


module.exports = Footer;
