import React, { Fragment } from 'react';
import styled from 'styled-components';

import Tag from '../../layouts/shared/tag';
import * as animations from '../../layouts/shared/animations';
import * as constants from '../../layouts/shared/style-constants';

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1.5rem;
  align-items: center;
  justify-content: center;
  color: ${constants.textColor};
`;

const Left = styled.div`
  flex: 0 1 50%;
  justify-content: center;
  align-self: center;
  animation: ${animations.moveInLeft} 1s ease-out;
`;

const Right = styled.div`
  flex: 0 1 50%;
  flex-wrap: wrap;
  align-items: flex-start;
  animation: ${animations.moveInRight} 1s ease-out;
`;

const Project = ({ project }) => {
  const listItems = project.techs.map(tech => <Tag key={tech}>{tech}</Tag>);
  return (
    <Fragment>
      <ProjectWrapper>
        <Left>
          <img src={project.thumbnail} alt={project.name} />
        </Left>
        <Right>
          <h3>{project.name}</h3>
          <div>{project.description}</div>
          <ul>{listItems}</ul>
        </Right>
      </ProjectWrapper>
    </Fragment>
  );
};

export default Project;
