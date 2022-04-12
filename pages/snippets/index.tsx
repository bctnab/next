import React from 'react';

import {
  getSnippets,
  getPopularBlogs,
  getCategories,
} from '../../lib/content';
import StandardLayout from '../../layouts/Standard';
import Sticky from '../../components/Sticky/Sticky';
import TopCategories from '../../components/Card/TopCategories';
import AuthorContent from '../../components/Card/AuthorContent';
import MoreContent from '../../components/Card/MoreContent';
import PopularContent from '../../components/Card/PopularContent';
import ContentPreviewGrid from '../../components/ContentPreviewGrid/ContentPreviewGrid';

const MainContent = ({
  blogs
}) => {
  return (
    <ContentPreviewGrid
      data={ blogs }
      fields={[
        {
          label: 'Name',
          key: 'title',
        }, {
          label: 'Description',
          key: 'abstract',
        }, {
          label: 'Category',
          key: 'categorie',
        }, {
          label: 'Last Updated',
          key: 'date',
        }
      ]}
    />
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

const Snippet = ({
  blogs,
  categories,
  populars,
}) => {
  return (
    <StandardLayout
      mainContent={ <MainContent blogs={ blogs } /> }
      rightContent={ <RightContent populars={ populars } categories={ categories } /> }
    />
  );
};

export async function getStaticProps() {
  const blogs = await getSnippets();
  const categories = await getCategories();
  const populars = await getPopularBlogs();
  return {
    props: { blogs, categories, populars },
  };
}

export default Snippet;
