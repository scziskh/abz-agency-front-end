import styled from 'styled-components';

const CardElement = props => {
  const { text } = props;
  return (
    <Wrapper>
        <Text>{text}</Text>
        <TextSpan>{text}</TextSpan>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
`;

const Text = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  &:hover ~ span {
    display: block;
  }
`;

const TextSpan = styled.span`
  margin-top: 12px;
  display: none;
  border-radius: 5px;
  color: white;
  background-color: #212121;
  padding: 2px 8px;
  position: absolute;
  left: 45%;
  z-index: 999;
`;

export default CardElement;
