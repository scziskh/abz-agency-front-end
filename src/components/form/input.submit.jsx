import styled from 'styled-components';

const InputSubmit = props => {
  const { name } = props;

  return <Wrapper type={`submit`} {...props} value={name} />;
};

const Wrapper = styled.input`
  ${props => (props.hide ? 'display: none;' : '')}
  margin: 0 auto;
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

export default InputSubmit;
