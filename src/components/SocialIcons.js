var React = require('react');
var Icon = require('./Icon');
var social = require('./social.json');

social.sort(function () {
	return 0.8 - Math.random();
});

class SocialIcons extends React.Component {
	render() {
		return (
			<div className="icons text-center center-block">
				{social.map(function (elem) {
					return (
						<a href={elem.link} target="_blank" key={elem.icon}>
							<Icon icon={elem.icon} color={elem.color} />
						</a>
					);
				})}
			</div>
		);
	}
}

module.exports = SocialIcons;
