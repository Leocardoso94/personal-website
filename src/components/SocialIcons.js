const React = require('react');
const Icon = require('./Icon');
const social = require('./social.json');

social.sort(() => 0.8 - Math.random());

const SocialIcons = () => (
  <div className="icons text-center center-block" > {
    social.map(elem => (
      <a
        href={elem.link}
        target="_blank"
        key={elem.icon}
      >
        <Icon
          icon={elem.icon}
          color={elem.color}
        />
      </a >
    ))
  }
  </div>
);

module.exports = SocialIcons;
