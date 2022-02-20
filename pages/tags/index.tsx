import React from 'react';
import styled from 'styled-components';

import {
  getTags,
  getPopularBlogs,
  getCategories,
} from '../../lib/content';
import Sticky from '../../components/Sticky/Sticky';
import StandardLayout from '../../layouts/Standard';
import { TextLink } from '../../components/Link/Link';
import TopCategories from '../../components/Card/TopCategories';
import MoreFunctions from '../../components/Card/MoreFunctions';
import AuthorContent from '../../components/Card/AuthorContent';
import PopularContent from '../../components/Card/PopularContent';
import ContentPreview from '../../components/ContentPreview/ContentPreview';

const MainContent = ({ tags }) => {
  return (
    <Wrapper>
      { tags.map((item) => <Cloud key={ item } href={`/tags/${ item}`}>{ item }</Cloud>) }
    </Wrapper>
  )
}
const RightContent = ({ populars, categories }) => {
  return (
    <>
      <AuthorContent />
      <Sticky top="1.5rem">
        <MoreFunctions />
        <PopularContent data={ populars } />
        <TopCategories data={ categories } />
      </Sticky>
    </>
  )
}

const Tagspage = ({
  tags,
  categories,
  populars,
}) => {
  return (
    <StandardLayout
      mainContent={ <MainContent tags={ tags } /> }
      rightContent={ <RightContent populars={ populars } categories={ categories } /> }
    />
  );
};

const Wrapper = styled(ContentPreview)`
  word-break: break-all;
`;
const Cloud = styled(TextLink)`
  padding: 1rem;
  line-height: 2;
  font-size: 1.2rem;
  white-space: nowrap;
  transition: color 0.4s;
`

export async function getStaticProps() {
  const tags = await getTags();
  const categories = await getCategories();
  const populars = await getPopularBlogs();
  return {
    props: { tags, categories, populars },
  };
}
export default Tagspage;