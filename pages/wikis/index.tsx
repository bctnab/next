import React from 'react';

import {
  getPopularBlogs,
  getCategories,
} from '../../lib/content';
import Sticky from '../../components/Sticky/Sticky';
import StandardLayout from '../../layouts/Standard';
import TopCategories from '../../components/Card/TopCategories';
import AuthorContent from '../../components/Card/AuthorContent';
import MoreContent from '../../components/Card/MoreContent';
import PopularContent from '../../components/Card/PopularContent';
import ArticleContent from '../../components/ArticleContent/ArticleContent';

const MainContent = () => {
  return (
    <>
      <ArticleContent
        type="wiki"
        title="图库日志"
        categorie="images"
        color="#4caf50"
        thumb="https://cdn.jsdelivr.net/gh/cdn-x/wiki@1.0.2/stellar/icon.svg"
        abstract="图库，仅用于记录日常生活，或其他一些地方，碰到或见到令人印象深刻的图片，以及我所喜欢的一些图片。"
        error="图片收集中，暂不支持访问"
      />
      <ArticleContent
        type="wiki"
        title="运算符查找"
        categorie="JavaScript"
        color="#ffa000"
        thumb="https://www.joshwcomeau.com/images/og-operator-lookup.png"
        abstract="通常对于操作符我们只会记录操作符简单语法，并不会记录如何工作的。由于数量过多如果你厌倦了那该死的操作符，那么它会告诉你。"
        error="项目开发中，暂不支持访问"
      />
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

const WikisPage = ({
  categories,
  populars,
}) => {
  return (
    <StandardLayout
      mainContent={ <MainContent /> }
      rightContent={ <RightContent populars={ populars } categories={ categories } /> }
    />
  );
};

export async function getStaticProps() {
  const categories = await getCategories();
  const populars = await getPopularBlogs();

  return {
    props: { categories, populars },
  };
}

export default WikisPage;
