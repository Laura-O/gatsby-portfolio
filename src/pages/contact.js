import React from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact/Contact';
import Credits from '../components/Credits/Credits';
import Wrapper from '../layouts/shared/Pagewrapper';
import Layout from '../components/Layout/layout';

const ContactWrapper = styled(Wrapper)`
  height: 80vh;
  width: 100%;
`;

const ContactPage = () => (
  <Layout>
    <ContactWrapper>
      <Contact />
      <Credits />
    </ContactWrapper>
  </Layout>
);

export default ContactPage;
