import { useState } from 'react';
import styled from 'styled-components';

const InputFile = props => {
  const { upload, defaultName, name } = props;
  const [fileName, setFileName] = useState();

  return (
    <Wrapper>
      <Label htmlFor={`file`}>
        <Input type={`file`} id={`file`} name={name} />
        <Upload>
          <p>{upload}</p>
        </Upload>
        <FileName>
          <p>{fileName || defaultName}</p>
        </FileName>
      </Label>
      <Message></Message>
    </Wrapper>
  );
};

const Wrapper = styled.fieldset`
  border: none;
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
