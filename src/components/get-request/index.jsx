import styled from 'styled-components';
import ButtonLink from '../button/index.jsx';
import Card from '../card/index.jsx';

const GetRequest = () => {
  return (
    <>
      <Wrapper>
        <h1> Working with GET request</h1>
        <CardsGroup>
          <Card tel="+380633216547" />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsGroup>
        <ButtonLink link="/" name="Show more" />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  text-align: center;
  h1 {
    margin: 140px 0 0;
  }
`;

const CardsGroup = styled.div`
  padding: 50px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export default GetRequest;
