import styled from 'styled-components';
import '../../scss/variables.scss';
import * as constants from './style-constants.js';

const HighlightLink = styled.a`
  text-decoration: none;
  color: ${constants.textColor};
  display: inline-block;
  padding: 0px 3px;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  text-decoration: none;
  box-shadow: inset 0 -4px 0 ${constants.linkColor};

  &:hover {
    box-shadow: inset 0 -55px 0 0 ${constants.linkColor};
    color: white;
  }
`;

export default HighlightLink;
