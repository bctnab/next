import React from 'react';
import styled from 'styled-components';
import ContentPreview from '../ContentPreview/ContentPreview';

const MottoContent = () => {
  return (
    <MottoWrapper>
      <MottoCn>The so-called daily life we spend day by day may actually be a series of miracles</MottoCn>
      <MottoEn>我们一日日度过的所谓的日常,实际上可能是接连不断的奇迹</MottoEn>
    </MottoWrapper>
  );
};

const MottoWrapper = styled(ContentPreview)`
  text-align: center;
  padding: 0.8rem 1.2rem;
`;
const MottoCn = styled.div`
  text-align: center;
`;
const MottoEn = styled.div`
  font-size: 0.9em;
  opacity: .7;
  padding-top: 0.2rem;
`;

export default MottoContent;