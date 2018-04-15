import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import '../layouts/index';

import * as constants from '../layouts/shared/style-constants';

const BlogWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: white;
  width: 100%;
  color: ${constants.textColor};
  align-items: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${constants.colorWhite};
  color: ${constants.colorBlack};
`;

const Preview = styled.div`
  width: 80%;
  border-bottom: 1px solid rgb(238, 238, 238);
  padding: 0.5em 1em;
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  :hover {
    color: $redPurple;
  }
`;

const Excerpt = styled.div`
  margin: 1em 0;
`;

const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 0 1em;
`;

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Fragment>
      <BlogWrapper>
        <Helmet>
          <title>{data.site.siteMetadata.title} • Blog</title>
        </Helmet>

        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <Preview key={post.id}>
                <Title>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </Title>

                {post.frontmatter.image && (
                  <Img sizes={post.frontmatter.image.childImageSharp.sizes} />
                )}
                <Infos>
                  <small>{post.frontmatter.date}</small>
                  <small>{post.frontmatter.timeToRead} mins</small>
                </Infos>

                <Excerpt>{post.frontmatter.excerpt}</Excerpt>
              </Preview>
            );
          })}
      </BlogWrapper>
    </Fragment>
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
            image {
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
