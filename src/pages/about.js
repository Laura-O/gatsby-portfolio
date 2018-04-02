import React from 'react';
import Link from 'gatsby-link';
import Tech from '../components/Tech';

const AboutPage = () => (
  <div className="about">
    <div className="about-upper">
      <div className="about-upper-left">
        <div>I am a full-stack developer based in Germany.</div>
        <div>
          I started developing when I was 13 and started my very first website
          on
          <a href="https://en.wikipedia.org/wiki/Yahoo!_GeoCities">
            Geocities
          </a>.
        </div>
        <div>
          My excitement for web technologies hasn't changed since then.
          Meanwhile, I have a degree in computer science and also a Ph.D. in
          computer science education.
        </div>
        <div>
          I have experience with several JavaScript frameworks, but I mainly
          focus on React today. React has a simple but awesome API, which
          provides a lot of flexibility. This website was built with{' '}
          <a href="https://www.gatsbyjs.org/">Gatsby.js</a>, which is a static
          site generator for React.
        </div>
      </div>
      <div className="about-upper-right">
        <Tech />
      </div>
    </div>
    <div className="about-lower">bla</div>
  </div>
);

export default AboutPage;
