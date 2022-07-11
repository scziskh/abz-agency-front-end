import styled from 'styled-components';

const Button = (props) => {
  return (
    <Wrapper>
        {props.name}
    </Wrapper>
  );
}

const Wrapper = styled.button`
    border: none;
    width: 100px;
    height: 36px;
    border-radius: 18px;
    background-color: var(--primaryColor);
`;

export default Button;