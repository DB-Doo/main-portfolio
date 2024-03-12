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
        <a href="path-to-your-resume.pdf" download="YourName_Resume.pdf">
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