import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import 'prismjs/themes/prism-solarizedlight.css';
import Raven from 'raven-js';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import * as constants from '../../layouts/shared/style-constants';

import './index.scss';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${constants.darkBackground};
  color: ${constants.colorWhite};
`;

const Content = styled.div`
  flex: 1;
  position: relative;

  justify-content: center;
  align-items: center;
`;

if (process.env.NODE_ENV === 'production') {
  Raven.config('https://e0a8e3ead7644ddb9997c402a48f1608@sentry.io/1192908', {
    environment: 'production',
  }).install();
}

const TemplateWrapper = ({ children }) => (
  <div className="siteRoot">
    <Helmet
      title="Laura Ohrndorf - Portfolio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'portfolio, something' },
      ]}
    >
      <meta name="twitter:site" content="@laura-fyi" />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="Laura Ohrndorf" />
      <html lang="en" />
    </Helmet>
    <PageWrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </PageWrapper>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node,
};

export default TemplateWrapper;
