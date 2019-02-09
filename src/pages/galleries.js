import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout/layout';

const GalleryWrapper = styled.div`
  margin: 0 2rem;
`

const Card = styled.div`
  background-color: white;
  padding: 1em;

  color: black;
`

const CardsWrapper = styled.div`
  display: flex;
`

function Galleries({ data }) {
  const galleries = data.allContentfulExtendedGallery.edges;

  return (
    <Layout>
      <GalleryWrapper>
        <h1>Galleries</h1>
        <CardsWrapper>
          {galleries.map(gallery => (
            <Card>
              <Link to={gallery.node.slug}><img src={gallery.node.preview.fluid.src} /></Link>
              <footer>
                <h3>{gallery.node.title}</h3>
              </footer>
            </Card>
          ))}
        </CardsWrapper>

      </GalleryWrapper>
    </Layout>)
}
;

export default Galleries;

export const query = graphql`
  query GalleryQuery {
    allContentfulExtendedGallery {
        edges {
          node {
        id
        slug
        title
          preview {
          fluid(maxWidth: 400, quality: 75) {
          ...GatsbyContentfulFluid_withWebp
              src
        aspectRatio
      }
    }
  }
}
}
}
`;
