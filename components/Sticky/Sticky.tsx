import styled from 'styled-components';

const Sticky = ({ top = '0', children }) => {
  return (
    <Wrapper top={top}>
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  position: sticky;
  top: ${(props) => props.top};
`;

export default Sticky;