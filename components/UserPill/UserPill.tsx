import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { TIGHT_SPRING } from '../../colors';
import usePrefersReducedMotion from '../../hooks/use-prefers-reduced-motion';
import { TextLink } from '../Link/Link';

const CategoryPill = (props) => {
  const { href, onClick, children } = props;
  const [isHovering, setIsHovering] = React.useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const backgroundSpring = useSpring({
    opacity: isHovering ? 0.5 : 0.33,
    transform: isHovering ? `scale(1.06)` : `scale(0.99)`,
    config: TIGHT_SPRING,
    immediate: prefersReducedMotion,
  });

  return (
    <NextLink passHref href={ href }>
      <LinkWrapper
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          stop();
        }}
        onClick={onClick}
      >
        <Background style={backgroundSpring} />
        {children}
      </LinkWrapper>
    </NextLink>
  );
};

const LinkWrapper = styled(TextLink)`
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-size: 12px;
  color: var(--color-gray-1000);
  padding: 0 10px;
  margin-right: 8px;
  margin-bottom: 8px;
  font-weight: var(--font-weight-medium);

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    padding: 6px 18px;
    font-size: 15px;
  }
`;

const Background = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  background-color: var(--color-decorative);
  transform-origin: center center;
`;

export default CategoryPill;
