import styled from 'styled-components';
import '../../scss/variables.scss';
import * as constants from './style-constants';

const Tag = styled.span`
  border: 1px solid #dee2e5;
  background-color: #dee2e5;
  border-radius: 5px;
  padding: 6px 15px;
  margin: 5px;
  color: ${constants.textColor};
  transition: all 300ms ease-in-out;
  display: inline-block;

  &:hover {
    transform: translateY(-0.1rem);
    box-shadow: 0 1rem 2rem rgba(#000, 0.2);
    color: #fff;
    background-color: ${constants.linkColor};
  }

  &::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
`;

export default Tag;
