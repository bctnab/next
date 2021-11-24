import React from 'react';
import styled from 'styled-components';

import {
  getTags,
  getPopularContent,
  getCategories,
} from '../../lib/content';
import StandardLayout from '../../layouts/Standard';
import { TextLink } from '../../components/Link/Link';
import ContentPreview from '../../components/ContentPreview/ContentPreview';

const ArchivePage = ({
  tags,
  categories,
  popularContent,
}) => {
  return (
    <StandardLayout
      categories={ categories }
      populars={ popularContent }
    >
      <Wrapper>
        {
          tags.map((item) => <Cloud key={ item } href={`/tags/${ item}`}>{ item }</Cloud>)
        }
      </Wrapper>
    </StandardLayout>
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
  const popularContent = await getPopularContent();
  return {
    props: { tags, categories, popularContent },
  };
}
export default ArchivePage;
