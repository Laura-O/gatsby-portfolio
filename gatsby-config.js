module.exports = {
  siteMetadata: {
    title: 'Laura Ohrndorf | Portfolio and Website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
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
        plugins: [`gatsby-remark-emoji`, `gatsby-remark-prismjs`],
      },
    },
  ],
};
