import styled, { keyframes } from 'styled-components';

export const moveInLeft = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }
    80% {
      transform: translate(1rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  `;

export const moveInRight = keyframes`
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }
    80% {
      transform: translate(-1rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  `;
