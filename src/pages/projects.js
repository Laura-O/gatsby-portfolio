import React from 'react';
import Link from 'gatsby-link';
import Footer from '../components/Footer/Footer';
import Project from '../components/Project/Project';
import projects from '../assets/projects.json';

const ProjectsPage = () => (
  <div className="projects">
    <h1>Projects</h1>
    {projects.map(project => (
      <div key={project.id}>
        <Project project={project} key={project.id} />
        <div className="divider divider-transparent" />
      </div>
    ))}
    <Footer />
  </div>
);

export default ProjectsPage;
