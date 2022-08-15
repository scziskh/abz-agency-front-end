import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../card';
import Button from '../button/button.default.jsx';
import Preloader from '../preloader';
import ErrorGetRequest from '../errors/get-request';
import { useGetRequest } from '../../services/get-request';

const Users = props => {
  const count = props.countSteps;
  const [page, setPage] = useState(props.startPage);

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [totalUsers, setTotalUsers] = useState(null);
  const [hideButton, setHideButton] = useState(false);

  const resolve = data => {
    const { users, total_users } = data;
    setUsers(state => state.concat(users));
    setTotalUsers(total_users);
  };

  const isLoading = useGetRequest(
    resolve,
    setError,
    `users?page=${page}&count=${count}`,
  );

  useEffect(
    () => setHideButton(totalUsers === users.length),
    [totalUsers, users.length],
  );

  if (error) {
    return <ErrorGetRequest message={error} />;
  }

  return (
    <Wrapper>
      <h1>Working with GET request</h1>
      <CardsGroup>
        {users?.map((user, index) => (
          <Card key={index} user={user}></Card>
        ))}
      </CardsGroup>
      {isLoading ? (
        <Preloader />
      ) : (
        <Button
          name={`Show more`}
          func={() => {
            setPage(page => page + 1);
          }}
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

export default Users;
