import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Fullscreen from '../Fullscreen/Fullscreen';
import * as constants from '../../layouts/shared/style-constants';

const Item = styled.div`
  position: relative;
  font-size: 3rem;
  line-height: 2;
  transition: background-size 0.4s ease-in;
  background: linear-gradient(
      to bottom,
      transparent 50%,
      ${constants.linkColor} 0
    )
    center center/0% 75% no-repeat;
  padding: 0 5px 2px 5px;
  cursor: pointer;
  letter-spacing: 0.08rem;

  &:hover {
    background-size: 100% 50%;
  }
  &:active {
    background-size: 80% 100%;
  }

  a {
    text-decoration: none;
    color: ${constants.colorWhite};

    &:hover {
      color: ${constants.colorWhite};
    }
  }
`;

function Menu(props) {
  const { toggleNav, active } = props;
  const linkProps = {
    onClick: toggleNav,
  };

  return (
    <Fullscreen active={active} data-testid="fullscreen">
      <nav>
        <Item>
          <Link {...linkProps} to="/about">
            About
          </Link>
        </Item>
        <Item>
          <Link {...linkProps} to="/blog">
            Blog
          </Link>
        </Item>
        <Item>
          <Link {...linkProps} to="/projects">
            Projects
          </Link>
        </Item>
        <Item>
          <Link {...linkProps} to="/galleries">
            Galleries
          </Link>
        </Item>
      </nav>
    </Fullscreen>
  );
}

export default Menu;

Menu.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};
