import React from 'react';
import Link from 'gatsby-link';
import Tech from '../components/Tech';
import Bio from '../components/Bio';
import Footer from '../components/Footer';

const AboutPage = () => (
  <div className="about">
    <div className="about-upper">
      <div className="about-upper-left">
        <Bio />
      </div>
      <div className="about-upper-right">bla</div>
    </div>
    <div className="about-lower">
      <Tech />
    </div>
    <Footer />
  </div>
);

export default AboutPage;
