import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Wrapper from '../layouts/shared/Pagewrapper';
import * as animations from '../layouts/shared/animations';
import * as constants from '../layouts/shared/style-constants';
import Layout from '../components/Layout/layout';
import PageLink from '../components/PageLink/PageLink'

const IndexWrapper = styled(Wrapper)`
  color: ${constants.colorBlack};
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  overflow: hidden;

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

  h3 {
    color: white;
    font-size: 2.5rem;
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
    <div class='stars-small'></div>
    <div class='stars-middle'></div>
    <div class='stars-large'></div>

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
