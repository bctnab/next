import styled from 'styled-components';

const DesktopOnly = styled.div`
  @media (min-width: 768px){
    display: none;
  }
`;

export default DesktopOnly;
