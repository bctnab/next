import React from 'react';
import styled from 'styled-components';

import {
  getPopularBlogs,
  getCategories,
} from '../lib/content';
import Sticky from '../components/Sticky/Sticky';
import StandardLayout from '../layouts/Standard';
import { TextLink } from '../components/Link/Link';
import Heading from '../components/Heading/Heading';
import TopCategories from '../components/Card/TopCategories';
import AuthorContent from '../components/Card/AuthorContent';
import PopularContent from '../components/Card/PopularContent';
import ContentPreview from '../components/ContentPreview/ContentPreview';

const MainContent = () => {
  return (
    <Wrapper>
      <Heading align="center">小伙伴们</Heading>
      <Description>小伙伴的链接，每次随机刷新(*^▽^*)</Description>
      <Grid>
        <GridItem href={`/pos`}>
          <img src="https://img.bplink66.com/2021/11/05/zuuoiviq80.jpg" />
          <GridTitle>个人博客</GridTitle>
          <GridDesc>一只南美洲亚马逊河流域热带雨林中的蝴蝶，偶尔扇动几下翅膀，可以在两周以后引起美国得克萨斯州的一场龙卷风。</GridDesc>
        </GridItem>
      </Grid>
    </Wrapper>
  )
}
const RightContent = ({ populars, categories }) => {
  return (
    <>
      <AuthorContent />
      <Sticky top="1.5rem">
        <PopularContent data={ populars } />
        <TopCategories data={ categories } />
      </Sticky>
    </>
  )
}

const FriendsPage = ({
  categories,
  populars,
}) => {
  return (
    <StandardLayout
      mainContent={ <MainContent /> }
      rightContent={ <RightContent populars={ populars } categories={ categories } /> }
    />
  );
};

const Wrapper = styled(ContentPreview)`
  word-break: break-all;
`;
const Description = styled.p`
  text-align: center;
  color: var(--color-gray-600);
  margin: 8px 0;
`;
const Grid = styled.div`
  display: grid;
  margin-top: 16px;
  grid-template-columns: repeat(2, 50%);
  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    grid-template-columns: repeat(1, 100%);
  }
`;
const GridItem = styled(TextLink)`
  display: block;
  height: 90px;
  border-radius: 4px;
  position: relative;
  padding: 0 10px 0 90px;
  img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    left: 15px;
    margin: 0;
    border: 0;
    object-fit: cover;
  }
  &:hover{
    background-color: var(--color-gray-100);
  }
`;
const GridTitle = styled.h4`
  padding-top: 20px;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const GridDesc = styled.p`
  margin: 8px 0;
  line-height: 24px;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export async function getStaticProps() {
  const categories = await getCategories();
  const populars = await getPopularBlogs();
  return {
    props: { categories, populars },
  };
}
export default FriendsPage;