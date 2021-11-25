import React from 'react';
import styled from 'styled-components';

const MarginCollapse = ({
  type = "column"
}) => {
  return (
    <Wrapper>
      <Skew>
        <BaseElement>第一个段落</BaseElement>
        <BaseMargin />
      </Skew>
      <Skew>
        <BaseElement>第二个段落</BaseElement>
      </Skew>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  width: 243px;
  max-width: 65%;
  height: 460px;
  margin: 64px auto 48px;
  border: 2px solid transparent;
`;
const Skew = styled.div`
  transform: skewY(18deg);
  overflow: hidden;
`;
const BaseElement = styled.div`
  position: relative;
  width: 100%;
  height: 175px;
  line-height: 175px;
  text-align: center;
  border: 4px solid black;
  border-radius: 2px;
  background: white;
`;
const BaseMargin = styled.div`
  position: relative;
  z-index: 2;
  background: rgba(255, 177, 86, 0.65);
  width: 100%;
  height: 25px;
`;

export default MarginCollapse;