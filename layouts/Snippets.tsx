import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import { COMPONENTS } from '../lib/mdx-components';

import StandardLayout from './Standard';
import Spacer from '../components/Spacer/Spacer';
import Heading from '../components/Heading/Heading';
import MoreContent from '../components/Card/MoreContent';
import AuthorContent from '../components/Card/AuthorContent';
import ContentPreview from '../components/ContentPreview/ContentPreview';

const MainContent = ({ content, mdx }) => {
  const { title, date, time } = content;

  return (
    <ArticleContent>
      <ArticleHeader>
        <Heading type="large-title" align="center">{ title }</Heading>
        <Meta>
          <time dateTime={ time }>{ date }</time>
          <Dot />
          <NextLink passHref href={`/snippets`}>
            <a>代码片段</a>
          </NextLink>
        </Meta>
      </ArticleHeader>
      <ArticleBody className="markdown-body">
        <MDXRemote {...mdx} components={COMPONENTS} />
        <Spacer size="20" />
      </ArticleBody>
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
  text-align: center;
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
export default ArticleLayout;
