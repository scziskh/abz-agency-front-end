import { useState } from 'react';
import styled from 'styled-components';
import { ConnectForm } from '../../helpers/connect-form';

const InputFile = props => {
  const { upload, defaultName, name, properties } = props;
  const [fileName, setFileName] = useState();

  return (
    <ConnectForm>
      {({ register, formState: { errors }, getValues, setValue }) => (
        <Wrapper {...errors?.[name]}>
          <Label htmlFor={`file`}>
            <Input
              type={`file`}
              id={`file`}
              {...register(name, {
                onChange: () => {
                  setFileName(getValues(name)[0].name);
                  console.log(getValues(name));
                },
                ...properties,
              })}
            />
            <Upload {...errors?.[name]}>
              <p>{upload}</p>
            </Upload>
            <FileName {...errors?.[name]}>
              <p>{fileName || defaultName}</p>
            </FileName>
          </Label>
          <Message>{errors?.[name]?.message}</Message>
        </Wrapper>
      )}
    </ConnectForm>
  );
};

const Wrapper = styled.div`
  position: relative;
  label,
  p {
    color: ${({ message }) => (message ? 'red' : 'var(--formColor)')};
  }
`;

const Label = styled.label`
  width: 100%;
  cursor: pointer;
  position: relative;
`;

const Input = styled.input`
  display: none;
`;

const Upload = styled.div`
  border: ${({ message }) => (message ? '2px solid red' : '1px solid black')};
  border-radius: 4px 0 0 4px;
  width: 83px;
  height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  @media (max-width: 480px) {
    width: 83px;
  }
`;

const FileName = styled.div`
  border: ${({ message }) =>
    message ? '2px solid red' : '1px solid var(--formColor)'};
  color: var(--formColor);
  border-left: 0;
  border-radius: 0 4px 4px 0;
  width: 297px;
  height: 54px;
  display: inline-flex;
  align-items: center;
  padding-left: 16px;
  z-index: -1;
  @media (max-width: 480px) {
    width: 247px;
  }
`;

const Message = styled.p`
  position: absolute;
  font-size: 12px;
  left: 17px;
`;

export default InputFile;
