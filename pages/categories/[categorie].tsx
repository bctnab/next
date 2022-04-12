import React from 'react';
import styled from 'styled-components';

import {
  getCategories,
  getPopularBlogs,
  getCategoriesPaths,
  queryPostByCategorie
} from '../../lib/content';
import Sticky from '../../components/Sticky/Sticky';
import StandardLayout from '../../layouts/Standard';
import Heading from '../../components/Heading/Heading';
import TopCategories from '../../components/Card/TopCategories';
import MoreContent from '../../components/Card/MoreContent';
import AuthorContent from '../../components/Card/AuthorContent';
import PopularContent from '../../components/Card/PopularContent';
import ContentPreview from '../../components/ContentPreview/ContentPreview';
import ArticleContent from '../../components/ArticleContent/ArticleContent';

const MainContent = ({ posts, categorie }) => {
  return (
    <>
      <ContentPreview>
        <Heading type="large-title">分类: { categorie }</Heading>
        <Describe>共 { posts.length } 篇文章</Describe>
      </ContentPreview>
      {
        posts.map((item) => <ArticleContent key={item.slug} data={item} type="ordered" />)
      }
    </>
  )
}
const RightContent = ({ populars, categories }) => {
  return (
    <>
      <AuthorContent />
      <Sticky top="1.5rem">
        <MoreContent />
        <PopularContent data={ populars } />
        <TopCategories data={ categories } />
      </Sticky>
    </>
  )
}

const Homepage = ({
  categorie,
  posts,
  categories,
  populars,
}) => {
  return (
    <StandardLayout
      mainContent={ <MainContent posts={ posts } categorie={ categorie } /> }
      rightContent={ <RightContent populars={ populars } categories={ categories } /> }
    />
  );
};

const Describe = styled.div`
  font-size: 1rem;
  margin-top: 5px;
  display: inline-block;
  color: var(--color-gray-700);
`;

export async function getStaticProps({ params }) {
  const { categorie } = params;
  const categories = await getCategories();
  const populars = await getPopularBlogs();
  const posts = await queryPostByCategorie(categorie);

  return {
    props: {
      categorie,
      posts,
      categories,
      populars
    },
  };
}
export async function getStaticPaths() {
  const paths = await getCategoriesPaths();
  return {
    paths,
    fallback: false,
  };
}

export default Homepage;
