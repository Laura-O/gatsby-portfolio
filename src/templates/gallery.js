import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/layout';

const GalleryTemplate = ({ data, location }) => {
//   const gallery = data.contentfulExtendedGalleries
//   const subGalleries = data.contentfulExtendedGallery.galleries

  console.log(data)

  return (
    <Layout location={location}>
        <div>.</div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulExtendedGalleries(slug: { eq: $slug }) {
      title
      id
      slug
      publishDate(formatString: "MMMM DD, YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
export default GalleryTemplate