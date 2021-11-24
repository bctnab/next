import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

import { ExternalLink } from '../Link/Link';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <Wrapper>
      <Brand>
        <Logo />
      </Brand>
      <MenuDesktop>
        <DesktopNavigation>
          <NextLink href="/" passHref>
            <MenuDesktopItem>首页</MenuDesktopItem>
          </NextLink>
          <NextLink href="/archives" passHref>
            <MenuDesktopItem>归档</MenuDesktopItem>
          </NextLink>
          <NextLink href="/tags" passHref>
            <MenuDesktopItem>标签</MenuDesktopItem>
          </NextLink>
          {/* <NextLink href="/" passHref>
            <MenuDesktopItem>代码片段</MenuDesktopItem>
          </NextLink> */}
          <NextLink href="/wikis" passHref>
            <MenuDesktopItem>项目</MenuDesktopItem>
          </NextLink>
        </DesktopNavigation>

        {/* <IconWrapper>
          <DarkModeToggle />
          <RssLink />
        </IconWrapper> */}
      </MenuDesktop>
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

const MenuDesktop = styled.div`
  flex-grow: 1;
  overflow-x: auto;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
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
  display: flex;
  align-items: center;
  color: var(--color-text);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  padding: var(--header-item-padding);
  &:hover{
    color: var(--color-primary);
    background-color: var(--color-gray-100);
  }
`;
const IconWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-left: 0;
  align-items: center;

  @media ${(p) => p.theme.breakpoints.mobile} {
    display: none;
  }
`;

export default React.memo(Header);
