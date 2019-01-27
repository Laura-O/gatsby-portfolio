import React from 'react';
import styled from 'styled-components';

import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import twitter from '../../assets/icons/twitter.svg';
import * as constants from '../../layouts/shared/style-constants';

const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 0px 30px 0px 30px;
  background-color: ${constants.darkBackground};
  color: ${constants.colorWhite};
  justify-content: space-between;
  align-items: center;

  li {
    display: inline-block;
    margin: 5px;
  }

  ul {
    margin: 0.5em;
  }
`;

const Icon = styled.img`
  width: 1.2em;
  height: 1.2em;
  margin-right: 0.5em;
`;

const Legal = styled.div`
  .legal {
    vertical-align: middle;

    a:hover {
      color: $colorWhite;
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <div>
      <ul>
        <li>
          <a href="https://github.com/Laura-O">
            <Icon src={github} alt="github" />
          </a>
        </li>
        <li>
          <a href="www.linkedin.com/in/lauraohrndorf">
            <Icon src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/laura_fyi">
            <Icon src={twitter} alt="twitter" />
          </a>
        </li>
      </ul>
    </div>
    <Legal>
      <small>
        <a href="/legal">Legal notice</a>
      </small>
    </Legal>
  </FooterWrapper>
);

export default Footer;
