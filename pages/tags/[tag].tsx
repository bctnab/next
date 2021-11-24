import React from 'react';
import styled from 'styled-components';

import {
  queryPostByTag,
  getTagsPaths,
  getCategories,
  getPopularContent,
} from '../../lib/content';
import StandardLayout from '../../layouts/Standard';
import Heading from '../../components/Heading/Heading';
import ContentPreview from '../../components/ContentPreview/ContentPreview';
import ArticleContent from '../../components/ArticleContent/ArticleContent';

const Homepage = ({
  tag,
  posts,
  categories,
  popularContent,
}) => {
  return (
    <StandardLayout
      categories={ categories }
      populars={ popularContent }
    >
      <ContentPreview>
        <Heading type="large-title">标签: { tag }</Heading>
        <Describe>共 { posts.length } 篇文章</Describe>
      </ContentPreview>
      {
        posts.map((item) => <ArticleContent key={item.slug} data={item} type="ordered" />)
      }
    </StandardLayout>
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
  const popularContent = await getPopularContent();
  
  return {
    props: {
      tag,
      posts,
      categories,
      popularContent
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

export default Homepage;
