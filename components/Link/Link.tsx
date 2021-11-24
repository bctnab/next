import styled from 'styled-components';

const ExternalLink = styled.a`
  color: var(--color-primary);
  text-decoration: none;

  &:hover{
    transition: box-shadow 200ms ease 0s;
    box-shadow: 0px 2px 0px var(--color-primary);
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

const TextLink = styled(ExternalLink)`
  color: ${(props) => (props.color || 'var(--color-text)')};

  &:hover{
    box-shadow: none;
    color: var(--color-primary);
  }
`;

const LightLink = styled(ExternalLink)`
  color: var(--color-gray-700);

  &:hover{
    box-shadow: none;
    color: var(--color-primary);
  }
`;
export {
  ExternalLink,
  TextLink,
  LightLink
}
export default ExternalLink;