import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Wrapper from '../layouts/shared/Pagewrapper';
import * as animations from '../layouts/shared/animations';
import * as constants from '../layouts/shared/style-constants';
import Layout from '../components/Layout/layout';
import PageLink from '../components/PageLink/PageLink'

const IndexWrapper = styled(Wrapper)`
  background-color: ${constants.landingBackground};
  color: ${constants.colorBlack};
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'Left' 'Right';

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    grid-gap: 2rem;
    grid-template-areas:
      'Left RightTop'
      'Left RightBottom';
    padding: 0 2rem;
    align-items: center;
  }
`;

const IndexRightContent = styled.section`
  grid-area: RightTop;
  margin: 0;
  padding: 0;
  
  align-items: center;
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
      <section>
        I&apos;m Laura, a full-stack developer based in Germany.
      </section>


      <IndexRightContent>
        <PageLink>
          <Link to="/about">
            About
            </Link>
        </PageLink>
        <PageLink>
          <Link to="/projects">
            Projects
            </Link>
        </PageLink>
        <PageLink>
          <Link to="/blog">
            Blog
          </Link>
        </PageLink>
      </IndexRightContent>

    </IndexWrapper>
  </Layout>
);

export default IndexPage;
