import React from 'react';
import styled from 'styled-components';

import TimeLineItem from './TimeLineItem';
import Tag from '../Tag/Tag';

const Timeline = ({
  title,
  data
}) => {
  return (
    <Wrapper>
      <Tag>{ title }</Tag>
      {
        data.map((item) => <TimeLineItem key={ item.slug } data={ item } />)
      }
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 1.5rem;
`;
export default Timeline;
