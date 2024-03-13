import React from 'react';
import '../css/portfolio.css';

import ticketImage from '../assets/ticket.png';
import cocktailGeneratorImage from '../assets/cocktail.png';
import textEditorImage from '../assets/text.png';
import homeworkTrackerImage from '../assets/homework.png';
import simpleCalendarImage from '../assets/calandar.png';
import fiveDayWeatherImage from '../assets/weather.png';

const projects = [
  {
    id: 'project1', 
    title: 'Ticket Wizard',
    imageUrl: ticketImage,
    deployedUrl: 'https://ticket-wizard-pete-b1e8f95fed38.herokuapp.com/',
    githubUrl: 'https://github.com/petemaynard/ticket_wizard',
  },
  {
    id: 'project2', 
    title: 'Cocktail Generator',
    imageUrl: cocktailGeneratorImage,
    deployedUrl: 'https://ag-bootcamp-umn.github.io/group-project-one/',
    githubUrl: 'https://github.com/ag-bootcamp-umn/group-project-one',
  },
  {
    id: 'project3', 
    title: 'PWA Text Editor',
    imageUrl: textEditorImage,
    deployedUrl: 'https://swa-dan-text-editor-9ae68d39fd46.herokuapp.com/',
    githubUrl: 'https://github.com/DB-Doo/PWA-text-editor?tab=readme-ov-file#deployment',
  },
  {
    id: 'project4', 
    title: 'Homework Tracker',
    imageUrl: homeworkTrackerImage,
    deployedUrl: 'https://db-doo.github.io/homework-tracker/',
    githubUrl: 'https://github.com/DB-Doo/homework-tracker?tab=readme-ov-file',
  },
  {
    id: 'project5', 
    title: 'Simple Calendar',
    imageUrl: simpleCalendarImage,
    deployedUrl: 'https://example.com/project-2',
    githubUrl: 'https://github.com/DB-Doo/simple-calendar',
  },
  {
    id: 'project6', 
    title: 'Five Day Weather',
    imageUrl: fiveDayWeatherImage,
    deployedUrl: 'https://db-doo.github.io/five-day-weather/',
    githubUrl: 'https://github.com/DB-Doo/five-day-weather',
  }



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
        {projects.map((project) => (
          <Project
            key={project.id}
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