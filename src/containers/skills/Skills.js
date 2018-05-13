import React from 'react';
import skills from './skills.json';
import './skills.css';

skills.sort(() => 0.5 - Math.random());


const Skills = () => (
  <div id="Habilidades">
    <div className="container">
      <h1 className="text-center cursive">Habilidades</h1>
      <h4 className="text-center">Um pouco dos meu conhecimentos em programação: </h4>
      <div id="skills-container" className="skills-container center-block">
        {skills.map(item => (
          <SkillPreviewer
            key={item.name}
            name={item.name}
            classIcon={item.classIcon}
            value={item.value}
            bgColor={item.bgColor}
            fontColor={item.fontColor}
          />
	))}
      </div>
    </div>
  </div>
);


const SkillPreviewer = props => (
  <div className="skill">
    <p
      className="skill-bar"
      data-width={props.value}
      style={{ backgroundColor: props.bgColor, color: props.fontColor, width: `${props.value}%` }}
    >
      <i className={props.classIcon} />
      <span>{props.name}</span>
    </p>
  </div >
);


module.exports = Skills;
