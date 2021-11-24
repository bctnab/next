import styled from 'styled-components';
import NextLink from 'next/link';

import { TextLink } from '../Link/Link';
import ContentPreview from '../ContentPreview/ContentPreview';

const BriefContent = ({
  data
}) => {
  const {
    date,
    slug,
    title,
    time
  } = data;

  return (
    <Wrapper>
      <time dateTime={ time }>{ date }</time>
      <NextLink passHref href={`/post/${ slug}`}>
        <TextLink>{ title }</TextLink>
      </NextLink>
    </Wrapper>
  );
};

const Wrapper = styled(ContentPreview)`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export default BriefContent;