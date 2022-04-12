import React from 'react';
import styled from 'styled-components';

import {
  queryPostByTag,
  getTagsPaths,
  getCategories,
  getPopularBlogs,
} from '../../lib/content';
import Sticky from '../../components/Sticky/Sticky';
import StandardLayout from '../../layouts/Standard';
import Heading from '../../components/Heading/Heading';
import MoreContent from '../../components/Card/MoreContent';
import TopCategories from '../../components/Card/TopCategories';
import AuthorContent from '../../components/Card/AuthorContent';
import PopularContent from '../../components/Card/PopularContent';
import ContentPreview from '../../components/ContentPreview/ContentPreview';
import ArticleContent from '../../components/ArticleContent/ArticleContent';

const MainContent = ({ posts, tag }) => {
  return (
    <>
      <ContentPreview>
        <Heading type="large-title">标签: { tag }</Heading>
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

const Tagpage = ({
  tag,
  posts,
  categories,
  populars,
}) => {
  return (
    <StandardLayout
      mainContent={ <MainContent posts={ posts } tag={ tag } /> }
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
  const { tag } = params;
  const categories = await getCategories();
  const posts = await queryPostByTag(tag);
  const populars = await getPopularBlogs();
  
  return {
    props: {
      tag,
      posts,
      categories,
      populars
    },
  };
}
export async function getStaticPaths() {
  const paths = await getTagsPaths();
  return {
    paths,
    fallback: false,
  };
}

export default Tagpage;
