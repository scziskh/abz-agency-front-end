import styled from 'styled-components';
import phoneFormatter from '../../helpers/phone-formatter';

const Card = props => {
  const phone = phoneFormatter(props.tel);
  return (
    <Wrapper>
      <Image>
        <img src="assets/photo-cover.svg" />
      </Image>
      <Name>
        <p>Name</p>
      </Name>
      <Contacts>
        <p>
          Lead Independent Director of Independent Company of Independent
          Country
        </p>
        <p>Takamuru@email.com</p>
        <p>{phone}</p>
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
  div {
    overflow: hidden;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
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
