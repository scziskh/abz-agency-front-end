import styled from 'styled-components';

const ErrorGetRequest = ({ message }) => {
  return (
    <Wrapper>
      <Message>{message}</Message>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 25px 0;
  margin: 25px 0;
  border: 3px solid var(--secondaryColor);
`;

const Message = styled.h1`
  text-align: center;
`;

export default ErrorGetRequest;
