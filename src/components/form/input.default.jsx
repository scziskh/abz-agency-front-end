import styled from 'styled-components';
import { ConnectForm } from '../../helpers/connect-form';

const InputDefault = props => {
  const { type, name, placeholder, helper, properties } = props;
  return (
    <ConnectForm>
      {({ register, formState: { errors }, setValue }) => (
        <Wrapper {...errors?.[name]}>
          <Input
            type={type}
            placeholder={` `}
            {...register(name, {
              onChange: e => {
                setValue(e.target.name, e.target.value);
              },
              ...properties,
            })}
          />
          <Label htmlFor={name}>{placeholder}</Label>
          <Message>{errors?.[name]?.message || helper}</Message>
        </Wrapper>
      )}
    </ConnectForm>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  input {
    outline: ${({ message }) =>
      message ? '2px solid red' : '1px solid var(--formColor)'};
  }
  label,
  p {
    color: ${({ message }) => (message ? 'red' : 'var(--formColor)')};
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 13px 15px;
  z-index: 1;
  &:focus ~ label,
  &:not(:placeholder-shown) + label {
    transform: translate(-5px, -26px);
    padding: 0 5px;
    font-size: 12px;
    background-color: var(--backgroundColor);
  }
`;

const Label = styled.label`
  color: var(--formColor);
  transition: 0.25s all;
  pointer-events: none;
  position: absolute;
  top: 13px;
  left: 17px;
`;

const Message = styled.p`
  position: absolute;
  font-size: 12px;
  left: 17px;
`;

export default InputDefault;
