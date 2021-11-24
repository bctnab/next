import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

import Heading from '../Heading/Heading';
import { TextLink } from '../Link/Link';
import ContentPreview from '../ContentPreview/ContentPreview';

const PopularContent = ({
  data
}) => {
  return (
    <ContentPreview>
      <Title type="small-title">推荐文章</Title>
      <List>
        {
          data.map((item) => (
            <ListItem key={item.slug}>
              <time dateTime={ item.time } >{ item.date }</time><br />
              <NextLink passHref href={`/post/${ item.slug}`}>
                <ItemLink>{ item.title }</ItemLink>
              </NextLink>
            </ListItem>
          ))
        }
      </List>
    </ContentPreview>
  );
};

const Title = styled(Heading)`
  text-align: left;
`;
const List = styled.ul`
  font-size: 0.87rem;
  margin-top: 1rem;
  text-align: left;
`;
const ListItem = styled.li`
  list-style-type: none;
  &:not(:first-child){
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e6e8ee;
  }
`;
const ItemLink = styled(TextLink)`
  font-size: 0.85rem;
  color: var(--color-text);
  &:hover{
    color: var(--color-primary);
  }
`;

export default PopularContent;
