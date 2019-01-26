import React from 'react';
import styled from 'styled-components';

const PageLinkWrapper = styled.div`
  flex-grow: 1;
  padding: 2rem;
  border: solid 5px #24305e;
  background-color: white;

  box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
`

const PageLink = props => (
  <PageLinkWrapper>
    {props.children}
  </PageLinkWrapper>
);

export default PageLink;
