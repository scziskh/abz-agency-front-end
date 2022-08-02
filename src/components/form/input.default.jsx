import styled from 'styled-components';
import { ConnectForm } from '../../helpers/connect-form';

const InputDefault = props => {
  const { type, name, placeholder } = props;
  return (
    <ConnectForm>
      {({ register, formState: { errors } }) => (
        <Wrapper>
          <Input
            type={type}
            placeholder={` `}
            {...register(name, { required: `Please enter your ${name}` })}
            {...console.log(errors)}
          />
          <Label htmlFor={name}>{placeholder}</Label>
          <Error>{errors?.[name]?.message}</Error>
        </Wrapper>
      )}
    </ConnectForm>
  );
};

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
  z-index: 1;
  &:focus ~ label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-28px);
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
  top: 15px;
  left: 17px;
`;

const Error = styled.p`
  position: absolute;
`;

export default InputDefault;
