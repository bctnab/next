import styled from 'styled-components';
import ContentPreview from '../ContentPreview/ContentPreview';

const BriefContent = ({
  data
}) => {
  const {
    time,
    content
  } = data;
  return (
    <Wrapper>
      <time dateTime={ time }>{ time }</time>
      <DiaryInfo>{ content }</DiaryInfo>
    </Wrapper>
  );
};

const Wrapper = styled(ContentPreview)`
  display: flex;
  flex-direction: column;
  margin: 0;
`;
const DiaryInfo = styled.div`
  padding: 8px 4px;
  font-weight: bold;
`;

export default BriefContent;