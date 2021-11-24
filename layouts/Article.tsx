import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';

import {
  COLOR_SWAP_TRANSITION_DURATION,
} from '../colors';

import { isBlank } from '../utils/validate';
import Footer from '../components/Footer/Footer';
import Spacer from '../components/Spacer/Spacer';
import Header from '../components/Header/Header';
import { LightLink } from '../components/Link/Link';
import Heading from '../components/Heading/Heading';
import MaxWidthWrapper from '../components/MaxWidthWrapper/MaxWidthWrapper';
import AuthorContent from '../components/Card/AuthorContent';
import ContentPreview from '../components/ContentPreview/ContentPreview';
import ArticlePreview from '../components/ArticleContent/ArticlePreview';

const ArticleLayout = ({
  content,
  mdx
}) => {
  const { title, date, time, categorie, preview, tags } = content;
  return (
    <Wrapper>
      <HeaderWrapper>
        <MaxWidthWrapper>
          <Header />
        </MaxWidthWrapper>
      </HeaderWrapper>
      <Main>
        <MainCol>
          <ArticleContent>
            {
              !isBlank(preview) && (
                <ArticlePreview
                  src={ preview }
                />
              )
            }
            <ArticleHeader>
              <Heading type="large-title">{ title }</Heading>
              <Meta>
                <time dateTime={ time }>{ date }</time>
                <Dot />
                <NextLink passHref href={`/categories/${ categorie}`}>
                  <LightLink>{ categorie }</LightLink>
                </NextLink>
              </Meta>
            </ArticleHeader>
            <ArticleBody className="markdown-body">
              <MDXRemote {...mdx} />
              <ThenEnd>文章已结束，谢谢您的阅读！</ThenEnd>
            </ArticleBody>
            <ArticleFooter>
              {
                tags.map((item) => (
                  <NextLink key={ item } passHref href={`/tags/${ item}`}>
                    <LightLink># { item}</LightLink>
                  </NextLink>
                ))
              }
            </ArticleFooter>
          </ArticleContent>
        </MainCol>
        <RightCol>
          <AuthorContent />
        </RightCol>
      </Main>
      <Spacer size="96" />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
`;
const HeaderWrapper = styled.div`
  background: var(--color-background);
  box-shadow: var(--color-box-shadow);
  transition: background ${COLOR_SWAP_TRANSITION_DURATION}ms;
`;
const RightCol = styled.aside`
  order: 2;
  width: 290px;
`;
const MainCol = styled.div`
  order: 1;
  flex: 1;
  box-sizing: border-box;
  padding-right: 20px;
  overflow: hidden;
`;
const Main = styled(MaxWidthWrapper)`
  display: flex;
  @media ${(p) => p.theme.breakpoints.mdAndSmaller} {
    display: block;
    ${ MainCol}{
      width: 100%;
      padding: 0;
    } 
    ${ RightCol}{
      display: none;
    }
  }
`;
const ArticleContent = styled(ContentPreview)`
  padding: 0;
`;
const ArticleHeader = styled.header`
  padding: 1.5rem 1.5rem 0;
`;
const Meta = styled.div`
  margin-top: 1rem;
  font-weight: 500;
  color: var(--color-gray-700);
`;
const Dot = styled.span`
  margin: 0 0.4rem;
  &:after{
    content: "·";
  }
`;
const ArticleBody = styled.div`
  contain: content;
  overflow-wrap: break-word;
  padding: 1rem 1.5rem 0;
`;
const ThenEnd = styled.div`
  background-color: #fffbeb;
  color: #947600;
  border: 1px solid #ede8d3;
  font-size: 1rem;
  margin: 0 -1.5rem;
  padding: 1.25rem 1.5rem;
  font-weight: var(--font-weight-medium);
`;
const ArticleFooter = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-wrap: wrap;
  font-size: 0.9rem;
  font-weight: 500;
  justify-content: flex-start;
  a{
    margin-right: 0.5rem;
  }
`;
export default ArticleLayout;
