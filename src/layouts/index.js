import React from 'react';
import styled from 'styled-components';
import 'prismjs/themes/prism-funky.css';
import Raven from 'raven-js';
import Header from '../components/Header/Header';
import Head from '../components/Head/Head';
import * as constants from '../layouts/shared/style-constants';

import './index.scss';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5.8rem 0px 0px 0px;
  min-height: 100vh;
  background-color: ${constants.darkBackground};
  color: ${constants.colorWhite};
`;

if (process.env.NODE_ENV === 'production') {
  Raven.config('https://e0a8e3ead7644ddb9997c402a48f1608@sentry.io/1192908', {
    environment: 'production',
  }).install();
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Head />
    <Header />
    <PageWrapper>{children()}</PageWrapper>
  </div>
);

export default TemplateWrapper;
