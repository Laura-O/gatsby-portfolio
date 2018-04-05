import React from 'react';
import Link from 'gatsby-link';
import Tech from '../components/Tech';
import Bio from '../components/Bio';

const AboutPage = () => (
  <div className="about">
    <div className="about-upper">
      <div className="about-upper-left">
        <Bio />
      </div>
      <div className="about-upper-right">
        <Tech />
      </div>
    </div>
    <div className="about-lower">bla</div>
  </div>
);

export default AboutPage;
