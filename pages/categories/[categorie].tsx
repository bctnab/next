import React from 'react';
import styled from 'styled-components';

import {
  getCategories,
  getPopularContent,
  getCategoriesPaths,
  queryPostByCategorie
} from '../../lib/content';
import Heading from '../../components/Heading/Heading';
import StandardLayout from '../../layouts/Standard';
import ContentPreview from '../../components/ContentPreview/ContentPreview';
import ArticleContent from '../../components/ArticleContent/ArticleContent';

const Homepage = ({
  categorie,
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
        <Heading type="large-title">分类: { categorie }</Heading>
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
  const { categorie } = params;
  const categories = await getCategories();
  const popularContent = await getPopularContent();
  const posts = await queryPostByCategorie(categorie);

  return {
    props: {
      categorie,
      posts,
      categories,
      popularContent
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
