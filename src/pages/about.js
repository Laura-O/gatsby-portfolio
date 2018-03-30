import React from 'react';
import Link from 'gatsby-link';

const AboutPage = () => (
  <div className="container">
    <h1>Hi people</h1>
    <Link className="highlight-link" to="/page-2/">
      Go to page 2
    </Link>
  </div>
);

export default AboutPage;
