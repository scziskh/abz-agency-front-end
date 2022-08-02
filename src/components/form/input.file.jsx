import styled from 'styled-components';
import { ConnectForm } from '../../helpers/connect-form';

const InputFile = props => {
  const { upload, fileName, name } = props;

  return (
    <ConnectForm>
      {({ register }) => (
        <Label htmlFor={`file`}>
          <Input type={`file`} id={`file`} {...register(name)} />
          <Upload>
            <p>{upload}</p>
          </Upload>
          <FileName>
            <p>{fileName}</p>
          </FileName>
        </Label>
      )}
    </ConnectForm>
  );
};

const Label = styled.label`
  width: 100%;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const Upload = styled.div`
  border: 1px solid black;
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
  border: 1px solid var(--formColor);
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

export default InputFile;
