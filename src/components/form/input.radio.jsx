import styled from 'styled-components';

const InputRadio = props => {
  const { name, label, value } = props;
  const htmlId = `${name}_${value}`;

  return (
    <Wrapper>
      <Input type={`radio`} id={htmlId} name={name} />
      <Label htmlFor={htmlId}>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.fieldset`
  border: none;
  position: relative;
  margin: 0 auto;
  width: 100%;
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
