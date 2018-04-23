import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as constants from '../../layouts/shared/style-constants';

const FullscreenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => {
    if (props.active) {
      return `
      background: ${constants.darkBackground};
      color: ${constants.colorWhite};
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 5;
      opacity: 0.99;
      `;
    }
    return `
        display: none;
      `;
  }};
`;

const Fullscreen = ({ children, active }) => (
  // const containerClassName = classNames(styles.fullscreen, className);

  <FullscreenWrapper active={active}>{children}</FullscreenWrapper>
);

export default Fullscreen;

Fullscreen.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool.isRequired,
};
