import React from 'react';
import Link from 'gatsby-link';
import Contact from '../components/Contact/Contact';
import Credits from '../components/Credits/Credits';
import Wrapper from '../layouts/shared/pagewrapper';

const ContactPage = () => (
  <div>
    <Wrapper>
      <Contact />
      <Credits />
    </Wrapper>
  </div>
);

export default ContactPage;
