import React from 'react';

import {
  getBlogPostContent,
  getPopularContent,
  getCategories,
} from '../lib/content';
import StandardLayout from '../layouts/Standard';
import ArticleContent from '../components/ArticleContent/ArticleContent';

const Homepage = ({
  articles,
  categories,
  popularContent,
}) => {
  return (
    <StandardLayout
      categories={ categories }
      populars={ popularContent }
    >
      {
        articles.map((item) => (
          <ArticleContent
            key={ item.slug }
            type="ordered"
            data={item}
          />
        ))
      }
    </StandardLayout>
  );
};

export async function getStaticProps() {
  const articles = await getBlogPostContent({});
  const categories = await getCategories();
  const popularContent = await getPopularContent();
  return {
    props: { articles, categories, popularContent },
  };
}

export default Homepage;
