import React from 'react';
import Helmet from 'react-helmet';

export default function Head() {
  return (
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
  );
}
