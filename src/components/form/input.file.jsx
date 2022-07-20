import styled from 'styled-components';

const InputFile = props => (
  <Label htmlFor="file">
    <Input type="file" id="file" />
    <Upload>
      <p>Upload</p>
    </Upload>
    <FileName>
      <p>Upload your photo</p>
    </FileName>
  </Label>
);

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
`;

export default InputFile;
