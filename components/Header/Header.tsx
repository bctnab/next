import React from 'react';
import styled from 'styled-components';

import { ExternalLink } from '../Link/Link';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <Wrapper>
      <Brand>
        <Logo />
      </Brand>
      <Navigation />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: stretch;
  padding: 0;
  --header-item-padding: 1rem 0.7rem;
  @media ${(p) => p.theme.breakpoints.mobile} {
    display: block;
    --header-item-padding: 0.7rem 0.8rem;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin-right: ${(p) => p.theme.unit * 4}px;
  @media ${(p) => p.theme.breakpoints.mdAndSmaller} {
    margin-right: 0;
  }
`;

const DesktopNavigation = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-right: auto;

  @media ${(p) => p.theme.breakpoints.mobile} {
    margin-right: 0;
  }
`;
const MenuDesktopItem = styled(ExternalLink)`
  cursor: pointer;
`;

export default React.memo(Header);
