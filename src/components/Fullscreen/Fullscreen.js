import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

import styles from './styles.module.scss';

const FullscreenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const First = styled.div`
  composes: fullscreen;
`;

const Fullscreen = ({ children, className }) => {
  const containerClassName = classNames(styles.fullscreen, className);

  return <div className={containerClassName}>{children}</div>;
};

export default Fullscreen;
