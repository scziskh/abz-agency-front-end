import styled from 'styled-components';

const Button = props => {
  return (
    <Wrapper onClick={props.function} {...props}>
      {props.name}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  ${props => (props.hide ? 'display: none;' : '')}
  border: none;
  min-width: 100px;
  padding: 4px 18px;
  height: 34px;
  border-radius: 18px;
  background-color: var(--primaryColor);
  transition: filter 0.25s;
  cursor: pointer;
  :hover {
    filter: brightness(1.05);
  }
  :disabled {
    color: white;
    background-color: var(--formColor);
  }
`;

export default Button;
