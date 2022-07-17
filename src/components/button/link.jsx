import styled from 'styled-components';

const ButtonLink = props => {
  return <Wrapper href={props.link}>{props.name}</Wrapper>;
};

const Wrapper = styled.a`
  min-width: 100px;
  padding: 4px 18px;
  border-radius: 17px;
  background-color: var(--primaryColor);
  display: inline-block;
  text-align: center;
  transition: filter 0.25s;
  :hover {
    filter: brightness(1.05);
  }
`;

export default ButtonLink;
