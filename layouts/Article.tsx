import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import { COMPONENTS } from '../lib/mdx-components';

import StandardLayout from './Standard';
import { isBlank } from '../utils/validate';
import Heading from '../components/Heading/Heading';
import AuthorContent from '../components/Card/AuthorContent';
import MoreContent from '../components/Card/MoreContent';
import ContentPreview from '../components/ContentPreview/ContentPreview';
import ArticlePreview from '../components/ArticleContent/ArticlePreview';

const MainContent = ({ content, mdx }) => {
  const { title, date, time, categorie, preview, tags } = content;
  return (
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
        </Meta>
      </ArticleHeader>
      <ArticleBody className="markdown-body">
        <MDXRemote {...mdx} components={COMPONENTS} />
        <ThenEnd>文章已结束，谢谢您的阅读！</ThenEnd>
      </ArticleBody>
      <ArticleFooter>
        {
          tags.map((item) => (
            <NextLink key={ item } passHref href={`/tags/${ item}`}>
              <a># { item}</a>
            </NextLink>
          ))
        }
      </ArticleFooter>
    </ArticleContent>
  )
}
const RightContent = () => {
  return (
    <>
      <AuthorContent />
      <MoreContent />
    </>
  )
}

const ArticleLayout = ({
  content, mdx
}) => {
  return (
    <StandardLayout
      mainContent={ <MainContent content={ content } mdx={ mdx } /> }
      rightContent={ <RightContent /> }
    />
  );
};

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
  font-weight: bold;
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
