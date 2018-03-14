import React from 'react'
import Link from 'gatsby-link'

import Project from '../components/Project'
import projects from '../assets/projects.json'

const ProjectsPage = () => (
  <div>
    <h1>Projects</h1>
    {projects.map(project => <Project project={project} key={project.name} />)}
  </div>
)

export default ProjectsPage
