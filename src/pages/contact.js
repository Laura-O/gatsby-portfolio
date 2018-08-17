import React from 'react';
import Contact from '../components/Contact/Contact';
import Credits from '../components/Credits/Credits';
import Wrapper from '../layouts/shared/Pagewrapper';
import Footer from '../components/Footer/Footer';
import PageWrapper from '../components/layout';

const ContactWrapper = Wrapper.extend`
  width: 100vw;
  height: 90%;
`;

const ContactPage = () => (
  <PageWrapper>
    <ContactWrapper>
      <Contact />
      <Credits />
    </ContactWrapper>
    <Footer />
  </PageWrapper>
);

export default ContactPage;
