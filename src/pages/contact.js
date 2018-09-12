import React from 'react';
import Contact from '../components/Contact/Contact';
import Credits from '../components/Credits/Credits';
import Wrapper from '../layouts/shared/Pagewrapper';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/layout';

const ContactWrapper = Wrapper.extend`
  height: 80vh;
  width: 100%;
`;

const ContactPage = () => (
  <Layout>
    <ContactWrapper>
      <Contact />
      <Credits />
    </ContactWrapper>
    <Footer />
  </Layout>
);

export default ContactPage;
