import React from 'react';
import styled from 'styled-components';

const PreviewImage = ({ src }) => {
  return (
    <Wrapper>
      <img src={src} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: #e4e5e7;
  display: block;
  position: relative;
  @media screen and (min-width: 768px) {
    padding-top: 35%;
  }
  @media screen and (max-width: 479px) {
    height: 10rem;
  }
  @media screen and (max-width: 767px) and (min-width: 480px) {
    height: 16.48rem;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
  }
`;

export default PreviewImage;
