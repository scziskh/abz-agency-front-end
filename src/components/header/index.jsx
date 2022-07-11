import styled from 'styled-components';
import Button from '../button';

const Header = () => {
  return (
    <Wrapper>
      <div>
        <img src='/assets/Logo.svg' width="104px" height="26px" />
      </div>
      <div><Button name='Users'/><Button name='Sign up'/></div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-top: 7px;
  }
  button {
    margin-left: 9px;
  }
`;

export default Header;
