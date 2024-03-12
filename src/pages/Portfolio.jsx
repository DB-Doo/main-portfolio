import React from 'react';

const projects = [
  {
    title: 'Project 1',
    imageUrl: '/path-to-image-1.jpg',
    deployedUrl: 'https://example.com/project-1',
    githubUrl: 'https://github.com/yourusername/project-1',
  },
  {
    title: 'Project 2',
    imageUrl: '/path-to-image-2.jpg',
    deployedUrl: 'https://example.com/project-2',
    githubUrl: 'https://github.com/yourusername/project-2',
  },

];

function Portfolio() {
  const Project = ({ title, imageUrl, deployedUrl, githubUrl }) => (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            deployedUrl={project.deployedUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;