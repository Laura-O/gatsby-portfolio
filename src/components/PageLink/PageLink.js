import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as constants from '../../layouts/shared/style-constants';


const PageLinkWrapper = styled.div`
  flex-grow: 1;
  margin: 1.5rem;
  padding: 0.5rem;

  border: 3px solid ${constants.springgeen};
  border-radius: 10px;
  text-align: center;


  h1 {
   
    font-size: 2rem;
    margin: 0;
    padding: 0;

    color: ${constants.springgeen};
  }

  &:hover {
    border-color: ${constants.springgeen};;

    text-shadow: 
      0 0 2px ${constants.springgeen},
      0 0 8px ${constants.springgeen},
      0 0 12px ${constants.springgeen},
      0 0 20px ${constants.springgeen},
      0 0 30px ${constants.springgeen};

    h1 {
      color: ${constants.springgeen};
    }
  }

  @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff, 0 0 30px #B6FF00, 0 0 60px #B6FF00, 0 0 80px #B6FF00, 0 0 100px #B6FF00, 0 0 150px #B6FF00;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #B6FF00, 0 0 35px #B6FF00, 0 0 40px #B6FF00, 0 0 50px #B6FF00, 0 0 75px #B6FF00;
    }
  }
`;

function PageLink({ children }) {
  return <PageLinkWrapper>{children}</PageLinkWrapper>;
}

PageLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLink;
