import React from 'react';
import styled from 'styled-components';

import ArticleContent from '../ArticleContent/ArticleContent';

const Timeline = ({
  data
}) => {
  return (
    <Wrapper>
      <Marker />
      <Content>
        <ArticleContent type="brief" data={ data } />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin-left: 1.7rem;
  padding-bottom: 1rem;
  &::before{
    content: "";
    background-color: #dbdbdb;
    display: block;
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
  }
  &:last-child::before{
    height: 1.5rem;
  }
`;
const Marker = styled.div`
  position: absolute;
  background: #dbdbdb;
  border: 1px solid #dbdbdb;
  border-radius: 100%;
  content: "";
  display: block;
  height: 12px;
  transform: translateX(-50%);
  top: 1.2rem;
  width: 12px;
`;
const Content = styled.div`
  margin-top: 1em;
  padding-left: 1em;
  width: 100%;
`;

export default Timeline;
