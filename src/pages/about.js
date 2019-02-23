import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Tech from '../components/Tech/Tech';
import Bio from '../components/Bio/Bio';
import Wrapper from '../layouts/shared/Pagewrapper';
import Layout from '../components/Layout/layout';
import Me from "../components/Me/Me"

import * as constants from '../layouts/shared/style-constants';

const AboutWrapper = styled(Wrapper)`
  height: 100%;
`;

const Lower = styled.div`
  display: flex;
  align-self: flex-end;
  width: 100%;
  background-color: ${constants.darkBlue};
  color: white;
  padding: 20px;
  font-size: 1em;

  a {
    color: ${constants.redPurple};
    padding-left: 5px;
  }
`;

const Upper = styled.div`
  display: flex;
  flex: 2;
  background-color: white;
  color: ${constants.textColor};
  flex-wrap: wrap;
`;

const UpperLeft = styled.div`
  flex: 2;
  z-index: 2;
`;

const UpperRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  border-left: 3px solid ${constants.redPurple};
  background-color: ${constants.yellow};
  padding: 1em;
  min-width: 250px;
`;

const AboutPage = () => (
  <Layout>
    <AboutWrapper>
      <Upper>
        <UpperLeft>
          <Bio />
        </UpperLeft>
        <UpperRight>
          <Me />
        </UpperRight>
      </Upper>
      <Lower>
        <Tech />
      </Lower>
    </AboutWrapper>
  </Layout>
);

export default AboutPage;
