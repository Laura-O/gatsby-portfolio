import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/layout';
import Project from '../components/Project/Project';
import projects from '../assets/projects.json';

const ProjectPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: white;
  width: 100%;
  color: black;
  align-items: center;
  padding-top: 3em;
`;

const ProjectWrapper = styled.div`
  width: 80%;
`;

const Divider = styled.div`
  position: relative;
  margin: 2rem;
  height: 0.1rem;

  &:before {
    content: '';
    position: absolute;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 2px;
    box-shadow: -1px 0 0 0 #2ec4b6;
    background-image: linear-gradient(
      to right,
      transparent,
      #2ec4b6,
      transparent
    );
  }
`;

const ProjectsPage = () => (
  <Layout>
    <ProjectPage>
      <h1>Projects</h1>
      {projects.map(project => (
        <ProjectWrapper key={project.id}>
          <Project project={project} key={project.id} />
          <Divider />
        </ProjectWrapper>
      ))}
    </ProjectPage>
  </Layout>
);

export default ProjectsPage;
