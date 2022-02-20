import React from 'react';
import styled from 'styled-components';

import {
  getPopularBlogs,
  getCategories,
} from '../lib/content';
import {
  getDiary
} from '../lib/diary';
import Tag from '../components/Tag/Tag';
import Sticky from '../components/Sticky/Sticky';
import StandardLayout from '../layouts/Standard';
import DiaryLine from '../components/Line/DiaryLine';
import TopCategories from '../components/Card/TopCategories';
import AuthorContent from '../components/Card/AuthorContent';
import PopularContent from '../components/Card/PopularContent';

const MainContent = ({ diary }) => {
  return (
    <Wrapper>
      <Tag>个人日志</Tag>
      {diary.map((item, index) => <DiaryLine key={ index } data={ item } />)}
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

const DiaryPage = ({
  diary,
  categories,
  populars,
}) => {
  return (
    <StandardLayout
      mainContent={ <MainContent diary={diary} />}
      rightContent={ <RightContent populars={ populars } categories={ categories } /> }
    />
  );
};

export async function getStaticProps() {
  const diary = await getDiary();
  const categories = await getCategories();
  const populars = await getPopularBlogs();
  return {
    props: { diary, categories, populars },
  };
}

const Wrapper = styled.div`
  margin-top: 1rem;
`;

export default DiaryPage;
