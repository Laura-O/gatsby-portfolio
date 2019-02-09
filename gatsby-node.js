const path = require('path');
const _ = require('lodash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const tagTemplate = path.resolve('src/templates/tags.js');

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fileAbsolutePath: { regex: "/Blog/" } }
          limit: 1000
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              html
              id
              timeToRead
              frontmatter {
                date
                updated
                path
                title
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return reject(result.errors);
      }

      const posts = result.data.allMarkdownRemark.edges;

      posts.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: path.resolve(`src/templates/blog-post.js`),
        });
      });

      // Tag pages:
      let tags = [];
      // Iterate through each post, putting all found tags into `tags`
      _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.tags')) {
          tags = tags.concat(edge.node.frontmatter.tags);
        }
      });
      // Eliminate duplicate tags
      tags = _.uniq(tags);

      // Make tag pages
      tags.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag,
          },
        });
      });

      resolve();
    });
  });

  const loadGalleries = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulExtendedGallery {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulExtendedGallery.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/gallery.js`),
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });

  return Promise.all([loadPosts, loadGalleries]);
};
