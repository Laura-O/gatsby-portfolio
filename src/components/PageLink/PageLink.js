import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PageLinkWrapper = styled.div`
  flex-grow: 1;
  margin: 2rem;
  padding: 1rem;

  color: white;

  border: 5px solid white;
  border-radius: 5px;
  text-align: center;

  h1 {
    color: white;
    font-size: 3rem;
  }

  &:hover {
    border-color: #00C690;

    h1 {
      color: #00C690;
    }
  }
`;

function PageLink({children}) {
    return (
      <PageLinkWrapper>{children}</PageLinkWrapper>
    )
  
}

PageLink.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageLink;