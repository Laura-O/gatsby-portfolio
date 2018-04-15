import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import * as constants from '../layouts/shared/style-constants';
import Tag from '../layouts/shared/tag';

const BlogPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;

  &-content {
    margin: 10px 25px;
  }

  div {
    max-width: 100%;
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

const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: ${constants.colorWhite};
  width: 100%;
  color: ${constants.textColor};
  align-items: center;
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
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <PostWrapper>
        <Helmet>
          <title>
            {frontmatter.title} • {data.site.siteMetadata.title}
          </title>
          <meta name="description" content={frontmatter.description} />
          <meta name="twitter:site" content="@lowmess" />
          <meta name="twitter:card" content="summary" />
          <meta
            property="og:site_name"
            content={data.site.siteMetadata.title}
          />
          <meta
            property="og:title"
            name="twitter:title"
            content={frontmatter.title}
          />
          <meta
            property="og:url"
            content={`${data.site.siteMetadata.siteUrl}`}
          />
          <meta
            property="og:description"
            name="twitter:description"
            content={frontmatter.description}
          />
        </Helmet>

        <BlogPost>
          <h1>{frontmatter.title}</h1>
          <h3>{frontmatter.date}</h3>
          {frontmatter.image && (
            <Img sizes={frontmatter.image.childImageSharp.sizes} />
          )}

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="tag-wrapper">
            {frontmatter.tags.map((tag, index) => {
              return (
                <Tag key={index}>
                  <Link to={`/tags/${tag}`}>{tag}</Link>
                </Tag>
              );
            })}
          </div>
        </BlogPost>
      </PostWrapper>
    </div>
  );
}

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
        path
        title
        tags
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
`;
