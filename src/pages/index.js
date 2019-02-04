import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Wrapper from '../layouts/shared/Pagewrapper';
import * as constants from '../layouts/shared/style-constants';
import Layout from '../components/Layout/layout';
import PageLink from '../components/PageLink/PageLink';

const IndexWrapper = styled(Wrapper)`
  color: ${constants.colorBlack};
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  background: transparent;
  overflow: hidden;

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    grid-gap: 1rem;
    grid-template-areas:
      'Left RightTop'
      'Left RightBottom';
    padding: 0 3rem;

    justify-items: center;
  }

  h3 {
    color: white;
    font-size: 2rem;
  }
`;

const IndexRightContent = styled.section`
  margin: 2rem;
  padding: 0;
  align-items: center;

  @media screen and (min-width: 600px) {
    grid-area: RightTop;
  }
`;

const IndexPage = () => (
  <Layout>
    <div className="stars-small" />
    <div className="stars-middle" />
    <div className="stars-large" />

    <IndexWrapper>
      <section>
        <h3>Hi, I&apos;m Laura, a full-stack developer based in Germany.</h3>
      </section>

      <IndexRightContent>
        <PageLink>
          <Link to="/about">
            <h1>About</h1>
          </Link>
        </PageLink>
        <PageLink>
          <Link to="/projects">
            <h1>Projects</h1>
          </Link>
        </PageLink>
        <PageLink>
          <Link to="/blog">
            <h1>Blog</h1>
          </Link>
        </PageLink>
      </IndexRightContent>
    </IndexWrapper>
  </Layout>
);

export default IndexPage;
