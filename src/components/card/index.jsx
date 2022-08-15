import styled from 'styled-components';
import phoneFormatter from '../../helpers/phone-formatter';
import CardElement from './element.card';

const Card = props => {
  const { photo, name, email, position, phone } = props.user;
  return (
    <Wrapper>
      <Image>
        <img src={photo} />
      </Image>
      <Name>
        <CardElement text={name} />
      </Name>
      <Contacts>
        <CardElement text={position} />
        <CardElement text={email} />
        <CardElement text={phoneFormatter(phone)} />
      </Contacts>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: calc((100% - 60px) / 3);
  background-color: white;
  padding: 20px;
  display: grid;
  grid-row-gap: 20px;
  border-radius: 10px;
  position: relative;
  div {
    overflow: hidden;
    white-space: nowrap;
  }
  @media (max-width: 768px) {
    width: calc((100% - 30px) / 2);
  }
  @media (max-width: 480px) {
    grid-row-gap: 20px;
    width: 100%;
  }
`;
const Image = styled.div`
  margin: 0 auto;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  overflow: hidden;
`;
const Name = styled.div``;
const Contacts = styled.div``;

export default Card;
