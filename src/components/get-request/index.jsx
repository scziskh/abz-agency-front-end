import { useEffect, useState } from 'react';
import { useGetUsersQuery } from '../../redux/users-api.js';
import styled from 'styled-components';
import Card from '../card/index.jsx';
import Button from '../form/button.default.jsx';
import Preloader from '../preloader/index.jsx';

const GetRequest = props => {
  const count = props.countSteps;
  const [page, setPage] = useState(props.startPage);
  const { data: usersData, isFetching } = useGetUsersQuery({ count, page });

  const [users, setUsers] = useState([]);

  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    if (usersData) {
      setUsers((prevUsers) => prevUsers.concat(usersData.users));
    }
  }, [usersData]);

  useEffect(() => {
    if (usersData) {
      setHideButton(usersData.total_users === users.length);
    }
  }, [users.length, usersData]);

  return (
    <Wrapper>
      <h1> Working with GET request</h1>
      <CardsGroup>
        {users?.map((user, index) => (
          <Card
            key={index}
            photo={user.photo}
            name={user.name}
            position={user.position}
            email={user.email}
            phone={user.phone}
          ></Card>
        ))}
      </CardsGroup>
      {isFetching ? (
        <Preloader />
      ) : (
        <Button
          name="Show more"
          function={() => setPage(page + 1)}
          hide={hideButton}
        />
      )}
    </Wrapper>
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
