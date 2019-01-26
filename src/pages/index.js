import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Wrapper from '../layouts/shared/Pagewrapper';
import * as animations from '../layouts/shared/animations';
import * as constants from '../layouts/shared/style-constants';
import Layout from '../components/Layout/layout';

const IndexWrapper = styled(Wrapper)`
  background-color: ${constants.darkBackground};
  color: ${constants.colorWhite};
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'Left' 'Right';

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 2rem;
    grid-template-areas: 'Left Right';
    padding: 0 2rem;
    align-items: center;
  }
`;

const IndexRight = styled.section`
  grid-area: Right;
  margin: 0;
  padding: 0;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto);
  grid-gap: 0;
  grid-template-areas: 'IndexRightTop' 'IndexRightBottom';
`;

const IndexRightContent = styled.section`
  grid-area: IndexRightBottom;
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(1, 1fr);
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

const PageLink = styled.div`
  padding: 2rem;
`;

const IndexPage = () => (
  <Layout>
    <IndexWrapper>
      <section>
        I&apos;m Laura, a full-stack developer based in Germany.
      </section>

      <IndexRight>
        <IndexRightContent>
          <PageLink>
            <Link to="/about">
              <PulseButton>About</PulseButton>
            </Link>
          </PageLink>
          <PageLink>
            <Link to="/projects">
              <PulseButton>Projects</PulseButton>
            </Link>
          </PageLink>
          <PageLink>
            <Link to="/blog">
              <PulseButton>Blog</PulseButton>
            </Link>
          </PageLink>
        </IndexRightContent>
      </IndexRight>
    </IndexWrapper>
  </Layout>
);

export default IndexPage;
