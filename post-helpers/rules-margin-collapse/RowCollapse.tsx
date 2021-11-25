import React from 'react';
import styled from 'styled-components';

const MarginCollapse = ({
  type = "column"
}) => {
  return (
    <Wrapper>
      <Skew>
        <Layer>
          <BaseElement>第一个段落</BaseElement>
          <BaseMargin />
        </Layer>
        <Layer>
          <BaseMargin />
          <BaseElement>第二个段落</BaseElement>
        </Layer>
      </Skew>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 450px;
  height: 210px;
  max-width: 90%;
  margin: 128px auto 20px;
`;
const Skew = styled.div`
  width: 100%;
  display: flex;
  transform: skewY(15deg);
`;
const Layer = styled.div`
  flex: 1 1 0%;
  position: relative;
  height: 125px;
  will-change: transform;
  display: flex;
`;
const BaseElement = styled.div`
  height: 100%;
  flex: 1 1 0%;
  width: 100%;
  position: relative;
  text-align: center;
  border: 4px solid black;
  border-radius: 2px;
  background: white;
`;
const BaseMargin = styled.div`
  height: 100%;
  width: 24px;
  position: relative;
  z-index: 2;
  background: rgba(255, 177, 86, 0.65);
`;
export default MarginCollapse;