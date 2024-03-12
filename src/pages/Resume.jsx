import React from "react";

function Resume() {
  const proficiencies = [
    "HTML/CSS",
    "JavaScript/JQuery",
    "CSS Frameworks (Bootstrap, Tailwind)",
    "Progressive Web Applications (PWAs)",
    "Client-Side Storage Mechanisms",
    "React.js",
    "MERN Stack (with Node.js and Express.js)",
    "User Authentication",
    "Web APIs (REST, GraphQL)",
    "Data Formats (JSON)",
    "Heroku",
    "Git/GitHub",
    "Shell Scripting",
    "Unit Testing",
    "Exposure to Python",
  ];

  return (
    <div className="resume">
      <h1>Resume</h1>
      <p>
        <a
          href="https://drive.google.com/file/d/1EVIEbjz-vUB_BMU2FQt_TdlffYj9-Ccf/view?usp=sharing"
          download="Dan_Brandt_Resume.pdf"
        >
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
