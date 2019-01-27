import React from 'react';
import styled from 'styled-components';

const PageLinkWrapper = styled.div`
  flex-grow: 1;
  padding: 2rem;

  color: white;
`;

const PageLink = props => <PageLinkWrapper>{props.children}</PageLinkWrapper>;

export default PageLink;
