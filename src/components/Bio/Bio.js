import React from 'react';
import styled from 'styled-components';

import HighlightLink from '../../layouts/shared/Link';

const BioWrapper = styled.div`
  margin: 10px;
  line-height: 1.5;
`;

const Paragraph = styled.div`
  margin: 10px;
  padding: 10px 0;
`;

const Bio = () => (
  <BioWrapper>
    <h3>About me</h3>
    <Paragraph>
      I started developing around 1996 when I maintained my very first website
      on
      <HighlightLink href="https://en.wikipedia.org/wiki/Yahoo!_GeoCities">
        Geocities
      </HighlightLink>. A few years later, I had a weblog. Believe me, it was an
      exciting time when there were less than 100 weblogs in Germany and{' '}
      <HighlightLink
        className="highlight-link"
        href="https://en.wikipedia.org/wiki/Movable_Type"
      >
        Movable Type
      </HighlightLink>{' '}
      was the state of the art.
    </Paragraph>
    <Paragraph>
      After school, I started studying computer science at the university and
      after graduating, I worked as a research assistant in computer science
      education. I wrote my Ph.D. thesis about misconceptions in computer
      science.
    </Paragraph>
    <Paragraph>
      My excitement for web technologies hasn&apos;t changed since the early
      years - I am more and more excited about the fast developing technologies
      and tools. I have experience with several JavaScript frameworks,
      especially with React. React has a simple but great API, which provides a
      lot of flexibility and there is so much awesome stuff you can do with it.
      By the way, this website was built with{' '}
      <HighlightLink
        className="highlight-link"
        href="https://www.gatsbyjs.org/"
      >
        Gatsby.js
      </HighlightLink>, which is a static site generator for React.
    </Paragraph>
  </BioWrapper>
);

export default Bio;
