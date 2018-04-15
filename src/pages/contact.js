import React from 'react';
import Link from 'gatsby-link';
import Contact from '../components/Contact/Contact';
import Credits from '../components/Credits/Credits';
import Wrapper from '../layouts/shared/pagewrapper';
import Footer from '../components/Footer/Footer';

const ContactWrapper = Wrapper.extend`
  width: 100vw;
  height: 90%;
`;

const ContactPage = () => (
  <div>
    <ContactWrapper>
      <Contact />
      <Credits />
    </ContactWrapper>
    <Footer />
  </div>
);

export default ContactPage;
