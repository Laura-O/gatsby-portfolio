import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Fullscreen from '../Fullscreen/Fullscreen';
import * as constants from '../../layouts/shared/style-constants';

const Item = styled.div`
  color: white;
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

    &:hover {
      color: white;
    }
  }
`;

export default function Menu(props) {
  const linkProps = {
    onClick: props.toggleNav,
  };

  return (
    <Fullscreen active={props.active}>
      <nav>
        <Item>
          <Link {...linkProps} to="/">
            Home
          </Link>
        </Item>
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
          <Link {...linkProps} to="/contact">
            Contact
          </Link>
        </Item>
      </nav>
    </Fullscreen>
  );
}
