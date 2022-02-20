import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { TIGHT_SPRING } from '../../colors';
import usePrefersReducedMotion from '../../hooks/use-prefers-reduced-motion';

import { TextLink } from '../Link/Link';
import UnstyledButton from '../UnstyledButton/UnstyledButton';

const CategoryPill = ({ href, onClick, children }: {
  href: string,
  onClick?: () => void,
  children: any
}) => {
  const [isHovering, setIsHovering] = React.useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const backgroundSpring = useSpring({
    opacity: isHovering ? 0.5 : 0.33,
    transform: isHovering ? `scale(1.06)` : `scale(0.99)`,
    config: TIGHT_SPRING,
    immediate: prefersReducedMotion,
  });
  const as = href ? TextLink : UnstyledButton;

  return (
    <LinkWrapper
      as={as}
      href={href}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      onClick={onClick}
    >
      <Background style={backgroundSpring} />
      {children}
    </LinkWrapper>
  );
};

const LinkWrapper = styled(TextLink)`
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-size: 13px;
  color: var(--color-gray-1000);
  padding: 2px 12px;
  margin-right: 4px;
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
  border-radius: 999px;
  background-color: var(--color-decorative);
  transform-origin: center center;
`;

export default CategoryPill;
