import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonLink from '../button/index.jsx';
import Card from '../card/index.jsx';
import { useGetUsersQuery } from '../../redux/users-api.js';

const GetRequest = () => {
  const { data } = useGetUsersQuery(1);

  const [users, setUsers] = useState(null);
  
  useEffect(() => {
    if (data) {
      setUsers(data);
    }
    console.log(data);
  }, [data]);


  return (
    <>
      <Wrapper>
        <h1> Working with GET request</h1>
        <CardsGroup>
          <Card
            name="Anton Solomin"
            tel="+380633216547"
            email="solomin@gmail.com"
            jobTitle="Director"
          />
          <Card
            name="Igor Gorlov"
            tel="+380633216545"
            email="gorlov@gmail.com"
            jobTitle="Director of Director"
          />
          <Card
            name="Aleksander Pogoloviniuk-Ihnatushin"
            tel="+380688767938"
            email="api@association-of-directors.ua"
            jobTitle="Director of Director of Director"
          />
          <Card
            name="Artur Jobian"
            tel="+380633216555"
            email="jobian@ukr.net"
            jobTitle="Director of Company"
          />
          <Card
            name="Artur Solomin"
            tel="+380633216537"
            email="solomin@mail.ru"
            jobTitle="Director"
          />
          <Card
            name="Anton Solomiy"
            tel="+380633216539"
            email="solomiy@gmail.com"
            jobTitle="Director"
          />
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

const CardsGroup = styled.div`
  padding: 50px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  @media (max-width: 480px) {
    gap: 20px;
  } ;
`;

export default GetRequest;
