import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/layout';
import GalleryHeader from '../components/Gallery/GalleryHeader';
import SubGallery from '../components/Gallery/SubGallery';

const GalleryTemplate = ({ data, location }) => {
  const gallery = data.contentfulExtendedGallery;
  const subGalleries = data.contentfulExtendedGallery.galleries;

  return (
    <Layout location={location}>
      <GalleryHeader gallery />

      {subGalleries.map((subGallery, index) => (
        <div key={index}>
          {subGallery.__typename === 'ContentfulSubGallery' && (
            <SubGallery images={subGallery.images} />
          )}
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulExtendedGallery(slug: { eq: $slug }) {
      title
      id
      slug
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      galleries {
        __typename
        ... on ContentfulSubGallery {
          id
          slug
          title
          images {
            title
            fluid(maxWidth: 1000, quality: 75) {
              ...GatsbyContentfulFluid_withWebp
              src
              aspectRatio
            }
            fixed {
              height
              width
            }
          }
        }
      }
    }
  }
`;
export default GalleryTemplate;
