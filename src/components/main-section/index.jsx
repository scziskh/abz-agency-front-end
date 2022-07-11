import styled from 'styled-components';
import Button from '../button';

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
          <Button name="Sign up" />
        </TextWrapper>
      </Filter>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0;
  width: 100%;
  height: 644px;
  background: 100% url('/assets/pexels-alexandr-podvalny-1227513.jpeg');
`;

const Filter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: brightness(0.4);
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 380px;
  text-align: center;
  color: white;
  button {
    margin: auto;
    margin-top: 10px;
  }
`;

export default MainSection;
