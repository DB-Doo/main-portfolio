import React from 'react';

function Project({ title, imageUrl, deployedUrl, githubUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
}

export default Project;
