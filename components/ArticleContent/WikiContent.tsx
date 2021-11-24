import React from 'react';
import styled from 'styled-components';

import { isBlank } from '../../utils/validate';
import Heading from '../Heading/Heading';
import ContentPreview from '../ContentPreview/ContentPreview';

const WikiContent = ({ data }) => {
  return (
    <Wrapper>
      <Preview>
        <img src={data.thumb} />
      </Preview>
      <Content>
        <Breadcrumb color={ data.color }>{ data.categorie }</Breadcrumb>
        <Heading type="large-title">{ data.title }</Heading>
        {
          !isBlank(data.error) && <Error>{ data.error }</Error>
        }
        <Excerpt>{ data.abstract }</Excerpt>
      </Content>
    </Wrapper>
  );
};
const Wrapper = styled(ContentPreview)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 0.5rem;
`;
const Preview = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  margin: 1rem;
  img{
    height: 108px;
    object-fit: contain;
    border-radius: 6px;
    max-width: 100%;
    margin: auto;
  }
`;
const Content = styled.div`
  text-align: left;
  margin: 1rem 0.5rem;
  min-width: 280px;
  flex: 1;

  @media (min-width: 940px){
    margin-right: 2rem;
  }
`;
const Breadcrumb = styled.p`
  font-weight: 500;
  font-size: .75rem;
  margin-bottom: 0.4rem;
  color: ${(props) => (props.color || 'var(--color-text)')};
`;
const Error = styled.p`
  font-weight: 500;
  font-size: .75rem;
  margin-bottom: 0.4rem;
  color: var(--color-error);
  margin: 0.4rem 0;
`;
const Excerpt = styled.p`
  margin: 1rem 0;
`;

export default WikiContent;
