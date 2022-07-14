import styled from 'styled-components';
import ButtonLink from '../button/link';

const Header = () => {
  return (
    <Wrapper>
      <div>
        <img src="/assets/Logo.svg" width="104px" height="26px" />
      </div>
      <div>
        <ButtonLink name="Users" link="/" />
        <ButtonLink name="Sign up" link="/" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-top: 7px;
  }
  a {
    margin-left: 10px;
  }
`;

export default Header;
