import styled from 'styled-components';

const InputRadio = props => (
  <Wrapper>
    <Input type="radio" name={props.name} id={props.id} />
    <Label htmlFor={props.id}>{props.label}</Label>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 380px;
`;

const Input = styled.input`
  & {
    display: none;
  }
  &:checked + label:before {
    outline: 1px solid var(--secondaryColor);
    background-color: var(--secondaryColor);
  }
`;

const Label = styled.label`
  cursor: pointer;
  margin-left: 5px;
  line-height: 33px;
  &:before {
    content: ' ';
    display: inline-block;
    width: 10px;
    height: 10px;
    outline: 1px solid var(--formColor);
    outline-offset: 4px;
    border-radius: 5px;
    margin-right: 18px;
  }
`;

export default InputRadio;
