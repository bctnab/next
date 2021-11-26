import React from 'react';
import styled from 'styled-components';

const MarginCollapse = ({
  isTransition
}) => {
  return (
    <Wrapper>
      { isTransition &&  <TraButton>Hello World</TraButton>}
      { !isTransition  &&  <Button>Hello World</Button>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 30px;
  overflow: hidden;
`;
const Button = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  background: slateblue;
  color: white;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  &:hover{
    transform: translateY(-30px);
  }
`;
const TraButton = styled(Button)`
  transition: transform 250ms;
`;
export default MarginCollapse;