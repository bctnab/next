import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

import Heading from '../Heading/Heading';
import { TextLink } from '../Link/Link';
import ContentPreview from '../ContentPreview/ContentPreview';

const TopCategories = ({
  data
}) => {
  return (
    <ContentPreview>
      <Title type="small-title">分类</Title>
      {
        Object.keys(data).map((key: string) => (<NextLink key={ key } passHref href={`/categories/${ key}`}><Link>{ key }<Number>{ data[key] }</Number></Link></NextLink>))
      }
    </ContentPreview>
  );
};

const Title = styled(Heading)`
  text-align: left;
  margin-bottom: 1rem;
`;
const Link = styled(TextLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .4rem .75rem;
  font-size: 0.9rem;
  border-radius: 4px;
  transition: background 0.3s;
  &:hover{
    background: var(--color-gray-200);
  }
`;
const Number = styled.span`
  
`;

export default TopCategories;
