import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

import { isBlank } from '../../utils/validate';
import Heading from '../Heading/Heading';
import { ExternalLink } from '../Link/Link';
import ArticlePreview from './ArticlePreview';
import ContentPreview from '../ContentPreview/ContentPreview';

const OrderedContent = ({
  data
}) => {
  const { slug, date, time, title, preview, abstract, categorie } = data;
  return (
    <Wrapper>
      {
        !isBlank(preview) && (
          <NextLink passHref href={`/post/${ slug}`}>
            <a>
              <ArticlePreview
                src={ preview }
              />
            </a>
          </NextLink>
        )
      }
      <Content>
        <NextLink passHref href={`/post/${ slug}`}>
          <ExternalLink>
            <Heading type="large-title">{ title }</Heading>
          </ExternalLink>
        </NextLink>
        <Excerpt>{ abstract }</Excerpt>
        <Footer>
          <time dateTime={ time }>{ date }</time>
          <NextLink passHref href={`/post/${ slug}`}>
            <ExternalLink>继续阅读</ExternalLink>
          </NextLink>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(ContentPreview)`
  position: relative;
  padding: 0 !important;
`;
const Content = styled.div`
  padding: 1.5rem;
  text-align: left;
`;
const Excerpt = styled.p`
  margin: 1rem 0 1.5rem;
`;
const Footer = styled.div`
  display: flex;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  justify-content: space-between;
`;

export default OrderedContent;
