import React from 'react';
import './about.css';

const getAge = () => {
  const birthday = new Date('10/20/1994');
  const today = new Date();
  const years = today.getFullYear() - birthday.getFullYear();

  // Reset birthday to the current year.
  birthday.setFullYear(today.getFullYear());

  return today < birthday ? years - 1 : years;
};

const About = () => (
  <div id="About">
    <div className="container">
      <h1 className="text-center cursive"> About me </h1>
      <p className="center-block section-description">
        My name is Leonardo Cardoso, I'm {getAge()} year old and I live in São Paulo. I'm in love
        with sports, new technologies and open source. I like working with the most diverse
        programming languages, I am moved to challenges.
      </p>
      <p className="center-block section-description">
        Nowadays, I work as a software engineer developing web solutions. I graduated in the first
        semester of 2018 in Systems Analysis and Development.
      </p>
    </div>
  </div>
);

export default About;
