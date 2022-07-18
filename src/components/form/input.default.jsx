import styled from 'styled-components';

const InputDefault = props => (
  <Wrapper>
    <Input type={props.type} name={props.name} placeholder=" " />
    <Label htmlFor={props.name}>{props.placeholder}</Label>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  background-color: transparent;
  outline: none;
  border: 1px solid var(--formColor);
  border-radius: 4px;
  padding: 13px 15px;
  margin: 6px 0;
  z-index: 1;
  &:focus ~ label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-26px);
    padding: 0 5px;
    font-size: 14px;
    background-color: var(--backgroundColor);
  }
`;

const Label = styled.label`
  color: var(--formColor);
  transition: 0.25s all;
  pointer-events: none;
  position: absolute;
  top: 20px;
  left: 16px;
`;

export default InputDefault;
