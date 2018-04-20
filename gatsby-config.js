module.exports = {
  siteMetadata: {
    title: 'Laura Ohrndorf | Portfolio and Website',
    description: 'My personal portfolio and blog',
    siteUrl: 'https://www.laura.fyi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Laura Ohrndorf | Full-stack developer',
        short_name: 'Laura Ohrndorf',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#dc0073',
        display: 'minimal-ui',
        icon: 'src/assets/icons/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '/projects',
        path: `${__dirname}/src/assets/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-emoji`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: '±',
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://e0a8e3ead7644ddb9997c402a48f1608@sentry.io/1192908',
        version: '3.24.2',
      },
    },
  ],
};
