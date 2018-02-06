var React = require('react');
var PropTypes = require('prop-types');

class Icon extends React.Component {
	render() {
		return (
			<i className={"fa fa-" + this.props.icon} style={{ color: this.props.color }} aria-hidden="true"></i>
		);
	}
}

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
	color: PropTypes.string
};

module.exports = Icon;
