import React from 'react';
import Portrait from '../assets/me.jpg';
import '../css/aboutMe.css';

function AboutMe() {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <img src={Portrait} alt="Dan Brandt" className="about-me-photo" />
      <p>
        Hi, I'm Dan, a web developer with a passion for building beautiful and functional web applications. 
        I have a background in Graphic Design and Sales and have worked on various projects including website redesigns, e-commerce platforms, and promotional material creation. 
        I'm constantly learning new technologies and best practices to improve my skills and create better experiences for users.
      </p>
    </div>
  );
}

export default AboutMe;