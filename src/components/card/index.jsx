import styled from 'styled-components';
import phoneFormatter from '../../helpers/phone-formatter';

const Card = props => {
  const phone = phoneFormatter(props.phone);
  return (
    <Wrapper>
      <Image>
        <img src={props.photo} />
      </Image>
      <Name>
        <p>{props.name}</p>
        <span>{props.name}</span>
      </Name>
      <Contacts>
        <div>
          <p>{props.position}</p>
          <span>{props.position}</span>
        </div>
        <div>
          <p>{props.email}</p>
          <span>{props.email}</span>
        </div>
        <div>
          <p>{phone}</p>
          <span>{phone}</span>
        </div>
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
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
      &:hover ~ span {
        display: block;
      }
    }
    span {
      margin-top: 12px;
      display: none;
      border-radius: 5px;
      color: white;
      background-color: #212121;
      padding: 2px 8px;
      position: absolute;
      left: 45%;
      z-index: 999;
    }
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
