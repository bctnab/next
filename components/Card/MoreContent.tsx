import React from 'react';
import styled from 'styled-components';

import Heading from '../Heading/Heading';
import { TextLink } from '../Link/Link';
import ContentPreview from '../ContentPreview/ContentPreview';
import Icon from '../icon/icon';

const TopCategories = () => {
  return (
    <ContentPreview>
      <Title type="small-title">更多功能</Title>
      <MoreGrid>
        <MoreGridItem>
          <Icon name="calendar-alt" size="18" margin="0 6px 0 0" color="#5FB878" />
          <TextLink href="/diary">日记</TextLink>
        </MoreGridItem>
        <MoreGridItem>
          <Icon name="child" size="18" margin="0 6px 0 0" color="#01AAED" />
          <TextLink href="/friends">友人帐</TextLink>
        </MoreGridItem>
      </MoreGrid>
    </ContentPreview>
  );
};

const Title = styled(Heading)`
  text-align: left;
  margin-bottom: 1rem;
`;
const MoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;
const MoreGridItem = styled.div`
  padding: 2px 4px;
  font-weight: bold;
  display: flex;
  align-items: center;
  border-radius: 2px;
`;

export default TopCategories;
