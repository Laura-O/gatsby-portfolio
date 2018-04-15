import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import * as animations from '../../layouts/shared/animations';
import * as constants from '../../layouts/shared/style-constants';

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  z-index: inherit;
  padding: 10px 15px;
  background-color: ${constants.yellow};
`;

const TechBox = styled.div`
  margin: 10px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  animation: ${animations.moveInTop} 1s ease-out;

  h3 {
    transition: all 0.5s ease;
    animation: ${animations.rotateHeading} 1.2s ease-in;

    &:hover {
      text-shadow: 0.2vmin 0.2vmin 0 lighten(${constants.redPurple}, 20);
    }
  }
`;

const TechTags = styled.ul`
  margin: 0;
  padding: 0;

  li {
    list-style-type: none;
    margin: 2px;
    z-index: 0;
    text-align: center;
  }
`;

const Tech = ({ stack }) => {
  const frontEnd = ['React', 'Redux', 'Gatsby', 'Vue.js', 'HTML5', 'SCSS'];
  const backEnd = ['Node', 'Express', 'PostgreSQL'];
  const other = ['Git', 'R'];

  return (
    <TechItem>
      <h2>Skills</h2>
      <TechBox>
        <h3>Frontend</h3>
        <TechTags>{frontEnd.map(tech => <li key={tech}>{tech}</li>)}</TechTags>
      </TechBox>
      <TechBox>
        <h3>Backend</h3>
        <TechTags>{backEnd.map(tech => <li key={tech}>{tech}</li>)}</TechTags>
      </TechBox>
      <TechBox>
        <h3>Other</h3>
        <TechTags>{other.map(tech => <li key={tech}>{tech}</li>)}</TechTags>
      </TechBox>
    </TechItem>
  );
};

export default Tech;
