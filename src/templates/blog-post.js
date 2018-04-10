import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return (
    <div className="blog-post-wrapper">
      <Helmet>
        <title>
          {frontmatter.title} • {data.site.siteMetadata.title}
        </title>
        <meta name="description" content={frontmatter.description} />
        <meta name="twitter:site" content="@lowmess" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:site_name" content={data.site.siteMetadata.title} />
        <meta
          property="og:title"
          name="twitter:title"
          content={frontmatter.title}
        />
        <meta property="og:url" content={`${data.site.siteMetadata.siteUrl}`} />
        <meta
          property="og:description"
          name="twitter:description"
          content={frontmatter.description}
        />
      </Helmet>
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.date}</h3>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div>
          {frontmatter.tags.map((tag, index) => {
            return (
              <div key={index} className="tags">
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </div>
            );
          })}
        </div>
      </div>
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
      excerpt
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`;
