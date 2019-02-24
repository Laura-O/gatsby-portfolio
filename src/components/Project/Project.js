import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tag from '../../layouts/shared/tag';
import * as animations from '../../layouts/shared/animations';
import * as constants from '../../layouts/shared/style-constants';

const Techtag = styled(Tag)`
  padding: 4px 10px;
  margin: 5px;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem;
  color: ${constants.textColor};
  width: 90%;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  animation: ${animations.moveInLeft} 1s ease-out;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  flex: 2;
  /* flex-wrap: wrap; */
  animation: ${animations.moveInRight} 1s ease-out;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .list {
    margin-top: auto;
  }
`;

const Project = ({ project }) => {
  const listItems = project.techs.map(tech => (
    <Techtag key={tech}>{tech}</Techtag>
  ));
  return (

    <ProjectWrapper>
      <Left>
        <img src={project.thumbnail} alt={project.name} />
      </Left>
      <Right>
        <div><h3>
          <a href={project.url}>{project.name}</a>
        </h3></div>
        <div>{project.description}</div>
        <div className="list"><ul>{listItems}</ul></div>
      </Right>
    </ProjectWrapper>

  );
};

export default Project;

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};
