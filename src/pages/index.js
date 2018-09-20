import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import StartAnimation from '../components/StartAnimation/StartAnimation';
import Fireworks from '../components/Fireworks/Fireworks';
import Wrapper from '../layouts/shared/Pagewrapper';
import * as animations from '../layouts/shared/animations';
import * as constants from '../layouts/shared/style-constants';
import Layout from '../components/Layout/layout';

const IndexWrapper = styled(Wrapper)`
  background-color: ${constants.darkBackground};
  color: ${constants.colorWhite};
  width: 100%;
`;

const StartButtons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 6rem 15px 15px 15px;
`;

const PulseButton = styled.button`
  color: ${constants.linkColor};

  &:hover,
  &:focus {
    animation: ${animations.pulse} ease-out 1s;
    box-shadow: 0 0 0 1em rgba(255, 255, 255, 0);
    border: 2px solid ${constants.redPurple};
    color: ${constants.redPurple};
    cursor: pointer;
  }
`;

const IndexPage = () => (
  <Layout>
    <IndexWrapper>
      <StartAnimation />
      <div className="about-me">
        I&apos;m Laura, a full-stack developer based in Germany.
      </div>
      <Fireworks />
      <StartButtons>
        <div className="start-button">
          <Link to="/about">
            <PulseButton>About</PulseButton>
          </Link>
        </div>
        <div className="start-button">
          <Link to="/projects">
            <PulseButton>Projects</PulseButton>
          </Link>
        </div>
        <div className="start-button">
          <Link to="/blog">
            <PulseButton>Blog</PulseButton>
          </Link>
        </div>
      </StartButtons>
    </IndexWrapper>
  </Layout>
);

export default IndexPage;
