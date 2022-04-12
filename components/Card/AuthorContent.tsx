import React from 'react';
import styled from 'styled-components';

import Heading from '../Heading/Heading';
import Toggle from '../Toggle/Toggle';
import ContentPreview from '../ContentPreview/ContentPreview';
import PixivSVG from '../SVG/Pixiv';
import GithubSVG from '../SVG/Github';
import Nintendo from '../SVG/Nintendo';
import TwitterSVG from '../SVG/Twitter';
import SteamSVG from '../SVG/Steam';

const AuthorContent = () => {

  return (
    <ContentPreview>
      <PhotoBackground />
      <AuthorAvatar>
        <AuthorImage src="https://img.bplink66.com/uploads/2022/04/62537f4b5ac6c.jpg" />
      </AuthorAvatar>
      <CensusMenu>
        <CensusMenuItem>
          <CensusMenuNum>---</CensusMenuNum>
          <p>文章</p>
        </CensusMenuItem>
        <CensusMenuItem>
          <CensusMenuNum>---</CensusMenuNum>
          <p>日记</p>
        </CensusMenuItem>
        <CensusMenuItem>
          <CensusMenuNum>---</CensusMenuNum>
          <p>评论</p>
        </CensusMenuItem>
      </CensusMenu>
      <Heading type="minor-heading" align="center">你能抓到我么？</Heading>
      <Toggles>
        <Toggle color='#4e6ef2' href="https://twitter.com/home" children={<TwitterSVG color='#fff' />} />
        <Toggle color='#01AAED' href="https://www.pixiv.net/users/71080901" children={<PixivSVG color='#fff' />} />
        <Toggle color='#505050' href="https://github.com/bctnab" children={<GithubSVG color="#fff" />} />
        <Toggle color='#E8442E' href="https://www.nintendo.com.hk" children={<Nintendo color="#fff" />} />
        <Toggle color='#000' href="https://store.steampowered.com" children={<SteamSVG color="#fff" />} />
      </Toggles>
    </ContentPreview>
  );
};
const PhotoBackground = styled.div`
  height: 120px;
  margin: -1.2rem -1.2rem 0;
  background: url(https://img.bplink66.com/uploads/2022/04/6254ca448b48d.png) no-repeat center center;
  background-size: cover;
`;
const CensusMenu = styled.div`
  margin: 26px 0;
  font-size: 16px;
`;
const CensusMenuItem = styled.div`
  text-align: center;
  padding: 0 4px;
  width: 33.3%;
  display: inline-block;
  &:not(:last-child){
    border-right: 1px solid var(--color-gray-100);
  }
`;
const CensusMenuNum = styled.p`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 6px;
  color: #00a1d6;
`;
const AuthorAvatar = styled.div`
  display: block;
  position: relative;
  width: 5.8rem;
  height: 5.8rem;
  margin: -2.9rem auto 0.6rem;
  position: relative;
`;
const AuthorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: var(--color-background) 2px solid;
`;
const Toggles = styled.div`
  text-align: center;
  font-size: 0;
`;

export default AuthorContent;
