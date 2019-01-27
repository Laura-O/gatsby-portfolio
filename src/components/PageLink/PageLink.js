import React from 'react';
import styled from 'styled-components';

const PageLinkWrapper = styled.div`
  flex-grow: 1;
  margin: 2rem;
  padding: 1rem;

  color: white;

  border: 5px solid white;
  border-radiud: 50px;
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

const PageLink = props => <PageLinkWrapper>{props.children}</PageLinkWrapper>;

export default PageLink;
