import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../scss/blog.scss';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      <Helmet>
        <title>{data.site.siteMetadata.title} • Blog</title>
      </Helmet>

      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h3 className="blog-title">
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h3>
              <small className="blog-date">{post.frontmatter.date}</small>
              <div className="blog-excerpt">{post.frontmatter.excerpt}</div>
              <div className="blog-time">
                {post.frontmatter.timeToRead} mins
              </div>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
            timeToRead
            path
          }
        }
      }
    }
  }
`;
