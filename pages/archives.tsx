import React from 'react';

import {
  getPostTimeAxis,
  getPopularContent,
  getCategories,
} from '../lib/content';
import StandardLayout from '../layouts/Standard';
import Timeline from '../components/Timeline/Timeline';

const ArchivePage = ({
  blogs,
  categories,
  popularContent,
}) => {
  return (
    <StandardLayout
      categories={ categories }
      populars={ popularContent }
    >
      {
        blogs.map((item) => <Timeline key={ item.title } title={ item.title } data={ item.data } />)
      }
      
    </StandardLayout>
  );
};

export async function getStaticProps() {
  const blogs = await getPostTimeAxis();
  const categories = await getCategories();
  const popularContent = await getPopularContent();
  return {
    props: { blogs, categories, popularContent },
  };
}

export default ArchivePage;
