import React from 'react';
import Link from 'gatsby-link';
import Contact from '../components/Contact/Contact';
import Credits from '../components/Credits/Credits';
import Wrapper from '../layouts/shared/pagewrapper';

const ContactWrapper = Wrapper.extend`
  width: 100vw;
  height: 100%;
`;

const ContactPage = () => (
  <div>
    <ContactWrapper>
      <Contact />
      <Credits />
    </ContactWrapper>
  </div>
);

export default ContactPage;
