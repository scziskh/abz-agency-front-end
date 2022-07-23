import styled from 'styled-components';
import ButtonLink from '../button';

const Header = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <div>
          <img src="/assets/Logo.svg" width="104px" height="26px" />
        </div>
        <div>
          <ButtonLink name="Users" link="/" />
          <ButtonLink name="Sign up" link="/" />
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  background-color: white;
  height: 100%;
  @media (max-width: 1280px) {
    padding: 0 60px;
  }
  @media (max-width: 768px) {
    padding: 0 32px;
  }
  @media (max-width: 480px) {
    padding: 0 16px;
  } ;
`;

const ContentWrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  img {
    margin-top: 7px;
  }
  a {
    margin-left: 10px;
  }
`;

export default Header;
