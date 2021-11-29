import React from 'react';

import {
  getPosts,
  getPopularBlogs,
  getCategories,
} from '../lib/content';
import StandardLayout from '../layouts/Standard';
import Sticky from '../components/Sticky/Sticky';
import TopCategories from '../components/Card/TopCategories';
import AuthorContent from '../components/Card/AuthorContent';
import PopularContent from '../components/Card/PopularContent';
import ArticleContent from '../components/ArticleContent/ArticleContent';

const MainContent = ({ posts }) => {
  return (
    posts.map((item) => (
      <ArticleContent
        key={ item.slug }
        type="ordered"
        data={item}
      />
    ))
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
const Homepage = ({
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
  const posts = await getPosts({});
  const categories = await getCategories();
  const populars = await getPopularBlogs();
  return {
    props: { posts, categories, populars },
  };
}

export default Homepage;
