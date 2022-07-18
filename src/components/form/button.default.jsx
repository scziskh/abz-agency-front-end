import styled from 'styled-components';

const Button = props => {
  return <Wrapper href="">{props.name}</Wrapper>;
};

const Wrapper = styled.a`
  border: none;
  min-width: 100px;
  padding: 0 19px;
  height: 36px;
  border-radius: 18px;
  background-color: var(--primaryColor);
  transition: filter 0.25s;
  :hover {
    filter: brightness(1.05);
  }
`;

export default Button;
