import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as constants from '../layouts/shared/style-constants';
import Tag from '../layouts/shared/tag';
import Wrapper from '../layouts/shared/Pagewrapper';
import Seo from '../components/Seo/Seo';
import Layout from '../components/Layout/layout';

const BlogPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  max-width: 740px;
  background-color: ${constants.colorWhite};

  h1 {
    margin-top: 1em;
  }

  a {
    text-decoration: none;
    color: ${constants.textColor};
    display: inline-block;
    padding: 0px 3px;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    text-decoration: none;
    box-shadow: inset 0 -4px 0 ${constants.linkColor};

    &:hover {
      box-shadow: inset 0 -55px 0 0 ${constants.linkColor};
      color: white;
    }
  }
`;

const BlogPostContent = styled.div`
  .gatsby-resp-image-wrapper {
    margin-top: 2em;
  }
`;

const PostWrapper = styled(Wrapper)`
  ul {
    margin-left: 1.5em;
    margin-top: 1em;
    list-style-position: outside;
    list-style-type: circle;
  }

  li {
    margin-bottom: 0.5em;
  }

  p {
    margin-top: 1.5em;
    margin-bottom: 1em;
  }

  h2 {
    margin-top: 1em;
  }
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <PostWrapper>
        <Seo data={frontmatter} isPost />
        <Helmet>
          <title>
            {frontmatter.title} • {data.site.siteMetadata.title}
          </title>
          <meta name="description" content={frontmatter.description} />

          <meta name="twitter:site" content="@laura-fyi" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@laura-fyi" />
          <meta name="twitter:title" content={frontmatter.title} />
          <meta name="twitter:description" content={frontmatter.description} />
          <meta name="twitter:image" content={frontmatter.image} />
          <meta name="twitter:image:alt" content="Cover image" />
        </Helmet>

        <BlogPost>
          <h1>{frontmatter.title}</h1>
          <h3>{frontmatter.date}</h3>
          {frontmatter.updated &&
            frontmatter.updated !== frontmatter.date && (
              <h4>Updated: {frontmatter.updated}</h4>
            )}
          {frontmatter.image && (
            <Img fluid={frontmatter.image.childImageSharp.fluid} />
          )}

          <BlogPostContent dangerouslySetInnerHTML={{ __html: html }} />

          <div className="tag-wrapper">
            {frontmatter.tags.map(tag => (
              <Tag key={tag}>
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </Tag>
            ))}
          </div>
        </BlogPost>
      </PostWrapper>
    </Layout>
  );
}

Template.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }),
  }),
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
