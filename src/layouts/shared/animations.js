import { keyframes } from 'styled-components';

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

export const moveInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
  `;

export const rotateHeading = keyframes`
  0% {
    -webkit-transform: skew(-5deg) rotate(-5deg);
    transform: skew(-5deg) rotate(-5deg);
  }

  100% {
    -webkit-transform: skew(0) rotate(0);
    transform: skew(0) rotate(0);
  }
  `;

export const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 #ff108d;
  }
  `;
