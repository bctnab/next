import styled from 'styled-components';

const ContentPreview = styled.div`
  overflow: auto;
  padding: 1.5rem;
  margin-top: ${(props) => (props.top?props.top:'1.5rem')};
  box-shadow: var(--color-box-shadow);
  background: var(--color-background);
  border-radius: var(--base-box-radius);
`;

export default ContentPreview;