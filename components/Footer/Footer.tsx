import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

import { CATEGORIES } from '../../lib/category';

import Logo from '../Logo/Logo';
import { TextLink } from '../Link/Link';
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';

const Footer = () => {

  return (
    <Wrapper>
      <InnerWrapper>
        <Left>
          <Top>
            <Logo />
            <DesktopOnly>
              <Thanks>谢谢你的阅读！</Thanks>
            </DesktopOnly>
          </Top>
          <DesktopOnly>
            <Copyright>
            网站备案号：<a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备20013287号-2</a>
            </Copyright>
          </DesktopOnly>
        </Left>
        <Right>
          <Column>
            <Heading>Posts</Heading>
            <TwoColumnChildren>
              {CATEGORIES.map((category) => {
                return (
                  <NextLink key={category} passHref href={`/categories/${category}`}>
                    <TextLink>{category}</TextLink>
                  </NextLink>
                );
              })}
            </TwoColumnChildren>
          </Column>
          <Column>
            <Heading>Links</Heading>
            <OneColumnChildren>
              <NextLink passHref href="https://www.bplink66.com">
                <TextLink>Blog</TextLink>
              </NextLink>
              <NextLink passHref href="https://my.bplink66.com/atom.xml">
                <TextLink>RSS</TextLink>
              </NextLink>
              <NextLink passHref href="https://github.com/bctnab">
                <TextLink>Github</TextLink>
              </NextLink>
            </OneColumnChildren>
          </Column>
        </Right>
        <MobileOnly>
          <MobileCopyright>
            © 2020-present Joshua Comeau. All Rights Reserved.
          </MobileCopyright>
        </MobileOnly>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: relative;
`;
const DesktopOnly = styled.span`
  @media (max-width: 725px) {
    display: none;
  }
`;
const MobileOnly = styled.span`
  @media (min-width: 726px) {
    display: none;
  }
`;
const InnerWrapper = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 32px;

  @media (max-width: 725px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 725px) {
    text-align: center;
    padding-bottom: 32px;
    align-items: center;
  }
`;
const Right = styled.div`
  display: flex;

  @media (max-width: 725px) {
    justify-content: space-around;
  }
`;

const Column = styled.div`
  margin-left: 96px;
  padding-top: 8px;

  @media (max-width: 725px) {
    margin-left: 0;
  }
`;

const Heading = styled.p`
  font-size: 14px;
  font-weight: var(--font-weight-light);
  color: var(--color-gray-700);
`;

const OneColumnChildren = styled.div`
  display: grid;
  width: 100px;
  grid-template-columns: 1fr;
  grid-gap: 6px;
  padding-top: 12px;
`;

const TwoColumnChildren = styled(OneColumnChildren)`
  width: 200px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const Top = styled.div``;

const Thanks = styled.div`
  font-size: 14px;
  margin-top: 8px;
  color: var(--color-gray-700);
  font-weight: var(--font-weight-medium);
`;

const Copyright = styled.div`
  font-size: 12px;
  color: var(--color-gray-700);
`;

const MobileCopyright = styled(Copyright)`
  text-align: center;
  padding-top: 48px;
`;

export default React.memo(Footer);
