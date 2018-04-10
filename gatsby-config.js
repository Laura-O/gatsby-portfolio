module.exports = {
  siteMetadata: {
    title: 'Laura Ohrndorf | Portfolio and Website',
    description: 'My personal portfolio and blog',
    siteUrl: 'https://www.laura.fyi',
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
        plugins: [
          `gatsby-remark-emoji`,
          `gatsby-remark-prismjs`,
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
  ],
};
