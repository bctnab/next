import React from 'react';

import {
  getPostTimeAxis,
  getPopularBlogs,
  getCategories,
} from '../lib/content';
import Sticky from '../components/Sticky/Sticky';
import StandardLayout from '../layouts/Standard';
import Timeline from '../components/Timeline/Timeline';
import TopCategories from '../components/Card/TopCategories';
import AuthorContent from '../components/Card/AuthorContent';
import PopularContent from '../components/Card/PopularContent';

const MainContent = ({ posts }) => {
  return (
    posts.map((item) => <Timeline key={ item.title } title={ item.title } data={ item.data } />)
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

const ArchivePage = ({
  posts,
  categories,
  populars,
}) => {
  return (
    <StandardLayout
      mainContent={ <MainContent posts={ posts } /> }
      rightContent={ <RightContent populars={ populars } categories={ categories } /> }
    />
  );
};

export async function getStaticProps() {
  const posts = await getPostTimeAxis();
  const categories = await getCategories();
  const populars = await getPopularBlogs();
  return {
    props: { posts, categories, populars },
  };
}

export default ArchivePage;
