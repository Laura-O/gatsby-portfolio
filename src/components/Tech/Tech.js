import React from 'react';
import styled from 'styled-components';

import * as animations from '../../layouts/shared/animations';
import * as constants from '../../layouts/shared/style-constants';

const TechWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  h2 {
    font-size: 1.4em;
    margin-bottom: 0;
  }
 
`;

const TechSubWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
 
`;

const TechBox = styled.div`
  margin: 5px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  animation: ${animations.moveInTop} 1s ease-out;

  h3 {
    font-size: .8em;
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
    margin: 1px;
   
    text-align: center;
  }
`;

const Tech = () => {
  const languages = ['JavaScript', 'Elm', 'R', 'HTML5', 'SCSS'];
  const libs = ['React/Redux, Gatsby, Vue', 'd3', 'Express'];
  const other = ['Git', 'R', 'SQL'];

  return (
    <TechWrapper>
      <h2>My Techstack</h2>
      <TechSubWrapper>
        <TechBox>
          <h3>Languages</h3>
          <TechTags>{languages.map(tech => <li key={tech}>{tech}</li>)}</TechTags>
        </TechBox>
        <TechBox>
          <h3>Frameworks and Libraries</h3>
          <TechTags>{libs.map(tech => <li key={tech}>{tech}</li>)}</TechTags>
        </TechBox>
        <TechBox>
          <h3>Other</h3>
          <TechTags>{other.map(tech => <li key={tech}>{tech}</li>)}</TechTags>
        </TechBox>
      </TechSubWrapper>
    </TechWrapper>
  );
};

export default Tech;
