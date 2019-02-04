import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PageLinkWrapper = styled.div`
  flex-grow: 1;
  margin: 1.5rem;
  padding: 0.5rem;

  color: white;

  border: 3px solid white;
  border-radius: 10px;
  text-align: center;

  h1 {
    color: white;
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }

  &:hover {
    border-color: #00c690;

    h1 {
      color: #00c690;
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
