import React from 'react';
import styled from 'styled-components';

const Toggle = ({ children = '', href, color = '#4e6ef2' }: {
  children: any,
  href: string,
  color?: string
}) => {

  return (
    <Wrapper
      target="blank"
      href={ href }
      color={ color }
    >
      { children }
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  background: ${ props => props.color};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  line-height: 32px;
  position: relative;
  font-size: 20px;
  margin: 3px 5px;
  transition: .2s ease-out;
  &:hover{
    transform: scale(1.08);
  }
`;

export default Toggle;
