import styled from 'styled-components';

const MaxWidthWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.75rem;

  @media ${p => p.theme.breakpoints.mdAndSmaller} {
    padding: 0 0.75rem;
  }
`;

export default MaxWidthWrapper;
