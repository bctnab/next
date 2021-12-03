// TODO: Dedupe with VideoGif
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { ConfigContext } from '../ConfigContext/ConfigContext';

type baseProps = {
  src: string,
  width?: string,
  height?: string,
  title?: string,
  type?: string,
  source?: string,
  marginBottom?: string,
  includeWhiteBackground?: string
};

const BaseImage = ({
  src,
  width,
  height,
  title,
  type,
  source,
  marginBottom,
  includeWhiteBackground,
  ...delegated
}: baseProps) => {
  if (type === 'native') {
    return (
      <img src={src} width={width} height={height} {...delegated} />
    );
  }

  const as =
    typeof width !== 'undefined' && typeof height !== 'undefined'
      ? Image
      : 'img';

  const wrapperStyle = {
    background: includeWhiteBackground && 'white',
    padding: includeWhiteBackground && '16px',
    borderRadius: includeWhiteBackground && '8px',
    '--margin-bottom':
      typeof marginBottom === 'number'
        ? `${marginBottom}px`
        : undefined,
  };

  if (source) {
    return (
      <Wrapper type={type} style={wrapperStyle}>
        <a href={source} target="_blank" rel="noopener noreferrer">
          <ImageElem
            as={as}
            width={width}
            height={height}
            src={src}
            {...delegated}
          />
        </a>
        {title && <Caption>{title}</Caption>}
      </Wrapper>
    );
  }

  return (
    <Wrapper type={type} style={wrapperStyle}>
      <ImageElem
        as={as}
        src={src}
        width={width}
        height={height}
      />
      {title && <Caption>{title}</Caption>}
    </Wrapper>
  );
};

const DynamicPostImage = ({
  darkSrc,
  lightSrc,
  ...delegated
}) => {
  const { colorMode } = React.useContext(ConfigContext);
  let src = (colorMode === 'dark' ? darkSrc : lightSrc);

  return <BaseImage src={src} {...delegated} />;
};

const PostImage = ({
  src,
  darkSrc,
  lightSrc,
  type = 'default',
  ...delegated
}) => {
  if (darkSrc && lightSrc) {
    return (
      <DynamicPostImage
        darkSrc={darkSrc}
        lightSrc={lightSrc}
        type={type}
        {...delegated}
      />
    );
  }

  return (
    <BaseImage
      src={src}
      type={type}
      {...delegated}
    />
  );
};

const Wrapper = styled.span`
  margin: 12px auto var(--margin-bottom, 18px);
  box-sizing: content-box;

  /*
    HACK: Next-image does some trickery which undoes the auto-margins.
    I'll need to target it here directly.
  */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    padding: 0;
    border: none;
  }
`;

const Caption = styled.span`
  display: block;
  padding-top: 12px;
  font-size: 14px;
  text-align: center;
`;

const ImageElem = styled.img`
  display: block;
  width: 100%;
  border-radius: 3px;
  margin: auto; /* In case width is overridden, center it */
`;

export default PostImage;
