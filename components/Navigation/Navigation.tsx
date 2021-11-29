import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { TextLink } from '../Link/Link';

const Navigation = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <List>
        <ListItem>
          <NextLink href="/" passHref>
            <NavItemLink color={router.pathname === '/'?'var(--color-primary)':undefined}>首页</NavItemLink>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/archives" passHref>
            <NavItemLink color={router.pathname === '/archives'?'var(--color-primary)':undefined}>归档</NavItemLink>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/tags" passHref>
            <NavItemLink color={router.pathname === '/tags'?'var(--color-primary)':undefined}>标签</NavItemLink>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/wikis" passHref>
            <NavItemLink color={router.pathname === '/wikis'?'var(--color-primary)':undefined}>项目</NavItemLink>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/snippets" passHref>
            <NavItemLink color={router.pathname === '/snippets'?'var(--color-primary)':undefined}>代码片段</NavItemLink>
          </NextLink>
        </ListItem>
      </List>
    </Wrapper>
  )
}
const Wrapper = styled.nav``;
const List = styled.ul`
  display: flex;
  justify-content: center;
  font-weight: var(--font-weight-medium);
`;
const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const NavItemLink = styled(TextLink)`
  font-weight: var(--font-weight-medium);
  padding: var(--header-item-padding);
`;

export default Navigation;