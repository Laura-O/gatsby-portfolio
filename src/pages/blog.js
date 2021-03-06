import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Wrapper from '../layouts/shared/Pagewrapper';
import Seo from '../components/Seo/Seo';
import Layout from '../components/Layout/layout';

const BlogWrapper = styled(Wrapper)`
  padding-top: 2em;
`;

const Preview = styled.div`
  width: 80%;
  max-width: 1280px;
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
  padding: 1em 2em;
`;

function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <BlogWrapper>
        <Seo isPost={false} data={data.siteMetadata} />
        <Helmet>
          <title>{data.site.siteMetadata.title} • Blog</title>
        </Helmet>

        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => (
            <Preview key={post.id}>
              <Title>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </Title>

              {post.frontmatter.image && (
                <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
              )}
              <Infos>
                <small>{post.frontmatter.date}</small>
                <small>{post.frontmatter.timeToRead} mins</small>
              </Infos>

              <Excerpt>{post.frontmatter.excerpt}</Excerpt>
            </Preview>
          ))}
      </BlogWrapper>
    </Layout>
  );
}

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

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
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;
