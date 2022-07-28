import { useEffect, useState } from 'react';
import { useGetUsersQuery } from '../../redux/users-api.js';
import styled from 'styled-components';
import Card from '../card/index.jsx';
import Button from '../form/button.default.jsx';

const GetRequest = () => {
  const countSteps = 6;
  const [usersCount, setUsersCount] = useState(() => countSteps);

  const { data } = useGetUsersQuery(usersCount);

  const [cardsData, setCardsData] = useState();
  useEffect(() => {
    if (data) {
      const users = data.users;
      const cards = users.map(user => (
        <Card
          key={user.id}
          photo={user.photo}
          name={user.name}
          phone={user.phone}
          email={user.email}
          position={user.position}
        />
      ));
      setCardsData(cards);
    }
  }, [data]);

  const [button, setButton] = useState();

  useEffect(
    () =>
      setButton(() => {
        if (data?.total_users > usersCount) {
          return (
            <Button
              name="Show more"
              function={() => setUsersCount(() => usersCount + countSteps)}
            />
          );
        }
        return;
      }),
    [data, usersCount],
  );

  return (
    <>
      <Wrapper>
        <h1> Working with GET request</h1>
        <CardsGroup>{cardsData}</CardsGroup>
        {button}
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
