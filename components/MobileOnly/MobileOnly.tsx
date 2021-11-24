import styled from 'styled-components';

const MobileOnly = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

export default MobileOnly;