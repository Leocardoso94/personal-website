import React from 'react';
import SocialIcons from "./../../components/SocialIcons";
import Icon from './../../components/Icon';
import './Home.scss';
class Home extends React.Component {
	render() {
		return (
			<div id="home">
				<div className="container">
					<img className="center-block myphoto" alt="Leonardo Cardoso" src="https://avatars0.githubusercontent.com/u/12713314?v=4&u=7964a9e94cac2f5b35869a8cc263273cb9e1be30&s=400" />
					<h1 className="text-center cursive">Leonardo Cardoso</h1>
					<h3 className="text-center">Desenvolvedor <Icon icon="code" /> <Icon icon="heart" color="red" /></h3>
					<SocialIcons />
				</div>
			</div>
		);
	}
}

export default Home;
