import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header/Header';
import Head from '../components/Head/Head';
import Footer from '../components/Footer/Footer';
import 'prismjs/themes/prism-funky.css';
import * as constants from '../layouts/shared/style-constants';
import styled from 'styled-components';

import './index.scss';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5.8rem 0px 0px 0px;
  min-height: 100vh;
  background-color: ${constants.darkBackground};
  color: ${constants.colorWhite};
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Head />
    <Header />
    <PageWrapper>{children()}</PageWrapper>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
