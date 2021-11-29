import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import { LIGHT_COLORS } from '../../colors';

import { TextLink } from '../Link/Link';
import ContentPreview from '../ContentPreview/ContentPreview';

const ContentPreviewGrid = ({
  data,
  fields
}) => {
  const metadata = fields.slice(2);

  return (
    <Wrapper>
      {data.map((item) => (
        <ListItem key={ item.slug }>
          <Content top="0">
            <Title>
              <NextLink passHref href={`/snippets/${ item.slug}`}>
                <TextLink>{ item[fields[0].key] }</TextLink>
              </NextLink>
            </Title>
            <Description>{ item[fields[1].key] }</Description>
            <Metadata>
              {metadata.map((field) => (
                <li key={ field.key }>
                  <strong>{field.label}:</strong> { item[field.key] }
                </li>
              ))}
            </Metadata>
          </Content>
        </ListItem>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: grid;
  margin-top: 1.5rem;
  grid-auto-flow: row;
  grid-gap: 1.5rem 16px;
  list-style-type: none;

  @media ${(p) => p.theme.breakpoints.smAndLarger} {
    grid-template-columns: 1fr 1fr;
  }
`;
const ListItem = styled.li``;
const Content = styled(ContentPreview)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 20px;
`;
const Description = styled.p`
  margin: 16px 0 24px;
  font-size: 1rem;
  flex: 1;
  word-break: break-word;
`;
const Metadata = styled.ul`
  padding: 8px 14px;
  border-radius: 4px;
  background-color: ${LIGHT_COLORS.muted};
  list-style-type: none;
  font-size: 14px;

  li:not(:last-of-type) {
    margin-bottom: 4px;
  }
`;

export default ContentPreviewGrid;