import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import siteConfig from '../../layouts/shared/siteConfig';

const Seo = ({ isPost, data }) => {
  let description;
  let title;
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: siteConfig.url,
      name: siteConfig.description,
    },
  ];

  if (isPost) {
    ({ title, description } = data);
  } else {
    title = siteConfig.siteTitle;
    description = 'portfolio';
  }

  return (
    <Helmet>
      <title>{title} • Blog</title>
      <meta name="description" content={description} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      <meta property="og:site_name" content={title} />
      {isPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" name="twitter:title" content={title} />
      <meta property="og:url" content={siteConfig.siteUrl} />
      <meta
        property="og:description"
        name="twitter:description"
        content={description}
      />
    </Helmet>
  );
};

export default Seo;

Seo.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
  }),
  isPost: PropTypes.bool.isRequired,
};
