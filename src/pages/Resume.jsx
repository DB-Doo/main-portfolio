import React from 'react';

function Resume() {
  const proficiencies = [
    'HTML/CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
  ];

  return (
    <div className="resume">
      <h1>Resume</h1>
      <p>
        <a href="path-to-resume.pdf" download="Resume.pdf">
          Download My Resume
        </a>
      </p>
      <h2>Proficiencies</h2>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;