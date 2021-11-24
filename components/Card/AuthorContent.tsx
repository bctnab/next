import React from 'react';
import styled from 'styled-components';

import Heading from '../Heading/Heading';
import UserPill from '../UserPill/UserPill';
import ContentPreview from '../ContentPreview/ContentPreview';
import PixivSVG from '../SVG/Pixiv';
import GithubSVG from '../SVG/Github';
import RssSVG from '../SVG/RSS';
import Nintendo from '../SVG/Nintendo';
import TwitterSVG from '../SVG/Twitter';

const AuthorContent = () => {

  return (
    <ContentPreview>
      <AuthorAvatar>
        <AuthorImage src="https://img.bplink66.com/2021/11/05/zuuoiviq80.jpg" />
      </AuthorAvatar>
      <Heading type="minor-heading" align="center">你能抓到我么？</Heading>
      <Tags>
        <UserPill href="https://twitter.com/home">
          <TagItem>
            <TwitterSVG size="18" />
            <span>Twitter</span>
          </TagItem>
        </UserPill>
        <UserPill href="https://www.pixiv.net/users/71080901">
          <TagItem>
            <PixivSVG size="18" />
            <span>Pixiv</span>
          </TagItem>
        </UserPill>
        <UserPill href="https://my.bplink66.com/atom.xml">
          <TagItem>
            <RssSVG size="18" />
            <span>RSS</span>
          </TagItem>
        </UserPill>
        <UserPill href="https://github.com/bctnab">
          <TagItem>
            <GithubSVG size="18" />
            <span>Github</span>
          </TagItem>
        </UserPill>
        <UserPill href="https://www.nintendo.com.hk/">
          <TagItem>
            <Nintendo size="18" />
            <span>Switch</span>
          </TagItem>
        </UserPill>
      </Tags>
    </ContentPreview>
  );
};

const AuthorAvatar = styled.div`
  display: block;
  position: relative;
  width: 6.4rem;
  height: 6.4rem;
  margin: 0 auto 0.6rem;
`;
const AuthorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3.2rem;
`;
const Tags = styled.div`
  text-align: center;
`;
const TagItem = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  span{
    margin-left: 5px;
  }
`;

export default AuthorContent;
