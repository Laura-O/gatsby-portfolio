import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout/layout';

const GalleryWrapper = styled.div`
  margin: 0 2rem;
  padding-top: 2em;
`;

const Card = styled.div`
  background-color: white;
  padding: 1em;

  color: black;
`;

const CardsWrapper = styled.div`
  display: flex;
`;

function Galleries({ data }) {
  let galleries = null;
  if (data !== undefined) {
    galleries = data.allContentfulExtendedGallery.edges;
  }

  return (
    <Layout>
      <GalleryWrapper>
        <h1>Galleries</h1>
        <CardsWrapper>
          {galleries &&
            galleries.map(gallery => (
              <Card key={gallery.id}>
                <Link to={gallery.node.slug}>
                  <img
                    src={gallery.node.preview.fluid.src}
                    alt={`Gallery Preview ${gallery.node.title}`}
                  />
                </Link>
                <footer>
                  <h3>{gallery.node.title}</h3>
                </footer>
              </Card>
            ))}
          {!galleries && <div>There are not galleries available.</div>}
        </CardsWrapper>
      </GalleryWrapper>
    </Layout>
  );
}
export default Galleries;

Galleries.propTypes = {
  data: PropTypes.shape({
    allContentfulExtendedGallery: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

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
