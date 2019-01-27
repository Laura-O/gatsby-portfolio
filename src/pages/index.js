import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Wrapper from '../layouts/shared/Pagewrapper';
import * as animations from '../layouts/shared/animations';
import * as constants from '../layouts/shared/style-constants';
import Layout from '../components/Layout/layout';
import PageLink from '../components/PageLink/PageLink';

const IndexWrapper = styled(Wrapper)`
  /* background-color: ${constants.landingBackground}; */
  position: absolute;

  background: url(bg.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: ${constants.colorBlack};
  
  
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-gap: 2rem;
    grid-template-areas: 'Left RightTop' 'Left RightBottom';
    padding: 0 2rem;
    align-items: center;
    justify-content: stretch;
    width: 100%;
    height: 100%;
  
`;

const IndexRightContent = styled.section`
  grid-area: RightBottom;
  margin: 0;
  padding: 0;
  height: 100%;
  align-items: center;
`;

const IndexPage = () => (
  <Layout>
    <IndexWrapper>
      <section>
        I&apos;m Laura, a full-stack developer based in Germany.
      </section>

      <IndexRightContent>
        <PageLink>
          <Link to="/about">About</Link>
        </PageLink>
        <PageLink>
          <Link to="/projects">Projects</Link>
        </PageLink>
        <PageLink>
          <Link to="/blog">Blog</Link>
        </PageLink>
      </IndexRightContent>
    </IndexWrapper>
  </Layout>
);

export default IndexPage;
