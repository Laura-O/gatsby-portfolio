import React from 'react';
import styled from 'styled-components';
import 'prismjs/themes/prism-funky.css';
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

const TemplateWrapper = ({ children }) => (
  <div>
    <Head />
    <Header />
    <PageWrapper>{children()}</PageWrapper>
  </div>
);

export default TemplateWrapper;
