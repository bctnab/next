import styled from 'styled-components';

const Icon = ({ prefix = 'icon', name, size = "14", margin = "0", color = "inherit" }) => {
  return (
    <Wrapper color={color} size={size} margin={margin} className={`icon-font ${ prefix}-${ name}`} />
  )
}

const Wrapper = styled.i`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.size}px;
`;
export default Icon;