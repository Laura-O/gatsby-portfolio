import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image'


import HighlightLink from '../../layouts/shared/Link';

const MeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;

  .first,
.second {
  width: 100%;
  text-align: center;
}

.first {
  display: block;
}

.second {
  display: none;
}

.wrapper {
  width: 100%;
  display: inline-block;
 
}

.wrapper:hover .first {
  display: none;
}

.wrapper:hover .second {
  display: block;
}
`;


const Me = () => (
    <StaticQuery
        query={graphql`
        query {
          imageOne: file(relativePath: { eq: "me1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imageTwo: file(relativePath: { eq: "me2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    `}
        render={data => (
            <MeWrapper>
                <div className="wrapper">
                    <Img className="first" fluid={data.imageOne.childImageSharp.fluid} />
                    <Img className="second" fluid={data.imageTwo.childImageSharp.fluid} />
                </div>
            </MeWrapper>
        )}
    />
);

export default Me;