import React from 'react';
import Link from 'gatsby-link';
import Tech from '../components/Tech/Tech';
import Bio from '../components/Bio/Bio';
import Footer from '../components/Footer/Footer';
import Wrapper from '../layouts/shared/pagewrapper';
import styled from 'styled-components';
import * as constants from '../layouts/shared/style-constants';

const AboutWrapper = Wrapper.extend`
  height: 100%;
`;

const Lower = styled.div`
  display: flex;
  width: 100%;
  background-color: ${constants.darkBlue};
  color: white;
  padding: 20px;

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
  background-color: white;
  padding: 1em;
  min-width: 250px;
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
  <div>
    <AboutWrapper>
      <Upper>
        <UpperLeft>
          <Bio />
        </UpperLeft>
        <UpperRight>
          <Tech />
        </UpperRight>
      </Upper>
      <Lower>
        If you want to get in touch with me, please use the{' '}
        <Link to="/contact">Contact form</Link>.
      </Lower>
      <Footer />
    </AboutWrapper>
  </div>
);

export default AboutPage;
