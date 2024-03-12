import React from 'react';
import Project from '../components/project';


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