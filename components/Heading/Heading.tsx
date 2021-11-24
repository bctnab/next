import React from 'react';
import styled from 'styled-components';

const Heading = (props) => {
  const {
    type = 'medium-title',
    renderAs,
    ...delegated
  } = props;
  let Component;
  if (type === 'large-title') {
    Component = LargeTitle;
  } else if (type === 'small-title') {
    Component = SmallTitle;
  } else if (type === 'minor-heading') {
    Component = MinorHeading;
  } else {
    throw new Error('Unrecognized Heading type: ' + type);
  }

  return <Component as={renderAs} {...delegated} />;
};

const LargeTitle = styled.h1`
  font-size: 1.5rem;
  word-break: break-word;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-1000);
  text-align: ${(props) => (props.align || 'left')};
`;
const SmallTitle = styled.h1`
  font-size: 0.9rem;
  color: var(--color-gray-700);
  text-align: ${(props) => (props.align || 'left')};
`;
const MinorHeading = styled.h4`
  font-size: 15px;
  color: var(--color-gray-900);
  margin-top: 14px;
  margin-bottom: 14px;
  text-align: ${(props) => (props.align || 'left')};
`;

export default Heading;
