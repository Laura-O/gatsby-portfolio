import React from 'react';
import Link from 'gatsby-link';

import Project from '../components/Project';
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
  </div>
);

export default ProjectsPage;
