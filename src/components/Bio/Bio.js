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
    <h3>Hi, I am Laura!</h3>
    <Paragraph>
      <h4>Today</h4>
      I started developing websites around 1996 when I maintained my very first website
      on
      <HighlightLink href="https://en.wikipedia.org/wiki/Yahoo!_GeoCities">
        Geocities
      </HighlightLink>. My excitement for web technologies hasn&apos;t changed since the early
      years and I am a fullstack developer now.
    </Paragraph>
    <Paragraph>
      <h4>Before</h4>
      I have a degree in computer science and then worked as a research assistant in computer science
      education. I wrote my Ph.D. thesis about misconceptions in computer
      science.
    </Paragraph>
    <Paragraph>
      <h4>Other things</h4>
      I am a <HighlightLink
        className="highlight-link"
        href="https://www.worldcubeassociation.org/persons/2009OHRN01"
      >
        speedcuber
      </HighlightLink> and the <HighlightLink
        className="highlight-link"
        href="https://www.worldcubeassociation.org/"
      >
        WCA
      </HighlightLink> Senior Delegate for Western Europe. I am also an <HighlightLink
        className="highlight-link"
        href="https://en.wikipedia.org/wiki/Aquascaping"
      >
        Aquascaper
      </HighlightLink> and I enjoy playing video games.
    </Paragraph>
    <Paragraph>
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
