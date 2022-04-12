import React from 'react';
import styled from 'styled-components';
import {
  COLOR_SWAP_TRANSITION_DURATION,
} from '../../colors';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';

const Header = () => {
  return (
    <Wrapper>
      <HeaderRow>
        <Brand>
          <Logo />
        </Brand>
        <Navigation />
      </HeaderRow>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: stretch;
  --header-item-padding: 1rem 0.7rem;
  margin-bottom: 1.5rem;
  background: var(--color-background);
  box-shadow: var(--color-box-shadow);
  transition: background ${ COLOR_SWAP_TRANSITION_DURATION}ms;
  @media ${(p) => p.theme.breakpoints.mobile} {
    display: block;
    --header-item-padding: 0.7rem 0.8rem;
  }
`;
const HeaderRow = styled(MaxWidthWrapper)`
  display: flex;
  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    display: block;
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

export default React.memo(Header);
