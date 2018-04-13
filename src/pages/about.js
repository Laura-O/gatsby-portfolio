import React from 'react';
import Link from 'gatsby-link';
import Tech from '../components/Tech/Tech';
import Bio from '../components/Bio/Bio';
import Footer from '../components/Footer/Footer';

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
    <div className="about-lower">
      If you want to get in touch with me, please use the{' '}
      <Link to="/contact">Contact form</Link>.
    </div>
    <Footer />
  </div>
);

export default AboutPage;
