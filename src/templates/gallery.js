import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout/layout';
import GalleryHeader from '../components/Gallery/GalleryHeader';
import SubGallery from '../components/Gallery/SubGallery';

const GalleryWrapper = styled.div`
  background-color: #fff;
  height: 100%;
`;

const GalleryTemplate = ({ data }) => {
  const gallery = data.contentfulExtendedGallery;
  const subGalleries = data.contentfulExtendedGallery.galleries;

  return (
    <Layout>
      <GalleryWrapper>
        <GalleryHeader {...gallery} />

        {subGalleries.map((subGallery) => (
          <div key={subGallery.id}>
            <SubGallery images={subGallery.images} title={subGallery.title} />
          </div>
        ))}
      </GalleryWrapper>
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
      hero {
        title
        file {
          url
        }
      }
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
