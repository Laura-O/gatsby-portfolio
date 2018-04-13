import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import 'prismjs/themes/prism-funky.css';

import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div className="outer-container">
    <Helmet
      title="Laura Ohrndorf - Portfolio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className="page">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
