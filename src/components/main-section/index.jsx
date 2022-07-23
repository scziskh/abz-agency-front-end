import styled from 'styled-components';
import ButtonLink from '../button';

const MainSection = () => {
  return (
    <Wrapper>
      <Filter>
        <TextWrapper>
          <h1>Test assignment for front-end developer</h1>
          <p>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they&apos;ll be building web interfaces with
            accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.
          </p>
          <ButtonLink name="Sign up" link="/" />
        </TextWrapper>
      </Filter>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0;
  width: 100%;
  height: 650px;
  background: url('/assets/pexels-alexandr-podvalny-1227513.jpeg');
  background-size: 220%;
  background-position: 50% 80%;
  @media (max-width: 1280px) {
    background-size: 260%;
    background-position: 50% 80%;
  }
  @media (max-width: 768px) {
    height: 500px;
  }
  @media (max-width: 480px) {
    background-size: 260%;
    background-position: 50% 90%;
  }
`;

const Filter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: brightness(0.5);
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 380px;
  text-align: center;
  color: white;
  a {
    margin: 0 auto;
    margin-top: 11px;
  }
  @media (max-width: 480px) {
    margin-top: -32px;
    width: 320px;
  } ;
`;

export default MainSection;
